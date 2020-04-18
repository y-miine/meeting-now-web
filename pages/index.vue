<template lang="pug">
v-app
  v-app-bar(app
    color="primary"
    dark)
    v-toolbar-title みーてぃんぐなう
  
  v-content
    template(v-if="isLoaded")
      v-row(v-for="item in users")
        v-col(cols="12")
          v-card
            v-list-item
              V-list-item-avatar(size="100"): img(:src="item.image")
              .title.ml-4 {{ item.name }}
              v-chip.ml-4(
                v-if="item.status"
                color="red"
                dark) ミーティング中
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
      users: [
        {
          name: 'たろう',
          image: '/user-01.png',
          status: 0,
        },
        // {
        //   name: "はなこ",
        //   image: "https://placehold.jp/150x150.png",
        //   status: 0
        // }
      ],
    }
  },
  async beforeMount() {
    await this.updateStatus()
    this.isLoaded = true
    setInterval(this.updateStatus, 1000)
  },
  methods: {
    async updateStatus() {
      const { data } = await this.$axios.get(`/status`)
      this.users[0].status = data.meetingMode
    },
  },
}
</script>

<style>
.v-content {
  padding-left: 16px !important;
  padding-right: 16px !important;
}

.v-card {
  padding: 24px;
}
</style>

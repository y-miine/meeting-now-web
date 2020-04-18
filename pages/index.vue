<template lang="pug">
div
  ul
    li(v-for="item in messages") {{ item }}
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  data(){
    return {
      socket: null,
      messages: [
        'hogehoge'
      ]
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      // options
    })
    this.socket.on('new-message', (message) => {
      this.messages.push(message)
    })
  },
  methods: {
    getMessage() {
      this.socket.emit('getMessage', { id: 'abc123' }, res => {
        this.messages.append(res)
      })
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>


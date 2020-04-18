let meetingMode = 0

function getResponse() {
  return JSON.stringify({
    meetingMode: meetingMode,
  })
}

export function start(req, res, next) {
  meetingMode = 1
  res.end(getResponse())
}

export function stop(req, res, next) {
  meetingMode = 0
  res.end(getResponse())
}

export function status(req, res, next) {
  res.end(getResponse())
}

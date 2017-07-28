var fs = require('fs')
var dir = './time'

const minutes = [...Array(60).keys()]

const fuzzyTime = minute => {
  const m = parseInt(minute, 10)
  switch (true) {
    case m < 9:
      return 'strax'
    case m < 19:
      return 'mindre än 20'
    case m < 29:
      return 'mindre än 30'
    case m < 39:
      return 'mindre än 40'
    case m < 49:
      return 'mindre än 50'
    default:
      return 'mindre än en timme'
  }
}

const createMinute = minute => {
  const minuteDir = `${dir}/${minute}`
  if (!fs.existsSync(minuteDir)) {
    fs.mkdirSync(minuteDir)
  }
  const time = fuzzyTime(minute)
  fs.writeFileSync(`${minuteDir}/index.html`, time)
}

minutes.forEach(createMinute)

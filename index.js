var fs = require('fs')
var dir = './time'

const minutes = [...Array(60).keys()]

const fuzzyTime = minute => {
  const m = parseInt(minute, 10)
  switch (true) {
    case m < 9:
      return 'strax'
    case m < 15:
      return 'inom en kvart'
    case m < 29:
      return 'under halvtimmen'
    case m < 45:
      return 'inom 45'
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

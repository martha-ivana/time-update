const index = require('./index')

// test tracks -- not sure what timestamp data type looks like in this case
const testTracks = [
  [{
    startTime: new Date(2022, 4, 12, 22, 21, 0),
    endTime: new Date(2022, 4, 12, 22, 21, 1),
    visible: false,
    show: () => { this.visible = true },
    hide: () => { this.visible = false }
  },
  {
    startTime: new Date(2022, 4, 12, 21, 26, 23),
    endTime: new Date(2022, 4, 12, 22, 6, 50),
    visible: false,
    show: () => { this.visible = true },
    hide: () => { this.visible = false }
  },
  {
    startTime: new Date(2022, 4, 12, 21, 26, 23),
    endTime: new Date(2022, 4, 12, 22, 6, 50),
    visible: false,
    show: () => { this.visible = true },
    hide: () => { this.visible = false }
  }]
  [{
    startTime: new Date(2022, 4, 12, 22, 23, 23),
    endTime: new Date(2022, 4, 12, 22, 26, 50),
    visible: false,
    show: () => { this.visible = true },
    hide: () => { this.visible = false }
  }]
  [{
    startTime: new Date(2022, 4, 12, 22, 11, 23),
    endTime: new Date(2022, 4, 12, 22, 55, 50),
    visible: false,
    show: () => { this.visible = true },
    hide: () => { this.visible = false }
  }]
]


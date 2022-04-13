const index = require('./index')

const testTracks = [
  [{
    id: 100,
    startTime: new Date(2022, 4, 12, 22, 0, 0),
    endTime: new Date(2022, 4, 12, 22, 30, 30),
    visible: false,
    show: () => { this.visible = true },
    hide: () => { this.visible = false }
  },
  {
    id: 101,
    startTime: new Date(2022, 4, 12, 22, 0, 23),
    endTime: new Date(2022, 4, 12, 22, 5, 50),
    visible: false,
    show: () => { this.visible = true },
    hide: () => { this.visible = false }
  },
  {
    id: 102,
    startTime: new Date(2022, 4, 12, 22, 6, 12),
    endTime: new Date(2022, 4, 12, 22, 26, 50),
    visible: false,
    show: () => { this.visible = true },
    hide: () => { this.visible = false }
  }],
  [{
    id: 200,
    startTime: new Date(2022, 4, 12, 22, 23, 23),
    endTime: new Date(2022, 4, 12, 22, 26, 33),
    visible: false,
    show: () => { this.visible = true },
    hide: () => { this.visible = false }
  }],
  [{
    id: 300,
    startTime: new Date(2022, 4, 12, 22, 11, 23),
    endTime: new Date(2022, 4, 12, 22, 55, 45),
    visible: false,
    show: () => { this.visible = true },
    hide: () => { this.visible = false }
  }]
]

// test
index.handler(testTracks, 240)

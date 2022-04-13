const annotationsByMsHashMap = {}
const maxVideoLengthInMs = 60 * 60 * 1000

const convertTimestampToMs = timestamp => {
  return (timestamp.getMinutes() * 60 * 1000) + (timestamp.getSeconds() * 1000)
}

const mapAnnotationsByMs = (tracks, videoLengthInMs) => {  
  for (let i = 0; i <= videoLengthInMs; i++) {
    console.log('i', i)
    annotationsByMsHashMap[i] = { visible: [], hidden: [] }
    for (let j = 0; j < tracks.length; j++) {
      tracks[j].forEach(annotation => {
        if (convertTimestampToMs(annotation.startTime) <= i && convertTimestampToMs(annotation.endTime) <= i) {
          annotationsByMsHashMap[i].visible.push(annotation)
        } else {
          annotationsByMsHashMap[i].hidden.push(annotation)
        }
      })
    }
  }
}

// this method gets called in timeUpdate
const setAnnotations = (currentTimeInSec) => {
  annotationsByMsHashMap[currentTimeInSec * 1000].visible.forEach(annotation => annotation.show())
  annotationsByMsHashMap[currentTimeInSec * 1000].hidden.forEach(annotation => annotation.hide())
}

exports.handler = (tracks, currentTime) => {
  mapAnnotationsByMs(tracks, maxVideoLengthInMs)
  setAnnotations(currentTime)
}

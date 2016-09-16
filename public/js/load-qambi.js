$(document).ready(function(){

  let song
  let track
  let sampler

  qambi.init()
  .then(() => {
    song = new qambi.Song()
    track = new qambi.Track()
    sampler = new qambi.Sampler()
    song.addTracks(track)
    track.setInstrument(sampler)
    track.monitor = true
    window.track = track;
    initUI()
  })

  function initUI(){
    
    // setup drowndown menu for banks and instruments

    let selectBank = document.getElementById('bank')
    let selectInstrument = document.getElementById('instrument')
    let path = '../../instruments/heartbeat'

    let optionsHeartbeat = '<option id="select">select instrument</option>'
    let heartbeatInstruments = qambi.getInstruments()
    heartbeatInstruments.forEach((instr, key) => {
      optionsHeartbeat += `<option id="${key}">${instr.name}</option>`
    })

    let gmInstruments = qambi.getGMInstruments()
    let optionsGM = '<option id="select">select instrument</option>'
    gmInstruments.forEach((instr, key) => {
      optionsGM += `<option id="${key}">${instr.name}</option>`
    })

    selectBank.addEventListener('change', () => {
      let key = selectBank.options[selectBank.selectedIndex].id
      console.log(key)
      if(key === 'heartbeat'){
        selectInstrument.innerHTML = optionsHeartbeat
        path = '../../instruments/heartbeat'
      }else if(key === 'fluidsynth'){
        selectInstrument.innerHTML = optionsGM
        path = '../../instruments/fluidsynth'
      }
    })

    selectInstrument.innerHTML = optionsHeartbeat
    selectInstrument.addEventListener('change', () => {
      let key = selectInstrument.options[selectInstrument.selectedIndex].id
      let url = `${path}/${key}.json`
      $('.loader').css("visibility", "visible");

      // option 1: clear the samples of the currently loaded instrument after the new samples have been loaded
      sampler.parseSampleData({url, clearAll: true})
      .then(() => {
        $('.loader').css("visibility", "hidden");
        console.log(`loaded: ${key}`)
      })
/*
      // option 2: clear the samples of the currently loaded instrument before loading the new samples
      sampler.clearAllSampleData()
      sampler.parseSampleData({url})
      .then(() => {
        console.log(`loaded: ${key}`)
      })
*/
    })
  }
});
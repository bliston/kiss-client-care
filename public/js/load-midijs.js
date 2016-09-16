window.onload = function() {
    loadInstrument("soundfont/midi-js-soundfonts/MusyngKite/", "church_organ");

    function loadInstrument(soundfontUrl, instrument) {
        MIDI.loadPlugin({
            soundfontUrl: soundfontUrl,
            instrument: instrument,
            onprogress: function(state, progress) {
                console.log(state, progress);
            },
            onsuccess: function() {
                MIDI.programChange(0, MIDI.GM.byName[instrument].number);
                console.log("MIDI.js has loaded");
                // var delay = 0; // play one note every quarter second
                // var note = 50; // the MIDI note
                // var velocity = 127; // how hard the note hits
                // // play the note
                // MIDI.setVolume(0, 127);
                // MIDI.noteOn(0, note, velocity, delay);
                // MIDI.noteOff(0, note, delay + 0.75);
            }
        });
    }
    window.loadInstrument = loadInstrument;

}

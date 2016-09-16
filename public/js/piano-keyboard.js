$(document).ready(function() {
    //create keyboard
    var kbdEl = document.querySelector('.keyboard');
    var noteAdj = 8;
    var keyboard = new Keyboard({
        element: kbdEl,
        range: ['a0', 'c2'],
        a11y: true,
        qwerty: true
    });
    keyboard.on('noteOn', function(data) {
        var note = data.which + noteAdj;
        handleMidiIn(0, 144, note, 100);
    });
    keyboard.on('noteOff', function(data) {
        var note = data.which + noteAdj;
        handleMidiIn(0, 128, note, 100);
    });

    //create qwerty stream
    var qwertyStream = QwertyStream({
        mode: 'piano',
        offset: keyboard.range[0]
    });
    qwertyStream.pipe(keyboard);
});

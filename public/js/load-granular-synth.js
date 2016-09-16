$(document).ready(function(){
	var Synth = new GranularMonoSynth("C6","public/assets/samples/Audio_Frequency_tone,_C6,_1046.50hz.ogg", wavesAudio, wavesLoaders);
	//var Synth = new GranularMonoSynth("C2","public/assets/samples/C2.mp3", wavesAudio, wavesLoaders);
	window.Synth = Synth;
});
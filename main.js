// Create a new instance of node-core-audio
var coreAudio = require('node-core-audio');

// Create a new audio engine
var engine = coreAudio.createNewAudioEngine();


/** 
 * Add an audio processing callback
 * This function accepts an input buffer coming from the sound card,
 * and returs an output buffer to be sent to your speakers.
 * Important: This function must return an output buffer
 **/
// function processAudio(inputBuffer) {
//   return inputBuffer;
// }

// engine.addAudioCallback(processAudio);
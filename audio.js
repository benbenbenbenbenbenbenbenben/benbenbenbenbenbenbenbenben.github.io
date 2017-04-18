var audioContext = new AudioContext();

function loadAudio(url, callback)
{
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function() {
        audioContext.decodeAudioData(request.response, function(buffer)
        {
            callback(buffer);
        });
    }
    request.send();
}

var audioContext = new AudioContext();

var clap;
var clave;
var cowbell;
var jingle;
var kick;
var snare;

loadAudio("https://benbenbenbenbenbenbenbenben.github.io/sounds/clap.wav", function (buffer) { clap = buffer; });
loadAudio("https://benbenbenbenbenbenbenbenben.github.io/sounds/clave.wav", function (buffer) { clave = buffer; });
loadAudio("https://benbenbenbenbenbenbenbenben.github.io/sounds/cowbell.wav", function (buffer) { cowbell = buffer; });
loadAudio("https://benbenbenbenbenbenbenbenben.github.io/sounds/jingle.wav", function (buffer) { jingle = buffer; });
loadAudio("https://benbenbenbenbenbenbenbenben.github.io/sounds/kick.wav", function (buffer) { kick = buffer; });
loadAudio("https://benbenbenbenbenbenbenbenben.github.io/sounds/snare.wav", function (buffer) { snare = buffer; });

function play(buffer)
{
    if (buffer != undefined)
    {
        player = audioContext.createBufferSource();
        player.buffer = buffer;

        player.connect(audioContext.destination);
        player.start();
    }
}

function playClap()
{
    play(clap);
}

function playClave()
{
    play(clave);
}

function playCowbell()
{
    play(cowbell);
}

function playJingle()
{
    play(jingle);
}

function playKick()
{
    play(kick);
}

function playSnare()
{
    play(snare);
}

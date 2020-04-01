const asuka = {
    "long": ["./assets/imgs/pa.png", "./assets/imgs/the.png", "./assets/imgs/tic.png"],
    "face": ["./assets/imgs/paaathetic.jpg"],
    "1pathetic": ["./assets/imgs/1pathetic.jpg"]
}

module.exports.pathetic = () => {
let keys = Object.keys(asuka);
return asuka[keys[ keys.length * Math.random() << 0]];
};

module.exports.voiceClip = (cmd) => {
    switch(cmd.toLowerCase()) {
        case 'love':
            return './assets/audio/berserker.wav';
        case 'jmo':
            return './assets/audio/jmo.wav';
        case 'rkami':
            return './assets/audio/rkami.wav';
    }
}

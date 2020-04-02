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
        case 'wake':
            return './assets/audio/wake.wav';
        case 'bar':
            return './assets/audio/bar.wav';
        case 'pizza':
            return './assets/audio/pizza.wav';
        case 'shipment':
            return './assets/audio/shipment.wav';
        case 'bargin':
            return './assets/audio/bargin.wav';
        case 'shitment':
            return './assets/audio/shitment.wav';
        case 'munchies':
            return './assets/audio/munchies.wav';
        case 'midi':
            return './assets/audio/midichlorians.wav';
        case 'skin':
            return './assets/audio/skin.wav';
        case 'heed':
            return './assets/audio/heed.wav';
        case 'art':
            return './assets/audio/art.wav';
    }
}

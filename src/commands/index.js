const voiceCommands = require('../../assets/objects/voiceCommands.json');
const perfectDrinks = require('../../assets/objects/perfectDrinks.json');

const asuka = {
    "long": ["./assets/imgs/pa.png", "./assets/imgs/the.png", "./assets/imgs/tic.png"],
    "face": ["./assets/imgs/paaathetic.jpg"],
    "1pathetic": ["./assets/imgs/1pathetic.jpg"]
}

module.exports.pathetic = () => {
let keys = Object.keys(asuka);
return asuka[keys[ keys.length * Math.random() << 0]];
};

const switchcase = cases => defaultCase => key => 
    cases.hasOwnProperty(key) ? cases[key] :defaultCase;

module.exports.getVC = switchcase(
    Object.values(voiceCommands).reduce((acc, value) => 
    (acc[value] = `./assets/audio/${value}.wav`, acc), {})
)('');

module.exports.perfectDrinks = (msg) => {
    let keys = Object.keys(perfectDrinks);
    let drinks = perfectDrinks[keys[ keys.length * Math.random() << 0]];
    
    drinks.forEach(drink => {
        msg.channel.send(drink);
    });
};
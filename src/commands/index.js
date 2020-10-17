const fs = require('fs');
const path = require('path');

const perfectDrinks = require('../../assets/objects/perfectDrinks.json');
const asuka = {
    "long": ["./assets/imgs/pa.png", "./assets/imgs/the.png", "./assets/imgs/tic.png"],
    "face": ["./assets/imgs/paaathetic.jpg"],
    "1pathetic": ["./assets/imgs/1pathetic.jpg"]
}

const voiceClip = (cmd) => {
    const clip = fs.readdirSync(path.join(__dirname, `../../assets/audio/${cmd}/`));
    return `./assets/audio/${cmd}/${clip[Math.floor(Math.random() * clip.length)]}`
};

module.exports.pathetic = () => {
let keys = Object.keys(asuka);
return asuka[keys[ keys.length * Math.random() << 0]];
};

module.exports.perfectDrinks = (msg) => {
    let keys = Object.keys(perfectDrinks);
    let drinks = perfectDrinks[keys[ keys.length * Math.random() << 0]];
    
    drinks.forEach(drink => {
        msg.channel.send(drink);
    });
};

module.exports.voiceMessage = (cmd, msg, vc) => {
    vc.join().then(connection => {
        const dispatcher = connection.play(voiceClip(cmd));
        dispatcher.on("end", end => {});
    }).catch(err => {
        console.log(err);
    });
    setTimeout(() => vc.leave(), 5 * 60 * 1000);
    msg.delete({setTimeout: 10000});
}
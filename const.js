const asuka = {
    "long": ["./assets/imgs/pa.png", "./assets/imgs/the.png", "./assets/imgs/tic.png"],
    "face": ["./assets/imgs/paaathetic.jpg"],
    "1pathetic": ["./assets/imgs/1pathetic.jpg"]
}

module.exports.pathetic = () => {
let keys = Object.keys(asuka);
return asuka[keys[ keys.length * Math.random() << 0]];
};
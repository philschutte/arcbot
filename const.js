const asuka = {
    "long": ["./assets/imgs/pa.png", "./assets/imgs/the.png", "./assets/imgs/tic.png"],
    "face": ["./assets/imgs/paaathetic.jpg"],
    "1pathetic": ["./assets/imgs/1pathetic.jpg"]
}

module.exports.pathetic = () => {
let keys = Object.keys(asuka);
return asuka[keys[ keys.length * Math.random() << 0]];
};

const commands = [ 'love',
    'rkami',
    'jmo',
    'wake',
    'bar',
    'pizza',
    'shipment',
    'shitment',
    'bargin',
    'munchies',
    'midi',
    'skin',
    'heed',
    'art',
    'mcguffin',
    'fanfare',
    'rva',
    'chinmad',
    'chins',
    'dexter',
    'larry',
    'washington',
    'bawls',
    'bawls2',
    'padme',
    'phil',
    'skin2',
    'wdeg',
    'thezone',
    'singularity1',
    'xigbe2',
    'vip',
    'vip2',
    'deal',
    'runes',
    'arc',
    'babytime',
    'dancefight2',
    'yeahboi1',
    'wtf',
    'jotaro',
    'wow',
    'amnesia',
    'hooligan',
    'jims',
    'sand',
    'shoes1',
    'runes2',
    'shoes3',
    'shoes5',
    'jedi',
    'bickering',
    'duke',
    'egypt',
    'nudes',
    'owen',
    'alone',
    'friend',
    'steve',
    'lemonade',
    'whatsup',
    'weekend',
    'beautiful',
    'longbeautiful',
    'cheese',
    'yes',
    'fun',
    'larry2',
    'ass',
    'bet',
    'lasermoon',
    'bonjo',
    'icu'   
];

const switchcase = cases => defaultCase => key => 
    cases.hasOwnProperty(key) ? cases[key] :defaultCase

module.exports.getVC = switchcase(
    commands.reduce((acc, value) => 
    (acc[value] = `./assets/audio/${value}.wav`, acc), {})
)('')
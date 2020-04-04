const Discord = require('discord.js');
const client = new Discord.Client();

const token = require('./config.js');
const utils = require('./const.js');

client.on('ready', () => {
    console.info('Connected');
    console.info('Logged in as: ');
    console.info(client.user.username + ' - (' + client.user.id + ')');
});

client.on('message', msg => {

    if (msg.content.includes('crotch') && msg.author.id != '693982221924696116') {
        msg.channel.send(`<@${msg.author.id}>, ze crotch is my domain!`)
    }
    if (msg.content.substring(0,1) === '!') {
        let args = msg.content.substring(1).split(' ');
        let cmd = args[0].toLowerCase();
        let id = msg.member.voice.channelID;
        let vc = client.channels.cache.get(id);
        args = args.splice(1);
        switch(cmd) {
            case 'pathetic':
                msg.channel.send('', {files: utils.pathetic()});
                break;
            case 'love':
            case 'rkami':
            case 'jmo':
            case 'wake':
            case 'bar':
            case 'pizza':
            case 'shipment':
            case 'shitment':
            case 'bargin':
            case 'munchies':
            case 'midi':
            case 'skin':
            case 'heed':
            case 'art':
            case 'mcguffin':
            case 'fanfare':
            case 'rva':
            case 'chinmad':
            case 'chins':
            case 'dexter':
            case 'larry':
            case 'dc':
            case 'bawls':
            case 'bawls2':
            case 'padme':
            case 'phil':
            case 'skin2':
            case 'wdeg':
            case 'thezone':
            case 'singularity1':
            case 'xigbe2':
            case 'vip':
            case 'vip2':
            case 'deal':
            case 'runes':
            case 'arc':
            case 'babytime':
            case 'dancefight2':
            case 'yeahboi1':
            case 'wtf':
            case 'jotaro':
            case 'wow':
            case 'amnesia':
            case 'hooligan':
            case 'jims':
            case 'sand':
            case 'shoes1':
            case 'shoes2':
            case 'shoes3':
            case 'shoes5':
            case 'jedi':
            case 'bickering':
            case 'duke':
            case 'egypt':
            case 'nudes':
            case 'owen':
            case 'alone':
            case 'friend':
            case 'steve':
            case 'lemonade':
            case 'whatsup':
            case 'weekend':
            case 'beautiful':
            case 'longbeautiful':
            case 'cheese':
            case 'yes':
            case 'fun':
            case 'larry2':
            case 'ass':
            case 'bet':
            case 'lasermoon':
            case 'bonjo':
            case 'icu':    
                if (Boolean(vc)) {
                    vc.join().then(connection => {
                        const dispatcher = connection.play(`./assets/audio/${cmd}.wav`);
                        dispatcher.on("end", end => {});
                    }).catch(err => {
                        console.log(err);
                    });
                    setTimeout(() => vc.leave(), 5 * 60 * 1000);
                }
                break;
        }
    }
})

client.login(token);

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
        let cmd = args[0];
        let id = msg.member.voice.channelID;
        let vc = client.channels.cache.get(id);
        args = args.splice(1);
        switch(cmd.toLowerCase()) {
            case 'pathetic':
                msg.channel.send('', {files: utils.pathetic()});
                break;
            case 'love':
            case 'rkami':
            case 'jmo':
                if (Boolean(vc)) {
                    vc.join().then(connection => {
                        const dispatcher = connection.play(utils.voiceClip(cmd));
                        dispatcher.on("end", end => {});
                    }).catch(err => {
                        console.log(err);
                    });
                    setTimeout(() => vc.leave(), 5 * 60 * 1000);
                }
                break;
                } 
        }
    }
})

client.login(token);

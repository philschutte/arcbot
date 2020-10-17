const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const path = require('path');

const token = require('./config.js');
const commands = require('./commands/index.js');

client.on('ready', () => {
    console.info('Connected');
    console.info('Logged in as: ');
    console.info(client.user.username + ' - (' + client.user.id + ')');
});

client.on('message', msg => {

    if (msg.content.includes('crotch') && msg.author.id != '754123216514973717') {
        msg.channel.send(`<@${msg.author.id}>, ze crotch is my domain!`)
    }
    if (msg.content.substring(0,1) === '!') {
        let args = msg.content.substring(1).split(' ');
        let cmd = args[0].toLowerCase();
        let id = msg.member.voice.channelID;
        args = args.splice(1);
        if (fs.existsSync(path.join(__dirname, `../assets/audio/${cmd}`))) {
            let vc = client.channels.cache.get(id);
            vc ? commands.voiceMessage(cmd, msg, vc) : null;
        }
        switch(cmd) {
            case 'pathetic':
                msg.channel.send('', {files: commands.pathetic()});
                msg.delete({setTimeout: 10000});
                break;
            case 'drink':
                commands.perfectDrinks(msg);
        }        
    }
})

client.login(token);

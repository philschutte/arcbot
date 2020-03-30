const Discord = require('discord.js');
const client = new Discord.Client();

const token = require('./config.js');

client.on('ready', () => {
    console.info('Connected');
    console.info('Logged in as: ');
    console.info(client.user.username + ' - (' + client.user.id + ')');
});

client.on('message', msg => {
    // TODO replace 'bot.id' with bot id when we have it
    if (msg.content.includes('crotch') && msg.author.id != 'bot id') { 
        msg.channel.send(`<@${msg.author.id}>, ze crotch is my domain!`)
    }
})

client.login(token);
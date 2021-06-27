// WTR Project Quorra
// Written by:
// ARMAG1DE0N & TheCodeBear
const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'bot token goes here';
const prefix = '$';


client.once('ready', () => {
    console.log('WTR Project Quorra is online')
    console.log('logging is NOT enabled!')
})

// Basic Command Handler
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === 'status') {
        message.channel.send('OPERATIONAL');

    } else if (command === 'link') {
        message.channel.send('Here is the link');
        message.channel.send('https://www.bungie.net/en/ClanV2?groupid=4666402');

    }

});



// MUST GO AT END
// for bot to function this token needs to be at the end of the program
client.login(token);


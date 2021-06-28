// WTR Project Quorra
// Written by:
// ARMAG1DE0N & TheCodeBear
const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'your token here';
const prefix = '$';
const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

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
       client.commands.get('status').execute(message, args);

    } else if (command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }

});

// MUST GO AT END
// for bot to function this token needs to be at the end of the program
client.login(token);
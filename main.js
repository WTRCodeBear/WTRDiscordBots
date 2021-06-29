// WTR Project Quorra
// Written by:
// ARMAG1DE0N & TheCodeBear
const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'yourtokenhere';
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
    } else if (command === 'palp') {
        client.commands.get('palp').execute(message, args);
    } else if (command === 'mace') {
        client.commands.get('mace').execute(message, args);
    } else if (command === '123') {
        client.commands.get('123').execute(message, args);
    } else if (command === 'kick') {
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }
        const taggedUser = message.mentions.users.first();
        message.channel.send(`You wanted to kick: ${taggedUser.username}`);
        const member = message.mentions.members.first();
        member.kick();

        process.on('unhandledRejection', error => 
            console.error('Unhandled promise rejection:', error));

    } else if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    } else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
});

// MUST GO AT END
// for bot to function this token needs to be at the end of the program
client.login(token);
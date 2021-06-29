module.exports = {
    name: 'kick',
    description: "remove members from server",
    execute(message, args) {
        //const member = message.mentions.users.first();
//        if (member) {
//            const memberTarget = message.guild.members.cache.get(member.id);
//            memberTarget.kick();
//            message.channel.send('USER HAS BEEN REMOVED');
//        } else {
//            message.channel.send('No Target Selected');
//        }

        const member = message.mentions.members.first();
        member.kick();

        process.on('unhandledRejection', error => {
            console.error('Unhandled promise rejection:', error);
        });

    }
}
module.exports = {
    name: 'mace',
    description: "mace a member!",
    execute(message, args) {

        let role = message.guild.roles.cache.find(r => r.name === "Pratorian");

        if(message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send('You are able to kick');
        } else {
            message.channel.send('Nope cannot do that bro');
        }


     //  if (message.member.roles.cache.some(r => r.name === "Pratorian")) {
     //       message.channel.send('');
     //   } else {
     //      message.channel.send('You lack the power to control me');
     //       message.member.roles.add(role).catch(console.error);
     //  }

    }
}
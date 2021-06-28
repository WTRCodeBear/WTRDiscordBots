module.exports = {
    name: 'kick',
    description: "kick a member!",
    execute(message, args){
        message.channel.send('They are all gone Dave, you sent them away');
    }
}

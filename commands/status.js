module.exports = {
    name: 'status',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send('Open for Business!');
    }
}

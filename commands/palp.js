module.exports = {
    name: 'palp',
    description: "check your power!",
    execute(message, args) {

// 858836629191131136
        if (message.member.roles.cache.has('858836629191131136')) {
            message.channel.send('UNLIMITED POWER');
        } else {
            message.channel.send('You lack the power to control me');
            message.member.roles.add('859224831245549578').catch(console.error);
        }

    }
}
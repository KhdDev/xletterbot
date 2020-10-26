const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.delete();
        random = Math.floor(Math.random() * 101) + 1;
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`Nombre Random: **${random}**`)
        .setColor("RANDOM")
)
    },
    name: 'rdm-number'
    
}
const Discord = require('discord.js')
module.exports = {
    run: message => message.channel.send(new Discord.MessageEmbed()
        .addField("__**Lien d'invitation :**__", "[**Cliquez ici**](https://discord.com/api/oauth2/authorize?client_id=746860347113340938&permissions=8&scope=bot)")
        .addField("__**Support :**__", "[**Cliquez ici**](https://discord.gg/MUTUAWG)")
        .setThumbnail("https://cdn.discordapp.com/attachments/735249495344021506/753723343013806110/FaultBot.png")
        .setImage("https://cdn.discordapp.com/attachments/735249495344021506/753727663700443266/120060.gif")
        .setColor("#2f3136")

    ),
    name: 'invite'
}
const Discord = require('discord.js')
module.exports = {
    run: message => {
    message.channel.send(new Discord.MessageEmbed()
        .setTitle("<:019spy:753720260775116930> Informations sur " + `Xletter `)
        .addField('<:king:768073681942872105> __**Développeur :**__', `Khd#0213`, true)
        .addField("📂 __Version de discord.js__ :", `v12.2.0`, true)
        .addField("__**Lien d'invitation :**__", "[**Cliquez ici**](https://discord.com/oauth2/authorize?client_id=746860347113340938&permissions=8&scope=bot)", true)

        .setThumbnail('https://cdn.discordapp.com/attachments/735249495344021506/753723343013806110/FaultBot.png')
        .setColor("RANDOM")
        .setTimestamp()
        )
    },
    name: 'about'
    
}

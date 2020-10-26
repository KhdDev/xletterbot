const Discord = require('discord.js')

module.exports = {
    run: message => {
        risitas = ["https://media1.tenor.com/images/f86c3a13ddb998631efa393d1c289567/tenor.gif?itemid=9505807",
        "https://risibank.fr/cache/stickers/d148/14810-full.gif",
         "https://media1.tenor.com/images/154442a84f58b4fcbe073aade2ebb715/tenor.gif?itemid=9505872",
          "https://risibank.fr/cache/stickers/d48/4881-full.gif",
           "https://risibank.fr/cache/stickers/d133/13382-full.gif",
           "https://risibank.fr/cache/stickers/d7/704-full.gif",
       ]
        let image = risitas[Math.floor(Math.random() * risitas.length)];
       
       
        return message.channel.send(new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setImage(image)
         .setTimestamp()


)
    },
    name: 'issou',
    guildOnly: true
}
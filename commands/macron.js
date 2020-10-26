const Discord = require('discord.js')

module.exports = {
    run: message => {
        risitas = ["https://media.giphy.com/media/3ohzdQBeyFcjHcFaRG/giphy.gif",
        "https://media.giphy.com/media/jwnXAHCjW5bQA/giphy.gif",
        "https://media.giphy.com/media/3oz8xzFUBA1DjeewxO/giphy.gif",
        "https://media0.giphy.com/media/l3vQYbeO3wAB3Huq4/source.gif",
        "https://media.giphy.com/media/3og0Iv2CoXYbi0uKYM/giphy.gif",
        "https://media1.tenor.com/images/8841c9b88d1dcd29331a12989b7bfd75/tenor.gif?itemid=16653681",
        "https://thumbs.gfycat.com/ThoughtfulDizzyGermanshorthairedpointer-size_restricted.gif",
        "https://media.giphy.com/media/3og0IuGb2e5U3bMIco/giphy.gif",
        "https://media4.giphy.com/media/JEyPUnv8Xojao/source.gif",
        "https://media.giphy.com/media/3oz8xzaoYfCwJM2S7C/giphy.gif",

       ]
        let image = risitas[Math.floor(Math.random() * risitas.length)];
       
       
        return message.channel.send(new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setImage(image)
         .setTimestamp()


)
    },
    name: 'macron',
    guildOnly: true
}
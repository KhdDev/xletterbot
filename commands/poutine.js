const Discord = require('discord.js')

module.exports = {
    run: message => {
        risitas = ["https://www.challenges.fr/assets/img/2018/09/11/cover-r4x3w1000-5b978f41e1edf-sipa-ap22227656-000003.jpg",
           "https://information.tv5monde.com/sites/info.tv5monde.com/files/styles/large/public/assets/images/AP_20233697172414.jpg?itok=BDYRX6KS",
           "https://media.giphy.com/media/SS7l9AjlvaiJi/giphy.gif",
           "https://thumbs.gfycat.com/EcstaticSlowHornshark-size_restricted.gif",
           "https://i.imgur.com/9pPwbZq.gif",
           "https://choualbox.com/Img/1419155944162.gif",
           "https://i.imgur.com/9QmYm4Q.gif",
       ]
        let image = risitas[Math.floor(Math.random() * risitas.length)];
       
       
        return message.channel.send(new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setImage(image)
         .setTimestamp()


)
    },
    name: 'poutine',
    guildOnly: true
}
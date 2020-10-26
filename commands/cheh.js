const Discord = require('discord.js')
module.exports = {
    run: message => {
        risitas = ["https://thumbs.gfycat.com/SecondPhysicalCuscus-size_restricted.gif",
        "https://media.tenor.com/images/1e411060a7c9ecd6842a969360d03c48/tenor.gif",
         "https://64.media.tumblr.com/1d6e5cf0903c2f4c910ef127c9b34113/tumblr_occrglw7lV1uhli2bo6_500.gifv",
          "https://i.gifer.com/CHEh.gif",
           "https://64.media.tumblr.com/028aaabff9f481c684f108388a8d3df0/tumblr_occrhuqRHh1uhli2bo1_500.gif",
           "https://media1.tenor.com/images/9f1f8ed8b914404fcbfdf3916f1cbc40/tenor.gif?itemid=17252019",
       ]
        let image = risitas[Math.floor(Math.random() * risitas.length)];
       
       
        return message.channel.send(new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setImage(image)
         .setTimestamp()

)
    },
    name: 'cheh',
    guildOnly: true
}
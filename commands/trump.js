const Discord = require('discord.js')

module.exports = {
    run: message => {
        risitas = ["https://media.giphy.com/media/Ov7lAOUsu4Yo0/giphy.gif",
        "https://i2.wp.com/www.ux-republic.com/wp-content/uploads/2019/03/trump-gif.gif?ssl=1",
        "https://thumbs.gfycat.com/SecondThoroughCub-size_restricted.gif",
        "https://i.pinimg.com/originals/79/f5/30/79f5301bb5caf934706cb322e9741714.gif",
        "https://www.gifimili.com/gif/2018/02/donald-trump-fait-la-moue.gif",
        "https://www.brain-magazine.fr/m/thumbs/420/34958-ppr-trump-gif-bite-handjob.gif",
        "https://bgr.com/wp-content/uploads/2017/02/ezgif-com-bd9fadc93a-1.gif",
        "https://pics.eb4.be/i/bb31/69yZH5D.gif",
        "https://media.giphy.com/media/z619OZp86JaBG/giphy.gif",
        "https://resize-europe1.lanmedia.fr/rcrop/960,480/img/var/europe1/storage/images/le-lab/videos-amazing-emmanuel-macron-a-survecu-a-sa-premiere-poignee-de-main-avec-donald-trump-3341405/41347184-3-fre-FR/VIDEOS-Amazing-Emmanuel-Macron-a-survecu-a-sa-premiere-poignee-de-main-avec-Donald-Trump.gif",

       ]
        let image = risitas[Math.floor(Math.random() * risitas.length)];
       
       
        return message.channel.send(new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setImage(image)
         .setTimestamp()


)
    },
    name: 'trump',
    guildOnly: true
}
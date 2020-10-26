const Discord = require('discord.js')
module.exports = {
    run: message => {
        risitas = ["https://sain-et-naturel.ouest-france.fr/wp-content/uploads/2020/03/Anonymous.jpg",
        "https://www.numerama.com/content/uploads/2016/02/anonymous_mask.jpg",
         "https://www.lepoint.fr/images/2012/04/05/anonymous-546559-jpg_922486_1250x625.JPG",
          "https://resize-europe1.lanmedia.fr/r/622,311,forcex,center-middle/img/var/europe1/storage/images/europe1/societe/le-siege-de-hadopi-tague-par-anonymous-732830/14682716-1-fre-FR/Le-siege-de-Hadopi-tague-par-Anonymous.jpg",
           "https://lh3.googleusercontent.com/xTMqD0_Fe0VH-qP_MsSxh2foVJZ029FYVbGuDO0ci9NOKFmVOIG1PJvFMKJbUSRWayJD=w720-h310",
           "https://images3.alphacoders.com/606/thumb-1920-606500.jpg",
           "https://free4kwallpapers.com/uploads/originals/2020/04/05/anonymous-wallpaper.jpg",
           "https://mocah.org/uploads/posts/570688-anonymous-wallpaper.jpg",
           "https://imageetinformation.files.wordpress.com/2014/09/anonymous22.jpg",
           "https://lh3.googleusercontent.com/proxy/EU0unOaQVrZs3rymehnMBRpoOqdcga_UefSgaQdm53GzUyzyNbnEhEe6XbUX7QHdVpxCGcnoO1MwVdjJBc3BHTw",
           "https://etiroule.files.wordpress.com/2012/01/bastille.jpg",
           "https://static.lpnt.fr/images/2012/02/14/anonymous-504145-jpg_344771_660x281.JPG",
           "https://i0.wp.com/mrmondialisation.org/wp-content/uploads/2015/11/anonymou.jpg",
           "https://korii.slate.fr/sites/default/files/styles/1440x600/public/tom-roberts-324516-unsplash.jpg",
       ]
        let image = risitas[Math.floor(Math.random() * risitas.length)];
       
       
        return message.channel.send(new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setImage(image)
         .setTimestamp()

)
    },
    name: 'anonymous',
    guildOnly: true
}
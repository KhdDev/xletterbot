
const Discord = require ('discord.js')

module.exports = {
    run: async (message, args) => { 

        covid = ["https://www.sante-et-travail.fr/sites/default/files/styles/ecrit_full/public/2020-07/AdobeStock_322668635-Virus.gif?itok=zFUZfG4U%22,",
        "https://asset.lemde.fr/prd-blogs/2020/04/aea41dbf-coronavirus-covid-19-sarscov2-sars-cov-2.jpg",
         "https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/1/c/1/1c1495b6f6_117853_09-1830.jpg",
       ]
       
       let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
       let image = covid[Math.floor(Math.random() * covid.length)];
        var result = Math.floor((Math.random() * 100) + 1)
        message.channel.send(new Discord.MessageEmbed()
        
        .setTitle(` ${user.user.username} La probabilité que t'attrape la **COVID-19** est de ` + "__**" + result + "%**__")
        .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
        .setImage(image)
        .setColor("RANDOM")

        )
                
    },
    name: 'covid',
    guildOnly: true
}
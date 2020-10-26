const Discord = require ('discord.js')
module.exports = {
    run: async (message, args) => { 

        ballrep = ["Oui",
        "Non",
         "Sûrement",
         "Peut-être",
         "Probablement",
         "Probablement pas",
       ]
       
       let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
       let rep = ballrep[Math.floor(Math.random() * ballrep.length)];
       let text = args.join(" ");
        message.channel.send(new Discord.MessageEmbed()
        
        .setTitle("__**8ball Question **__<a:flech:768071347237552158> *" +  text + "*")
        .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
        .setDescription(rep)
        .setColor("RANDOM")
        .setTimestamp()
        )
                
    },
    name: '8ball',
    guildOnly: true
}
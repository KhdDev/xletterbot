const Discord = require('discord.js')

module.exports = {
    run: message => {
        risitas = ["https://cdn.discordapp.com/attachments/685160674166440116/688309911461036034/ZigzagVagueGeese-size_restricted.gif",
        "https://i.pinimg.com/originals/12/13/29/1213293a27c9f84df14051cf37510b41.gif",
         "https://media.giphy.com/media/C8nYoZo1ziHz5BPkpf/giphy-downsized.gif",
          "https://media.giphy.com/media/31TI3rb3fAlqdCOFuq/giphy.gif",
           "https://media.giphy.com/media/iFIx5znkh5sqZUFDUQ/giphy-downsized.gif",
           "https://media.giphy.com/media/3dkPQ9JnxxQnVVMdOl/giphy-downsized.gif",
       ]
        let image = risitas[Math.floor(Math.random() * risitas.length)];
       
       
        return message.channel.send(new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setImage(image)
         .setTimestamp()


)
    },
    name: 'fbi',
    guildOnly: true
}
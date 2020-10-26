const Discord = require ('discord.js')

module.exports = {
    run: async (message, args) => { 

        let text = args.join(" ");
        message.channel.send(new Discord.MessageEmbed()
        .setFooter(message.guild.name + message.author.username)
            .setImage(text)
            .setColor("RANDOM") )
            message.delete();

                
    },
    name: 'img',
    guildOnly: true

}
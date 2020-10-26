const Discord = require ('discord.js')

module.exports = {
    run: async (message, args) => { 
        let user =  message.guild.members.cache.get(args[0]) || message.member;
        if (!message.member.hasPermission('MANAGE_MESSAGES')) 
        return message.channel.send(new Discord.MessageEmbed()
 
        .setTitle('Vous n\'avez pas la permission d\'utiliser cette commande.')

        .setColor('#f53b3b')

        )
        if (!message.guild.me.hasPermission('MANAGE_MESSAGES'))         return message.channel.send(new Discord.MessageEmbed()
 
        .setTitle('J\'ai pas les autorisation *MANAGE_MESSAGES* <:no:770332287409192970>.')
        .setColor('#f53b3b')

        )
        let text = args.join(" ");
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setThumbnail(user.user.displayAvatarURL({dynamic : true}))

            .setDescription(text)
            .setColor("RANDOM") )
            message.delete();

                
    },
    name: 'embed',
    guildOnly: true

}
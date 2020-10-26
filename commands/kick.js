const Discord = require ('discord.js')

module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) 
        
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle('Vous n\'avez pas la permission d\'utiliser cette commande.')

        .setColor('#f53b3b')

        )
        const member = message.mentions.members.first()

        if (!member) return message.channel.send(new Discord.MessageEmbed()
        .setTitle('Veuillez mentionner le membre à exclure.')

        .setColor('#f0ac18')

        )

        if (member.id === message.guild.ownerID) return message.channel.send(new Discord.MessageEmbed()

        .setTitle('Vous ne pouvez pas exclure le propriétaire du serveur.')

        .setColor('#ff0000')

        )
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) 
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle('Le bot ne peut pas exclure ce membre.')
        .setImage('https://i.gifer.com/XuIx.gif')
        .setColor('#00d9ff')

        )
        if (!member.kickable) return message.channel.send(new Discord.MessageEmbed()

        .setTitle('Le bot ne peut pas exclure ce membre.')
        .setImage('https://i.gifer.com/XuIx.gif')
        .setColor('#00d9ff')

        )
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
        await member.kick(reason)
        message.channel.send(new Discord.MessageEmbed()
        
        .setTitle(`<a:kick:770332831880446005> ${member.user.tag} a été exclu !`) 
        .setColor('#00ff15')
        .setFooter(embed.footer) )
    },
    name: 'kick',
    guildOnly: true
}
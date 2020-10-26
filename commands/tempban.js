const Discord = require ('discord.js')

const parseDuration = require('parse-duration'),
    humanizeDuration = require('humanize-duration')
module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) 
        return message.channel.send(new Discord.MessageEmbed()
 
        .setTitle('Vous n\'avez pas la permission d\'utiliser cette commande.')

        .setColor('#f53b3b')

        )
        
        
        const member = message.mentions.members.first()

        if (!member) return message.channel.send(new Discord.MessageEmbed()
        .setTitle('Veuillez mentionner le membre à bannir.')

        .setColor('#f0ac18')

        )

        if (member.id === message.guild.ownerID) return message.channel.send(new Discord.MessageEmbed()
        .setTitle('Vous ne pouvez pas bannir le propriétaire du serveur.')

        .setColor('#ff0000')

        )
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) 
        return message.channel.send(new Discord.MessageEmbed()

        .setTitle('Vous ne pouvez pas ban ce membre.')

        .setColor('#00d9ff')

        )
        
        if (!member.bannable) return message.channel.send(new Discord.MessageEmbed()

        .setTitle('Le bot ne peut pas bannir ce membre.')

        .setColor('#00d9ff')

        )
        const duration = parseDuration(args[1])
        if (!duration) return message.channel.send(new Discord.MessageEmbed()
        
        .setTitle('Veuillez indiquer une durée valide.')
        .setColor('#00d9ff')
        
        )

        const reason = args.slice(2).join(' ') || 'Aucune raison fournie'
        await member.ban({reason})
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`${member.user.tag} a été banni pendant ${humanizeDuration(duration, {language: 'fr'})} !`) 
        .setColor('#00d9ff'))
        setTimeout(() => {
            message.guild.members.unban(member)
            message.channel.send(new Discord.MessageEmbed()
            .setTitle(`${member.user.tag} a été débanni.`)
            .setColor('#00d9ff')
            )
        }, duration)
    },

    name: 'tempban',
    guildOnly: true
}

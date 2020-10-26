const Discord = require ('discord.js')

const parseDuration = require('parse-duration'),
    humanizeDuration = require('humanize-duration')
 
module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(new Discord.MessageEmbed()
 
        .setTitle('Vous n\'avez pas la permission d\'utiliser cette commande.')

        .setColor('#f53b3b')

        )
        const member = message.mentions.members.first()
        if (!member) return message.channel.send(new Discord.MessageEmbed()
        .setTitle('Veuillez mentionner le membre à tempmute.')

        .setColor('#f0ac18')

        )
        if (member.id === message.guild.ownerID) return message.channel.send(new Discord.MessageEmbed()
        .setTitle('Vous ne pouvez pas mute le propriétaire du serveur.')

        .setColor('#ff0000')

        )
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send(new Discord.MessageEmbed() .setTitle('Vous ne pouvez pas mute ce membre.') )
        if (!member.manageable) return message.channel.send(new Discord.MessageEmbed()

        .setTitle('Le bot ne peut pas mute ce membre.')
        .setImage('https://i.gifer.com/XuIx.gif')
        .setColor('#00d9ff')

        )
        const duration = parseDuration(args[1])
        if (!duration) return message.channel.send(new Discord.MessageEmbed()
        
        .setTitle('Veuillez indiquer une durée valide.')
        .setColor('#00d9ff')

        
        )
        const reason = args.slice(2).join(' ') || 'Aucune raison fournie.'
        let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')
        if (!muteRole) {
            muteRole = await message.guild.roles.create({
                data: {
                    name: 'Muted',
                    permissions: 0
                }
            })
            message.guild.channels.cache.forEach(channel => channel.createOverwrite(muteRole, {
                SEND_MESSAGES: false,
                CONNECT: false,
                ADD_REACTIONS: false
            }))
        }
        await member.roles.add(muteRole)
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`<:mute:770333227709104159> ${member.user.tag} a été mute pendant ${humanizeDuration(duration, {language: 'fr'})} !`)

        )
        setTimeout(() => {
            if (member.deleted || !member.manageable) return
            member.roles.remove(muteRole)
            message.channel.send(new Discord.MessageEmbed()
            .setTitle(`<:mute:770333227709104159> ${member.user.tag} a été unmute.`) 
            .setColor("RANDOM")
)
        }, duration)
    },
    name: 'tempmute',
    guildOnly: true
}
const Discord = require('discord.js')

module.exports = {
    run: async(message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send(new Discord.MessageEmbed()
            .setTitle('Vous n\'avez pas la permission d\'utiliser cette commande.')

            .setColor('#f53b3b')
 )
        };
    
        if (!args[0])
          return message.channel.send(new Discord.MessageEmbed()
          .setTitle('Veuillez indiquer une durée valide.')
          .setColor('#00d9ff')
 );
        if (isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed()
        .setTitle('Ce n\'est pas un nombre valide !')
        .setColor('#00d9ff')
 );
    
        message.channel.setRateLimitPerUser(args[0]);
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`Le mode lent de ce canal est réglé sur **${args[0]}**`)

        );
      },
    name: 'slowmode',
    guildOnly: true
    
}
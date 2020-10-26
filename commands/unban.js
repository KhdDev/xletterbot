const Discord = require ('discord.js')

module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) 
        
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle('Vous n\'avez pas la permission d\'utiliser cette commande.')

        .setColor('#f53b3b')

        )
        const member = args[0];

        if (!member) {
             return message.channel.send(new Discord.MessageEmbed()
             .setTitle(`Veuillez saisir un identifiant !`) 
             )
        }

        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            await message.channel.send(new Discord.MessageEmbed()
            .setTitle(`${member} est unban !`)
            )
        } catch (e) {
            return message.channel.send(new Discord.MessageEmbed()
            .setTitle(`Une erreur s'est produite !`)
            .addField("__**Serveur Support :**__", "[**Cliquez ici**](https://discord.gg/bmMhtjb)")
            .setImage("https://thumbs.gfycat.com/ActualThoughtfulDwarfmongoose-size_restricted.gif") )
        }

    },
    name: 'unban',
    guildOnly: true
}
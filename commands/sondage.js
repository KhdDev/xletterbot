const Discord = require ('discord.js')

module.exports = {
    run: async (message, args) => { 
        message.delete();
        const question = args.join(" ");
        let user =  message.guild.members.cache.get(args[0]) || message.member;
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle('Vous n\'avez pas la permission d\'utiliser cette commande.')

        .setColor(`RAMDOM`)

         )
		const voteEmbed = new Discord.MessageEmbed()
		.setTitle("Sondage 📈")
        .setDescription(question)
        .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
        .setColor("RANDOM")

		message.channel.send({embed: voteEmbed}).then(embedMessage => {
				embedMessage.react('📗').then(() => embedMessage.react('📕'))
		});
	
      
    },
    name: 'sondage',
    guildOnly: true
}
const Discord = require ('discord.js')

module.exports = {
    run: async (message, args) => {
        message.delete();
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle('Vous n\'avez pas la permission d\'utiliser cette commande.')

        .setColor(`RAMDOM`)

         )
    if (!args[0]) {
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`Veuillez saisir un nombre entre 1 à 100`) 

        .setColor(`RAMDOM`)
        )
    }

    let deleteAmount;

    if (parseInt(args[0]) > 100 ) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    await message.channel.bulkDelete(deleteAmount, true);

    return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`<a:circle:770323493144756283> ${deleteAmount} messages supprimé avec succès.`)
        .setColor(`RAMDOM`)

    )


    },
    name: 'clear',
    guildOnly: true
}
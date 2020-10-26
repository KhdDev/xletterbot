const Discord = require ('discord.js')

module.exports = {
    run: async (message, args) => { 

        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        message.channel.send(new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#f3f3f3')
            .setTitle(`__**${message.guild.name}**__ serveur stats`)
            .setImage('https://mir-s3-cdn-cf.behance.net/project_modules/fs/f1d0d572816947.5c2bcd89d519b.gif')

            .addFields(
                {
                    name: "Propriétaire : ",
                    value: message.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "Membres : ",
                    value: `Il ya ${message.guild.memberCount} membres !`,
                    inline: true
                },
                {
                    name: "Membres en ligne : ",
                    value: `Il ya ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} membres en ligne !`,
                    inline: true
                },
                {
                    name: "Nombre de bots : ",
                    value: `Il ya ${message.guild.members.cache.filter(m => m.user.bot).size} bots !`,
                    inline: true
                },
                {
                    name: "Date de création: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "Nombre de rôles : ",
                    value: `Il ya ${message.guild.roles.cache.size} rôles sur ce serveur.`,
                    inline: true,
                },
                {
                    name: `🗺 Region: `,
                    value: region,
                    inline: true
                },
                {
                    name: `<:verified:768083514889076766> Vérifié : `,
                    value: message.guild.verified ? 'Le serveur est vérifié' : `Le serveur n'est pas vérifié`,
                    inline: true
                },
                {
                    name: 'Boosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `Il ya ${message.guild.premiumSubscriptionCount} Boosters` : `Il n'y a pas de boosters`,
                    inline: true
                },

            )
        )

                
    },
    name: 'serv-info',
    guildOnly: true

}
const Discord = require ('discord.js')
const superagent = require('superagent');

module.exports = {
    run: async message => { 
        if (!message.channel.nsfw) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Pour une question de sécurité vous devez mettre le salon en NSFW <:nsfw:769478278778978316> !") )

        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/wallpaper");
        message.channel.send(new Discord.MessageEmbed()

            .setColor("RANDOM")
            .setImage(body.url)
 )
    },
    name: 'wallpaper',
    guildOnly: true
}
const Discord = require ('discord.js')
const superagent = require('superagent');

module.exports = {
    run: async message => { 
        if (!message.channel.nsfw) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Ce salon n'est pas __**NSFW**__ <:nsfw:769478278778978316> !") )

        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/waifu");
        message.channel.send(new Discord.MessageEmbed()

            .setColor("RANDOM")
            .setImage(body.url)
 )
    },
    name: 'waifu',
    guildOnly: true
}
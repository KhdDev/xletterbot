const Discord = require ('discord.js')
const fetch = require('node-fetch')

module.exports = {
    run: async message => { 
        if (!message.channel.nsfw) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Ce salon n'est pas __**NSFW**__ <:nsfw:769478278778978316> !") )

        const data = await fetch("http://api.oboobs.ru/boobs/0/1/random").then(res => res.json());

        message.channel.send(new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(`http://media.oboobs.ru/${data[0].preview}`)
 )
    },
    name: 'boobs',
    guildOnly: true
}
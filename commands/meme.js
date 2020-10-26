const Discord = require ('discord.js')
const axios = require('axios')

module.exports = {
    run: async message => { 
        const url = 'https://some-random-api.ml/meme';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(new Discord.MessageEmbed()
            .setTitle(`Une erreur s'est produite !`)
            .addField("__**Serveur Support :**__", "[**Cliquez ici**](https://discord.gg/bmMhtjb)")
            .setImage("https://thumbs.gfycat.com/ActualThoughtfulDwarfmongoose-size_restricted.gif") )
        }

        message.channel.send(new Discord.MessageEmbed()
            .setTitle(`Même aléatoire : `)
            .setDescription(data.caption)
            .setColor('#f3f3f3')
            .setImage(data.image)   


      )
    },
    name: 'meme',
    guildOnly: true
}
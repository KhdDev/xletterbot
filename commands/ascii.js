const Discord = require ('discord.js')
const fetch = require("node-fetch");

module.exports = {
    run: async (message, args) => { 
        
      const input = args.join(" ");
      if (input.length > 10) return message.channel.send("10 caractères maximum.");
      const text = encodeURI(input);

      fetch(`http://artii.herokuapp.com/make?text=${text}`)
        .then(result => result.text()).then(body => {
            if(!body) return message.channel.send(new Discord.MessageEmbed()
            
            .setTitle("Désolé, je n'ai pas pu obtenir l'art ascii. Réessayez plus tard.")
            .setDescription("```$ascii (text)```")
            .setColor("RANDOM")

            
            );

            message.channel.send(`\`\`\`${body}\`\`\``);
        }).catch(error => {
      console.log(error.stack);
      return message.channel.send(new Discord.MessageEmbed()
      .setTitle("Désolé, je n'ai pas pu obtenir l'image. Réessayez plus tard.")
      .setDescription("```$ascii (text)```")
      .setColor("RANDOM")

      );
    });
    },
    name: 'ascii',
    guildOnly: true
}
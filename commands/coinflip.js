
const Discord = require ('discord.js')

module.exports = {
    run: async (message, args) => { 
        var array1 = ["pile", "face"];
        var rand = Math.floor(Math.random() * array1.length);

  if (!args[0] || (args[0].toLowerCase() !== "pile" && args[0].toLowerCase() !== "face")) {
    return message.channel.send(new Discord.MessageEmbed()
 
        .setTitle('Veuillez mentionner ``Pile`` ou ``Face``')
        .setImage("https://desirdetre.com/wp-content/uploads/2017/12/toujours-gagner-a-pile-ou-face_69331_w460.jpg")
        .setColor("RANDOM")

        )
  } 
else if (args[0].toLowerCase() == array1[rand]) {
    message.channel.send(new Discord.MessageEmbed()
    .setTitle("**" + array1[rand] + "**, tu as gagné cette fois !") 
    .setImage("https://i.pinimg.com/originals/9a/f1/4e/9af14e0ae92487516894faa9ea2c35dd.gif")
    .setColor("RANDOM")
)
  } 
else if (args[0].toLowerCase() != array1[rand]) {
    message.channel.send(new Discord.MessageEmbed()
    .setTitle("**" + array1[rand] + "**, tu as perdu cette fois !") 
    .setImage("https://media.giphy.com/media/eJ4j2VnYOZU8qJU3Py/giphy.gif")
    .setColor("RANDOM")
)
  }
                
    },
    name: 'coinflip',
    guildOnly: true

}
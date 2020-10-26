const Discord = require ('discord.js')
const fetch = require("node-fetch");

module.exports = {
    run: async (message, args) => { 
        let user =  message.guild.members.cache.get(args[0]) || message.member;
        const text = args.join(" ");

		function reverseString(text)	{
			var splitString = text.split("");
			var reverseArray = splitString.reverse();
			var joinArray = reverseArray.join("");

            return         message.channel.send(new Discord.MessageEmbed()
            .setTitle(joinArray)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .setImage("https://media.giphy.com/media/TqkuOoKtmYI80/giphy.gif")
            .setFooter("© Xletter 2020. - $reversetext (text)")
            );
		}
        reverseString(text);
        
    },
    name: 'reversetext',
    guildOnly: true
}
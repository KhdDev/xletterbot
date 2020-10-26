const Discord = require ('discord.js')
const { stripIndents } = require("common-tags");
const fortnite = require("simple-fortnite-api"), client = new fortnite("ad506295-e61a-4302-afe7-a0645c7bbfc6");

module.exports = {
    run: async (message, args) => { 

        if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
 
        .setTitle('Mentioner le pseudononyme du joueur.')
        .setImage("https://thumbs.gfycat.com/GenuineSmartBongo-size_restricted.gif")
        .setColor('#f53b3b')

        ) 
        if(args[1] && !["lifetime", "solo", "duo", "squad"].includes(args[1])) 
        return message.channel.send(new Discord.MessageEmbed()
        .setDescription("__**Usage:**__ $fortnite *Name* *game mode*\n__**GameTypes:**__ Lifetime, Solo, Duo, Squad")
        .setImage("https://media1.tenor.com/images/94e3118e784512c5ec7d53ee1cad0a5f/tenor.gif")
        )
        let gametype = args[1] ? args[1].toLowerCase() : "lifetime";

        let data = await client.find(args[0])
        if(data && data.code === 404) 
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(":x: Le nom d'utilisateur n'a pas été trouvé.") )
            const { image, url, username } = data;
            const { scorePerMin, winPercent, kills, score, wins, kd, matches } = data[gametype]

            message.channel.send(new Discord.MessageEmbed()
                    .setColor("#0080ff")
                    .setAuthor(`Epic Games (Fortnite) | ${username}`)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1184059264127643650/iSECkurS_400x400.png")
                    .setImage('https://thumbs.gfycat.com/GenuineSmartBongo-size_restricted.gif')
                    .setDescription(stripIndents`**:video_game: Game mode:** ${gametype.slice(0, 1).toUpperCase() + gametype.slice(1)}
                    **:skull: Kill:** ${kills || 0}
                    **:clipboard: Score:** ${score || 0}
                    **:tada: Top1:** ${wins || 0}
                    **:pencil: Win rate:** ${winPercent || "0%"}
                    **:bar_chart: Kill / death rate:** ${kd || 0}
                    **:crossed_swords: All rounds:** ${matches || 0}`)
                    .setTimestamp()
 )
                
    },
    name: 'fortnite',
    guildOnly: true

}
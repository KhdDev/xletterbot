const Discord = require('discord.js')
module.exports = {
    run: message => {
        message.delete();
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('<:xletterbot:769475294208720937>**Liste des commandes** <:xletterbot:769475294208720937>')

            .addField("<a:moderation:769477095659143168> ┋ __Modération__ <a:fleche:769478745034850314>", "`ban`, `kick`, `tempban`,`clear`, `unban`, `mute`, `unmute`, `tempmute`, `slowmode`")

            .addField("<a:fun:769478366059167785> ┋ __Divertissement__ <a:fleche:769478745034850314>", "`anonymous`, `fbi`, `poutine`, `trump`, `macron`, `cheh`, `meme`, `coinflip`, `issou`, `covid`, `8ball`, `nitro`, `panda`, `koala`, `fox`, `cat`, `dog`")

            .addField("<:nsfw:769478278778978316> ┋ __NSFW__ <a:fleche:769478745034850314>", "`hentai`, `boobs`, `hentai2`, `waifu`, `ass`, `wallpaper`")

            .addField("<:king:769478328657641482> ┋ __Général__ <a:fleche:769478745034850314>", "`help`, `invite`, `embed`,  `img`,  `ui`, `serv-info`, `sondage`, `about`,`ascii`, `reversetext`, `pp`, `fortnite`, `rdm-number`")

            .setThumbnail("https://media.discordapp.net/attachments/735249495344021506/768074076933455882/019-spy.png")
            .setTimestamp()
            .setColor("#2f3136")
         )
    },
    name: 'help'
    
}
const Discord = require('discord.js'),
    client = new Discord.Client(),
    config = require('./config.json'),
    fs = require('fs')
 
client.login(config.token)
client.commands = new Discord.Collection()
client.db = require('./db.json')
 
fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})
 
client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return
 
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    command.run(message, args, client)
})

client.on('ready', () => {
    const statuses = [
        () => `XletterProject 💻`,
        () => `${config.prefix}help `,
        () => `${client.guilds.cache.size} Serveurs`,
        () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} Utilisateurs`
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'PLAYING'})
        i = ++i % statuses.length
    }, 1e4)
})

client.on('ready', () => {
  const statuses = [
      () => `Khd'CP-0#0667 Creator`,
      () => `${config.prefix}help `,
      () => `${client.guilds.cache.size} Serveurs`,
      () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} Utilisateurs`
  ]
  let i = 0
  setInterval(() => {
      client.user.setActivity(statuses[i](), {type: 'PLAYING'})
      i = ++i % statuses.length
  }, 1e4)
})

client.on('channelCreate', channel => {
    if (!channel.guild) return
    const muteRole = channel.guild.roles.cache.find(role => role.name === 'Muted')
    if (!muteRole) return
    channel.createOverwrite(muteRole, {
        SEND_MESSAGES: false,
        CONNECT: false,
        ADD_REACTIONS: false
    })
})


///////////////////////////////////////////////////////////////////////
/////////////////////    React Bonjour            ///////////////////// 
///////////////////////////////////////////////////////////////////////
client.on('message', msg => {
    if ((msg.content === 'salut') || (msg.content === "Salut")) {
      msg.react('👋');
    }
  });
  
  client.on('message', msg => {
      if ((msg.content === 'salut') || (msg.content === "Bonjour")) {
        msg.react('👋');
      }
    });
  
    client.on('message', msg => {
      if ((msg.content === 'salut') || (msg.content === "Hi")) {
        msg.react('👋');
      }
    });
  
    client.on('message', msg => {
      if ((msg.content === 'salut') || (msg.content === "Hello")) {
        msg.react('👋');
      }
    });
  
    client.on('message', msg => {
      if ((msg.content === 'salut') || (msg.content === "Cc")) {
        msg.react('👋');
      }
    });
  
    ///////////////////////////////////////////////////////////////////////
  /////////////////////    React Bonjour            ///////////////////// 
  ///////////////////////////////////////////////////////////////////////
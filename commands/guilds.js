module.exports.run = (bot, message, args) => {
   let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;  
  // Lets define our array of guilds
    const guildArray = bot.guilds.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })
  
    // And send it
    message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
  }

module.exports.help = {
    name: "guilds"
}
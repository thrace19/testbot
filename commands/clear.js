const Discord = require("discord.js");
let botconfig = require(`../botconfig.json`)

module.exports.run = async (bot, message, args) => {
if (!message.content.startsWith(botconfig.prefix)) return;
if(!message.author.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You Don't Have Permission `Manage Messages`");  
if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I Don't Have Permission `Manage Messages`");
if(`${args[0]}`> 100) return message.channel.send(`Limit Is 100.`)
  
 message.channel.bulkDelete(`${args[0]}`).catch(error => console.log(error.stack));
})
 message.channel.send(`Cleared ${args[0]} messages for now ok.`).then(msg => msg.delete(5000));
}
module.exports.help = {
  name: "clear"
}

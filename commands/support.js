const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
 let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;
  
  let bicon = bot.user.displayAvatarURL;
  let support = new Discord.RichEmbed()
.setAuthor(bot.user.username)
.setThumbnail(bicon)
.setColor("RANDOM")
.setTitle("***MY SUPPORT SERVER***")
.addField('***Join Pls***',"https://discord.gg/QEtT4X3")
.setTimestamp()

message.channel.send(support);
}
module.exports.help = {
 name: "support"
}
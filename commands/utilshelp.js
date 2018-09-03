const Discord = require("discord.js");
let prefix = '&'

module.exports.run = async (bot, message) => {
 let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;
  
  let generalembed= new Discord.RichEmbed()
.setTitle('**Utility Commands**')
.setColor('#BE09EA')
.addField('&serverinfo','Shows Info About A Server')
.addField('&botinfo','Shows Info About BOT')
.addField('&serverinvites','Shows Server Invite Leaderboard')
.addField('&weather','Shows Weather Of A Area !weather areaname')
.addField('&stats','Shows Bot Process')
.addField('&userinfo', 'Shows Info About User')
.addField('&serveroles','To See Roles In A Server')
.addField('&serveremoji','To See Emojis In A Server')
.addField('&support','To Join My Support Server')
.addField('&urban','To Search Anything On Urban Usage: &urban yourword')
.addField(`If You Find Any Bug Report Using `,`${prefix}bug`)

return message.channel.send(generalembed);
}

module.exports.help = {
  name: "utilshelp"
}
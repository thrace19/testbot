var Discord = require('discord.js')
let prefix = '&'

module.exports.run = async (bot, message) => {
 let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;
  

 let help= new Discord.RichEmbed()
.setTitle('**My Help Commands**')
.setColor('#BE09EA')
.addField(`${prefix}modhelp`,'Lists The Moderator Commands')
.addField(`${prefix}funhelp`,'Lists The Fun Commands')
//.addField(`${prefix}nsfwhelp`,'Lists The NSFW Commands')
.addField(`${prefix}utilshelp`,'Lists The Utility Commands')
.addField(`If You Find Any Bug Report Using `,`${prefix}bug`)
 
return message.channel.send(help);

}
module.exports.help = {
  name:"help"
}
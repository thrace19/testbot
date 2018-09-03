const Discord = require("discord.js");
let prefix = '&'
module.exports.run = async (bot, message) => {
 let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;
  
let modembed = new Discord.RichEmbed()
.setTitle('**Mod Commands**')
.addField('&ban','Bans A User From The Server')
.addField('&kick','Kicks A User From The Server')
.addField('&warn','Warns A User From The Server')
.addField('&tempmute','Mutes A User From The Server For A Limited Time')
.addField('&unban','Unbans A User From The Server')
.addField('&clear','To Delete No Of Messages From Channel')
.addField(`If You Find Any Bug Report Using `,`${prefix}bug`)
.setColor('#EA09E0');
 return message.channel.send(modembed);

}
module.exports.help = {
  name:"modhelp"
}
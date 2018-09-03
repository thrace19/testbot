var Discord = require(`discord.js`)
let prefix = '&'
module.exports.run = async (bot, message) => {
 let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;
  

let funembed = new Discord.RichEmbed() 
.setTitle('**Fun Commands**')
.addField('&meme','Shows Up A Meme')
.addField('&say','!say hello bot reply hello')
.setColor('#09ADEA')
.addField(`If You Find Any Bug Report Using `,`${prefix}bug`);

 return message.channel.send(funembed);
}
  
module.exports.help = {
 name: "funhelp"
}
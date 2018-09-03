const Discord = require("discord.js");
let prefix = '&'

module.exports.run = async (bot, message) => {
 let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;
  
  let nsfw= new Discord.RichEmbed()
.setTitle('**NSFW COMMANDS**')
.setColor('#BE09EA')
.addField('&pussy','Shows Images And GIF Of Pussy')
.addField('&neko','Shows Nsfw Images Of Neko')
.addField(`If You Find Any Bug Report Using `,`${prefix}bug`)

await message.channel.send(nsfw);

}
module.exports.help = {
  name:"nsfjjwhelp"
}
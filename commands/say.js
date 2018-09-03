const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;
  
  //!say Hi!
  //Hi
   if(!message.member.hasPermission("SEND_MESSAGES")) return message.reply("no");
  let botmessage = args.join(" ");
    let say = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(botmessage)
    .setColor('#e00707')
    .setTimestamp()
  message.channel.send(say);
}
module.exports.help = {
  name: "say"
}
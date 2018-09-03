const Discord = require("discord.js")
var ytdl = require("ytdl-core")

module.exports.run = async (bot, message, args) => {
 let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;

  if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.');
  
    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Sorry, You Are Not In The Same Channel.');
  
 message.guild.me.voiceChannel.leave();
  
 let pembed = new Discord.RichEmbed()
      .setTitle("Music Skip")
      .setColor("#0537ff")
      .addField(` Skipped Song`,`Requested By ${message.author}`)
      .setTimestamp();

message.channel.send(pembed);
}
module.exports.help = {
 name: "skip"
}
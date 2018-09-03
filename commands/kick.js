const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;
  
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(message.member.hasPermission("SEND_MESSAGES")) return message.reply("Hmmm Lol You Can't Use It"); 
  if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS"));

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    
    message.guild.member(kUser).kick(kReason);
    message.channel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}

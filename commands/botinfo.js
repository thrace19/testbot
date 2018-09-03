const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;
  
    let gif2 = 'https://cdn.discordapp.com/emojis/473819808358596618.gif?v=1'
      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setAuthor(bot.user.username,gif2)
      .setDescription("Bot Information")
      .setColor("#15f153")
      .setThumbnail(bicon)
      .addField("Bot Name", bot.user.username)
      .addField("Created On", bot.user.createdAt)
      .addField("Guild Bot On", bot.guilds.size)
      .addField("Playing Users", bot.users.size)
      .addField(`Bot System Status`,`Operational`)
      

     message.channel.send(botembed);
    
}
module.exports.help = {
  name:"botinfo"
}

const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, args, level) => {  

   let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;
  
var gifs = ["https://media.giphy.com/media/zWzAudGgQ7JOE/giphy.gif",
            "https://media.giphy.com/media/3og0ITpdHjrDDH8Yy4/giphy.gif", 
            "https://media.giphy.com/media/krI1lBPsluByg/giphy.gif",
            "https://media.giphy.com/media/5xtDarobRW68tNCgjUA/giphy.gif",
            "https://media.giphy.com/media/8R7GUZWaydcOY/giphy.gif",
            "https://media.giphy.com/media/SuJoKxDplnKve/giphy.gif",
            "https://media.giphy.com/media/DKCNQcgbdekrC/giphy.gif",
            "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif",
            "https://media.giphy.com/media/LTpmRMNSmZgIw/giphy.gif",
            "https://media.giphy.com/media/bEVKYB487Lqxy/giphy.gif",
            "https://media.giphy.com/media/vbD9OoDgUOpkk/giphy.gif"]
            var temp = gifs[Math.floor(Math.random() * 11)]
            var embed = new Discord.RichEmbed()
                .setColor(0x2186c0)
                .setAuthor("Gifs", client.user.avatarURL)
                .setImage(temp)
            message.channel.send(embed);
}
            
exports.conf = {
  enabled: true,
  guildOnly: true,
  permLevel: "User"
};

exports.help = {
  name: "gifs",
  category: "Miscelaneous",
  description: "Gifs",
  usage: "gifs"
};
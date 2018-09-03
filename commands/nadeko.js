const superagent = require("snekfetch");
const Discord = require('discord.js')
const client = new Discord.Client();

exports.run = async (client, message, args, level) => {
   let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return; 
  
  if (!message.channel.nsfw) return message.channel.send('You can use this commands on NSFW Channel!')
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`RANDOM`)
  message.channel.send(lewdembed);
    })
}
module.exports.help = {
name: "neko"
}
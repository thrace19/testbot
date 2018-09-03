const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
 let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;
  let binvitembed = new Discord.RichEmbed()
    .setDescription('JBS BOT INVITE')
    .setColor('RANDOM')
    .addField('https://is.gd/jbsbot','I am Waiting For You')
    .setTimestamp()

    return message.channel.send(binvitembed);
}
module.exports.help = {
  name: "invite"
}
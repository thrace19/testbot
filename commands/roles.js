const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
  let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;
  
  var roles;
      if (message.guild.roles.size === 0) {
          roles = 'None';
      } else {
          roles = message.channel.guild.roles.map(e => e).join(" ");
      }
       let sicon = message.guild.iconURL;
      let role = new Discord.RichEmbed()
      .setAuthor(message.guild.name, sicon)
      .setTitle('Server Roles')
      .addField('Roles', roles,true)
      message.channel.send(role)
}
module.exports.help = {
  name: "serveroles"
}
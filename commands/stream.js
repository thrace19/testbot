const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
 let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;
  
  if (message.author.id !== '437525938582847489' && message.author.id !== '437525938582847489') return message.channel.send('It Seems You Cant Use This :thinking:')
  const status = args.join(' ');
  if (status.length === 0) {
    const embed = new Discord.RichEmbed()
      .setColor("#7289DA")
      .setDescription(':negative_squared_cross_mark: Name streaming status!');
    message.channel.send({ embed });
  }

  else if (status.length !== 0) {
   client.user.setPresence({ game: { name: `${status}`, url: 'https://twitch.tv/hellcat', type: 1 } });
  const embed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setDescription(':white_check_mark: You sucessfully changed streaming status');
  message.channel.send({ embed });
}};
module.exports.help = {
  name: "stream"
}
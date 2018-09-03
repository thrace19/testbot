exports.run = (bot, message, args) => {
   let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;
  
  let reason = args.slice(1).join(' ');
  bot.unbanReason = reason;
  bot.unbanAuth = message.author;
  let user = args[0];
  let modlog = bot.channels.find('name', 'log');
  if (!modlog) return message.reply('I cannot find a log channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the unban.');
  if (!user) return message.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);
  message.guild.unban(user);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'Unbans the user.',
  usage: 'unban [mention] [reason]'
};

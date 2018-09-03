exports.run = async (bot, message, args, level) => {
   let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return; 
  if (message.author.id !== "437525938582847489") return;
  
let re = await message.reply("Bot is shutting down.");
 await re.react('✅')
  bot.commands.forEach( async cmd => {
    await bot.unloadCommand(cmd);
  });
process.exit(1);
message.react('✅')
        
}


// If you want more commands, upvote this! ;)



exports.conf = {
    enabled: true,
    guildOnly: true,
    permLevel: "Dev"
};

exports.help = {
    name: "reboot",
    category: "Developper",
    description: "Reboot command to reboot the bot.",
    usage: "reboot"
}
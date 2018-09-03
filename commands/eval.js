const Discord = require("discord.js");
const snekfetch = require("snekfetch")

exports.run = async (bot, message, args, color, prefix) => {
   let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;  
  if (message.author.id !== '437525938582847489' && message.author.id !== '365644930556755969') return;
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Evaluate')
        .setColor('RANDOM')
        .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}

exports.help = {
    name: 'eval',
    category: 'OWNER BOT'
}
exports.run = (client, message, args) => {
let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;
  
  
    if (!args[0]) return message.reply("Please specify the bug eg: &bug testing");
    if (args[0] === "bug")
    args = args.join(" ");
    message.reply("Thanks For Reporting Bug Has Been Submited To JBS Systems We Will Soon Fix It");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id})\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**\nBug: **${args}** `;
    client.channels.get('481752692566392834').send(`${content}`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bug',
  description: 'Reports a bug.',
  usage: 'bug <bug>'
};//481752692566392834
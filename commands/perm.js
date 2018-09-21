const discord = require("discord.js");

exports.run = async (client, message, args, level) => {
  try {
  const friendly = client.config.permLevels.find(l => l.level === level).name;
	let PermEmb = new discord.RichEmbed()
  .addField("User", `${message.author.tag}`)
  .addField("Level / Name", `${level} - ${friendly}`)
  .setColor(`GREEN`)
  message.channel.send(PermEmb)
    } catch(err) {
      const errorlogs = client.channels.get('481752692566392834')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
                  const erroremb = new discord.RichEmbed()
      .setTitle(`Error on permlevel Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: "permleve3333l",
  category: "User Commands",
  description: "Tells you your permission level for the current message location.",
  usage: "permlevel "
};

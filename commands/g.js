const google = require('google'),
      Discord = require('discord.js');
exports.run = (client, msg, args) => {
    const embed = new Discord.RichEmbed();
    msg.channel.startTyping();
    google.resultsPerPage = 1;

    google(args.join("+"), function(err, res) {
        if (err) msg.reply(":no_entry_sign: **Error:** There was an issue googling that. Please try a different keyword.");

        let link = res.links[0];
        let googleThumbnail = 'https://www.wired.com/wp-content/uploads/2015/09/google-logo-1200x630.jpg';
        let googleIcon = 'https://cdn.discordapp.com/attachments/477030812529983489/477451472192274432/456196250191134722.gif';

        embed.setColor(0xdb3236)
            .setAuthor(`Results for ${args.join(' ')}`, googleIcon)
            .setThumbnail(googleThumbnail)
            .addField(`**${link.title} - ${link.href}**`, link.description)

        msg.channel.stopTyping(true);
        msg.channel.sendEmbed(embed).catch(e => {
            msg.channel.sendMessage("There was an error!\n" + e);
        });
    });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'g',
  description: 'Googles something.',
  usage: 'google <query>'
};
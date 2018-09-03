const Discord = require('discord.js')
 const moment = require("moment");

exports.run = async (bot, message, args) => {
	 let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;
  
  let user;
	// If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
  let gif = 'https://cdn.discordapp.com/emojis/446704972780797954.png?v=1'
	// Define the member of a guild.
    const member = message.guild.member(user);
	
	//Discord rich embed
    const embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("ID:", `${user.id}`, true)
		.addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField("Created At:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Joined Server:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Bot:", `${user.bot}`,true)
		.addField("Status:", `${user.presence.status}`, true)
		.addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
		.addField("Roles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
		.setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
    .addField('Presence', message.author.presence) //The presence of this user
    .addField('Presence Status', message.author.presence.status) 
    .addField('Last Message', message.author.lastMessage) //The Message object of the last message sent by the user, if one was sent
    .addField('Last Message ID', message.author.lastMessageID)
    .addField('Username', message.author.username)
    .addField('Discrim', message.author.discriminator, true) //A discriminator/tag based on username for the user Ex:- 0001
    .addField('DMChannel', message.author.dmChannel)
     message.channel.send({embed});
    }
 module.exports.help = {
 name: "userinfo"
 }
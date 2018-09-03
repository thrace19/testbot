const snekfetch = require('snekfetch');
module.exports.run = (bot, message, args) => {
 let botconfig = require(`../botconfig.json`)
if (!message.content.startsWith(botconfig.prefix)) return;
  
  if (!args.slice(0)
		.join(' ')) return message.channel.send('Please, provide the text! Usage: hastebin <text>')
		.then(msg => msg.delete({
			timeout: 10000
		}));
	snekfetch.post('https://hastebin.com/documents')
		.send(args.slice(0)
			.join(' '))
		.then(body => {
			message.channel.send('Posted text to Hastebin\nURL: https://hastebin.com/' + body.body.key);
		});
}
module.exports.help = {
  name: "hastebin"
}
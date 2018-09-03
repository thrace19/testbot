const Discord = require("discord.js");
let botconfig = require(`../botconfig.json`)

module.exports.run = async (bot, message, args) => {
if (!message.content.startsWith(botconfig.prefix)) return;
  
 
 const user = message.mentions.users.first();
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
//if (!args[0] > 100) return message.channel.send('Whoops! Api Error Purge Limit Is 100')
if (!amount) return message.reply('Must specify an amount to delete!');
if (!amount && !user) return message.reply('Must specify amount of messages to purge!');
message.channel.fetchMessages({
 limit: amount,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : bot.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
})
 message.channel.send(`Cleared ${args[0]} messages for now ok.`).then(msg => msg.delete(5000));
}
module.exports.help = {
  name: "clear"
}
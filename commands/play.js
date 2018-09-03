const ytdl = require('ytdl-core');
const Discord = require('discord.js')


exports.run = async (client, message, args, ops) => {
   let botconfig = require(`../botconfig.json`)
   if (!message.content.startsWith(botconfig.prefix)) return;
  
    if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.');

    if (!args[0]) return message.channel.send('Sorry, please input a url following the command.');

    let validate = await ytdl.validateURL(args[0]);
  
    if (!validate) return message.channel.send('Sorry, please input a **valid** url following the command.');

    let info = await ytdl.getInfo(args[0]);
  
   let data = ops.active.get(message.guild.id) || {};
    
    if (!data.connection) data.connection = await message.member.voiceChannel.join();
    if (!data.queue) data.queue = [];
    data.guild.id = message.guild.id;
  
    data.queue.push({
    songTitle: info.title,
    requester: message.author.tag,
    url: args[0],
    announceChannel: message.channel.id
    });
  
    if (!data.dispatcher) play(client, ops, data);
    else {
      
    let gif = "https://cdn.discordapp.com/attachments/477030812529983489/477451472192274432/456196250191134722.gif"
    let pembed = new Discord.RichEmbed()
      .setTitle("Music Play")
      .setColor("#0537ff")
      .setThumbnail(gif)
      .addField(`${info.title}`,`Requested By ${message.author}`)
      .setTimestamp();
    message.channel.send(pembed);  
    }
  
  ops.active.set(message.guild.id, data);
  
}

async function play(client, ops, data) {

   let embed = new Discord.RichEmbed()
      .setTitle("Music Play")
      .setColor("#0537ff")
      .setThumbnail()
      .addField(`${data.queue[0].songTitle}`,`Requested By ${data.queue[0].requester}`)
      .setTimestamp();

  
  client.channels.get(data.queue[0].announceChannel).send(embed)
  
  data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: "audioonly"}));
  
  data.dispatcher.on('end', function() {
   end(client, ops, this) });
  
function end(client, ops, dispatcher) {

let fetched = ops.active.get(dispatcher.guildID);
  
  fetched.queue.shift();
  
  if (fetched.queue.length > 0) {
  
    ops.active.set(dispatcher.guildID, fetched);
    
    play(client, ops, fetched);
    
  } else {
  
  ops.active.delete(dispatcher.guildID);
    
    let vc = client.guilds.get(dispatcher.guildID.me.voiceChannel)
    if (vc) vc.leave();
  
  }
  
}  

}
module.exports.help = {
    name: "play"
}
module.exports.run = async (bot, message, args) => { // Run the command when a command is called
	const send = require(`quick.hook`)
	const Discord = require(`discord.js`)
  const db = require(`quick.db`)

        // Admin Perms
         let ownerEmbed = new Discord.RichEmbed()
         .setDescription(`**This command requires the Administrator Permissions**`)
         .setFooter(`[HSS] Hinami Security System`)
         .setColor(`RED`)
         if (!message.member.hasPermission("ADMINISTRATOR")) {
             return message.channel.send(ownerEmbed)
         }
        // Args Set
         if(`${args[0]}` == `set`){
            // Setting Channel
             if(`${args[1]}` == `channel`) {
                try {
                    // Embed
                     let mentionEmbed = new Discord.RichEmbed()
                     .setDescription('**Please mention a channel**\n **>** *-!settings set channel #channel*')
                    // Return Statements
                     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(ownerEmbed, 120000) // This returns if it CANT find the admin perm on them. It then uses the function to send to message.channel, and deletes the message after 120000 milliseconds (2minutes)
                     if (!args[2]) return message.channel.send(`You Input A Message! Refer To \`-!settings help\``)
                     if (!args.slice(2, 1000, args[2]).join(' ') === 'NONE') return message.channel.send(mentionEmbed) // This returns if they don't message a channel, but we also want it to continue running if they want to disable the log
                
                    // Fetch the new channel they mentioned
                     let newChannel = ''
                     const errorReport = bot.channels.get(`453597878888300544`)
                     if (args.slice(2, 1000, args[2]).join(' ') === 'NONE') newMessage = '' // If they wrote the word none, it sets newMessage as empty.
                     else newMessage = args.slice(2, 1000, args[2]).join(' ') // If they didn't write none, set what they wrote as the message
                     if(`${message.mentions.channels.first()}` == `undefined`) return
                     let channelEmbed = new Discord.RichEmbed()
                     .setDescription(`**Successfully updated logging channel to ${message.mentions.channels.first()}**`)
                
                    // Update Channel
                     db.set(`pmessageChannel_${message.guild.id}`, `${message.mentions.channels.first().id}`).then(i => {
                        message.channel.send(channelEmbed) // Finally, send in chat that they updated the channel.
                     })
                }catch(err) {console.log(`Error with setting channel\n${err}`)}
            // Setting Direct Message
             } else if (`${args[1]}` == `dmessages`) {
                try {
                    // Embed
                     let mentionEmbed = new Discord.RichEmbed()
                     .setDescription('**Please mention a channel**\n **>** *-!settings set dmessages <Direct Message For Users Joining>*')            
                    // Return Statements
                     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(ownerEmbed, 120000) // This returns if it CANT find the admin perm on them. It then uses the function to send to message.channel, and deletes the message after 120000 milliseconds (2minutes)
                     if (!args.slice(2, 1000, args[2]).join(' ') === 'NONE') return message.channel.send(mentionEmbed) // This returns if they don't message a channel, but we also want it to continue running if they want to disable the log
                
                    // Fetch the new channel they mentioned
                     let newMessage;
                     if (args.slice(2, 1000, args[2]).join(' ') === 'NONE') newMessage = ''; // If they wrote the word none, it sets newMessage as empty.
                     else newMessage = args.slice(2, 1000, args[2]).join(' '); // If they didn't write none, set what they wrote as the message
                
                     let dmEmbed = new Discord.RichEmbed()
                     .setDescription(`**Successfully updated DM welcome text to:**\n > *${args.join(" ").trim()}*`)
                
                    // This will update the .text of the joinMessageDM_guildID object.
                     db.set(`pjoinMessageDM_${message.guild.id}`, newMessage).then(i => {
                        message.channel.send(dmEmbed) // Finally, send in chat that they updated the channel.
                     })
                }catch(err) {console.log(`Error with setting DM\n${err}`)}
            // Setting Joining Message
             } else if (`${args[1]}` == `jmessages`) {
                try {
                    // Embed
                     let mentionEmbed = new Discord.RichEmbed()
                     .setDescription('**Please mention a channel**\n **>** *-!settings set jmessages <Joining Message For Users Joining>*')
                    // Return Statements
                     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(ownerEmbed, 120000) // This returns if it CANT find the admin perm on them. It then uses the function to send to message.channel, and deletes the message after 120000 milliseconds (2minutes)
                     if (!args.slice(2, 1000, args[2]).join(' ') === 'NONE') return message.channel.send(mentionEmbed) // This returns if they don't message a channel, but we also want it to continue running if they want to disable the log
                
                    // Fetch the new channel they mentioned
                     let newMessage;
                     if (args.slice(2, 1000, args[2]).join(' ') === 'NONE') newMessage = ''; // If they wrote the word none, it sets newMessage as empty.
                     else newMessage = args.slice(2, 1000, args[2]).join(' '); // If they didn't write none, set what they wrote as the message
                
                    // This will update the .text of the joinMessageDM_guildID object.
                     let welcomeEmbed = new Discord.RichEmbed()
                     .setDescription(`**Successfully updated welcome text to:**\n > *${newMessage}*`)
                
                     db.set(`pjoinMessage_${message.guild.id}`, newMessage).then(i => {
                        message.channel.send(welcomeEmbed) // Finally, send in chat that they updated the channel.
                     })
                }catch(err) {console.log(`Error with setting welcome\n${err}`)}
            // Setting Leaving Message
             } else if (`${args[1]}` == `lmessages`) {
                try {
                    // Embed
                     let mentionEmbed = new Discord.RichEmbed()
                     .setDescription('**Please mention a channel**\n **>** *-!settings set lmessages <Leaving Message For Users Depating>*')
                    // Return Statements
                     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(ownerEmbed, 120000) // This returns if it CANT find the admin perm on them. It then uses the function to send to message.channel, and deletes the message after 120000 milliseconds (2minutes)
                     if (!args.slice(2, 1000, args[2]).join(' ') === 'NONE') return message.channel.send(mentionEmbed) // This returns if they don't message a channel, but we also want it to continue running if they want to disable the log
                
                    // Fetch the new channel they mentioned
                     let newMessage;
                     if (args.slice(2, 1000, args[2]).join(' ') === 'NONE') newMessage = ''; // If they wrote the word none, it sets newMessage as empty.
                     else newMessage = args.slice(2, 1000, args[2]).join(' '); // If they didn't write none, set what they wrote as the message
                
                     let leaveEmbed = new Discord.RichEmbed()
                     .setDescription(`**Successfully updated welcome text to:**\n > *${args.join(" ").trim()}*`)
                
                    // This will update the .text of the joinMessageDM_guildID object.
                     db.set(`pleaveMessage_${message.guild.id}`, newMessage).then(i => {
                        message.channel.send(leaveEmbed) // Finally, send in chat that they updated the channel.
                     })
                }catch(err) {console.log(`Error with setting leave\n${err}`)}
			// Setting Options
             } else {
                let settingsEmbed = new Discord.RichEmbed()
                .setDescription(`**<>** Settings Menu [SET] **<>**\n\n**channel** - -!settings set channel #channel\n**dmessages** - -!settings set dmessages <Direct Message For Users Joining>\n**jmessages** - -!settings set jmessages <Joining Message For Users Joining>\n**lmessages** - -!settings set lmessages <Leaving Message For Users Depating>`)
                message.channel.send(settingsEmbed)
             }
         }}
		module.exports.help = { // This is the config for a command. Able to add things like proper usage & etc.
      	command: "test",
  		}

const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let purple = botconfig.purple;
let ownerID = '437525938582847489'
var utils = require('bot-utils')
const active = new Map();
let config = require("./config.json")
const client = new Discord.Client();
var prefix = '&';
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube(process.env.YOUTUBE_API_KEY);
const queue = new Map();
var servers = {};
const sql = require("sqlite");
var utils = require('bot-utils')

sql.open("./score.sqlite");

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

//var presences = [
   // `&help || ${bot.guilds.size}`,
  //  `&help | ${bot.users.size}`,
  //  "My Prefix Is &help",
  //  "&help"
//]


// bot.on('ready', () => {
 //   bot.user.setActivity(utils.randItemFromArray(presences)).then(() => {
   //     setTimeout(() => {
   //         bot.user.setActivity(utils.randItemFromArray(presences))
   //     }, 60000)
//    })
//})

bot.on("ready", async () => {
  
  console.log(`${bot.guilds.size}`)
  
   let status = [
     `&help | ${bot.guilds.size} Guilds`,
    `&help | ${bot.users.size} Users`,
      `My prefix Is: &`
  ]
   let rstatus = Math.floor(Math.random() * status.length);
  bot.user.setActivity(status[rstatus], {type:"STREAMING", url:"https://twitch.tv/twitch"})
setInterval(status, 30000)
})
bot.on("guildCreate", guild => {
  let welcomechannel = guild.channels.find(`name`, "welcome");
  welcomechannel.send("Thanks's For Inviting Me My Default Prefix Is &");
});
//bot.on('guildMemberAdd', member => {
 //   const welcomechannel = member.guild.channels.find('name', 'welcome')

   // var newuserjoinembed = new Discord.RichEmbed()
   //   .setColor('00FF00')
     // .setAuthor(member.user.tag + ' has joined server', member.user.displayAvatarURL)
   //   .addField(`:inbox_tray: Welcome To The Server ${member.user.tag}`,'Thnx For Joining')
   //   .setFooter(`User joined`)
    //  .setTimestamp()
   //   return welcomechannel.send(newuserjoinembed);
//});
bot.on("guildCreate", guild => {
  let botchannel = guild.channels.find(`name`, "bot-commands");
  botchannel.send("Thanks's For Inviting Me My Default Prefix Is !");
});
//bot.on('guildMemberRemove', member => {
  //  const goodbyechannel = member.guild.channels.find('name', 'leave')

  //  var newuserjoinembed = new Discord.RichEmbed()
   //   .setColor('#FF0000')
     // .setAuthor(member.user.tag + ' has left server', member.user.displayAvatarURL)
    //  .addField(`:outbox_tray: Goodbye :disappointed_relieved: `,'Bye')
     // .setFooter(`User left`)
    //  .setTimestamp()
     // return goodbyechannel.send(newuserjoinembed);
//});
 let ops = {
    active: active
  }

bot.on("message", async message => {
  
  
  
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

   let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

 
    
  
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args,ops);
  
   sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?,  ?, ?)", [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
        message.reply(`You've leveled up to level **${curLevel}**`).then(msg => {msg.delete(7000)});
      }
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });

  if (!message.content.startsWith(prefix)) return;
  
   if (message.content.startsWith(prefix + "check")) {
   message.channel.send("Checked **Database Sysytem** Is Working!").then(msg => {msg.delete(700)});
   
   }
  
  

  if (message.content.startsWith(prefix + "level")) {
     message.reply("The Level And point Command Have Been Integrated In The `$rank` Command! Type `$rank` To Get Your Points And Level!").then(msg => {msg.delete(7000)});
  } else
     if (message.content.startsWith(prefix + "rank")) {
        let target = message.mentions.users.first() || message.author;
    sql.get(`SELECT * FROM scores WHERE userId ="${target.id}"`).then(row => {
      if (!row) return message.channel.send(`The Current Level Of ${target} Is 0 `);
      const embed = new Discord.RichEmbed()
.setTitle(`Rank Board`)
.setDescription(`This Is The Rank Of **${target.username}**`)
.setThumbnail("http://wiki.supermechs.com/images/3/33/Forum_Rank_20.png")
.addField("User ID:" , `${target.id}`)
.addField("Level:", `${row.level}`)
.addField("Points:", `${row.points}`)
.setFooter(`This Command was Called By **${message.author.username}**  `)
.setTimestamp()
.setColor(0x1ee837);

message.channel.send(embed).then(message => {message.delete(7000)});
    });
  } else

  if (message.content.startsWith(prefix + "points")) {
   message.reply("Type `$rank` To Get Your Points And Level!").then(msg => {msg.delete(7000)});
  }

});
bot.login(process.env.BOT_TOKEN);

const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    let {
        body
    } = await superagent
        .get(`https://nekos.life/api/v2/img/smallboobs`);
    if (!message.channel.nsfw) return message.channel.send("Please Use In NSFW Channel!");

    let hentaiEmbed = new Discord.RichEmbed()
        .setColor("randomColor")
        .setImage(body.url)

    message.channel.send(hentaiEmbed);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["neko"],
    permLevel: 0
};

exports.help = {
    name: "boobs",
    description: "",
    usage: "loli"
};
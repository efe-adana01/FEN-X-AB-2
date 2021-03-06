const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const sharpen = new Discord.MessageEmbed()

.setColor("RED")
.setImage("https://64.media.tumblr.com/0d3e5f9581ab6de028e2b49ca0904d40/tumblr_mlnnp7b84r1qeiog8o1_400.gif")
.setTitle("Efsane bir gol attın !");

  message.channel.send(sharpen);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gol"],
  permLevel: `Yok`
};

exports.help = {
  name: "gol",
  description: "Gol  atarsın",
  usage: "gol"
};
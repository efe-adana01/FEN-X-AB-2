const Discord = require("discord.js");
exports.run = async (client, message, args) => {

const pinkcode = new Discord.MessageEmbed()

.addField(`Pingim` ,`${client.ws.ping}`)
  
return message.channel.send(pinkcode)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Sade Ping Komutu işde mq',
  usage: 'ping'
}; 
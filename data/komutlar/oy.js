const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Beni Aşağıdaki Linke Tıklayarak Oylayabilirsin ❤️")
  .setDescription("[__**Bota Oy Vermek İçin**__](https://top.gg/bot/806806426500071454/vote)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oy',
  description: '',
  usage: ''
};
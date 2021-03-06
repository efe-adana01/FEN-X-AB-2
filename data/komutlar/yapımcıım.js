const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  
  const yapımcım = new Discord.MessageEmbed()
  
  .setTitle('Yapımcılarım ;')
  
  .setColor("GREEN")
  
  .setThumbnail('logo link')
  
  .setDescription('bari Sen yaz')
  
  message.channel.send('**<@745643020644515913> & <@523411508869464064> **')
  }
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases : ['yapimcim'],
  permLevel: 0
}

exports.help = {
  name: "yapımcım",
  description: "Botun yapımcılarını gösterir.",
  usage: "yapımcım"
}
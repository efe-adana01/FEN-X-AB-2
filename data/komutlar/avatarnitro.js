const Discord = require('discord.js');

exports.run = (client, message) => {
	const avv = message.mentions.users.first() || message.author

	const url = `https://eggsy.xyz/api/overlay/create.png?overlay=nitro2&url=${avv.avatarURL({ format: 'png',  size: 2048 })}`

	let nitroembed = new Discord.MessageEmbed()
	.setAuthor(avv.tag)
	.setImage(url)
	.setColor("c6cf73")
	message.channel.send(nitroembed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'nitro',
  description: 'qwe',
  usage: 'qwe'
};
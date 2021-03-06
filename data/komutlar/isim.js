const dc = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NİCKNAMES")) return;
  let user = message.mentions.users.first();
  let o = message.mentions.members.first();
  let isim = args.slice(1).join(" ");
  
  message.guild.members.cache.get(o.id).setNickname(isim);
  const embed = new dc.MessageEmbed()
    .setTitle("İsim Değiştirildi")
    .addField(`İsmi Değiştirilen Kişi`, o)
    .addField(`İsmi Değiştiren Kişi`, message.author)
    .addField(`Yeni İsim`, isim)
    .addField(`Eski İsim`, user.username);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildonly: true,
  aliases: ["isim"],
  permLevel: 0
};
exports.help = {
  name: "isim-değiştir"
};
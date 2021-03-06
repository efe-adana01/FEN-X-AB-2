const Discord = require("discord.js")

exports.run = async(client, message, args)  => {

const DarkMsg = new Discord.MessageEmbed() 
.setDescription(`

:envelope_with_arrow: **Yardım Paneli

:speech_balloon: Prefix f!

:cyclone: » __Kullanıcı Komutları__
 f!kullanıcı

:trident: » __Moderasyon Komutları__
f!moderasyon

:thought_balloon: » __Chat Komutları__
f!chat 

:tada:» __Eğlence Komutları__
f!eğlence**`)








.addField(`Bilgilendirme <a:nlem:806921899049091133>`,

`**Botun Tam Çalışması İçin Botun Rolünü En Üste Alınız Ve Tüm Komutların Başına f! Ekleyiniz.**<a:tik:806922560548765766>

<a:tik:806922560548765766> **__Beni Oylamak İçin f!oy Yazarak Oylayabilirsin <a:nlem:806921899049091133>__**`)

message.channel.send(DarkMsg)
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["yedek-komut","yedek-komut2"],// , "" yaparak daha çok çoğaltabilirsin
permLevel: 0
}
exports.help = {

name: 'yardım',
description: 'yardım',
usage: 'yardım'
}  
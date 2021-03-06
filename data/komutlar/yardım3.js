const Discord = require("discord.js")

exports.run = async(client, message, args)  => {

const DarkMsg = new Discord.MessageEmbed() 
.setDescription(`

 **__f!küfüraç__= Küfür Filtresini Açarsınız.

 __f!slowmode__ = Bir Kanalın Yazı Yazma Süresini Belirtirsiniz.

 __f!küfürkapat__= Küfür Filtresini Kapatırsınız.

 __f!reklam aç__= Reklam Filtresini Açarsınız.

 __f!reklam kapat__= Rekalm Filtresini Kapatırsınız.

 __f!kilit__= Bir kanalı Kitlersiniz.

 __f!kilit aç__= Bir kanalın Kilidini Açarsınız.

 __f!sa-as aç__= Sa As'ı Açarsınız   (Kapatmak İçin f!sa-as kapat)

 __f!capsengel aç (oran)__= Büyük Harf Yazmayı Engellersiniz. (Bakımda)

 __f!capsengel sıfırla__= Büyük Harf Yazma Engeli Sistemini Kapatırsınız. (Bakımda)

 __f!kanalaçıklama__= Bulunduğunuz kanalın konusunu/açıklamasını değiştirir.**`)

.addField(`Bilgilendirme <a:nlem:806921899049091133>`,

` **Botun Tam Çalışması İçin Botun Rolünü En Üste Alınız Ve Tüm Komutların Başına f! Ekleyiniz.**<a:tik:806922560548765766>`)

message.channel.send(DarkMsg)
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["yedek-komut","yedek-komut2"],// , "" yaparak daha çok çoğaltabilirsin
permLevel: 0
}
exports.help = {

name: 'chat',
description: 'yardım',
usage: 'f!chat'
}
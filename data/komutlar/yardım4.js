const Discord = require("discord.js")

exports.run = async(client, message, args)  => {

const DarkMsg = new Discord.MessageEmbed() 
.setDescription(`

** __f!afk__= f!afk Yazarak Afk Olabilirsiniz.

 __f!avatar__= Kendinizin Veya Etiketlediğiniz Kişinin Avatarını Görebilirsiniz.

 __f!banner__= Yazdığınız Yazıyı Bannere Çevirir.

 __f!snipe__= Silinen Mesajı f!snipe Yazarak Görebilirsiniz.

 __f!öneri__= Bota Bir Öneri Yaparsınız. 

 __f!toplam-komut__= Bottaki Toplam Komutu Görürsünüz.

 __f!emojiler__= Sunucudaki Emojileri Görürsünüz. 

 __f!bug-bildir__=Botla Alakalı Bir Bug Bildirirsiniz.

 __f!ping__= Botun Pingini Görürsünüz.

 __f!sunucutanıt__= Kendi Sunucunuzun Reklamını Yaparsınız (6 Saate Bir Kullanabilirsiniz.)

 __f!şikayet__= Botla Alakalı Bir Şikayet Yaparsınız.

 __f!osmanlı-bilgi__= Osmanlı Devleti Hakkında Bilgi Alırsınız.

 __f!istatistik__= Botun İstatisklerini Görürsünüz.

 __f!sunucuresmi__= Bulunduğunuz Sunucunun Resmini Atar

__f!spotify__= Herhangii Bir Kişiyi Etiketleyerek Veya Kendinizi Etiketleyerek Spotify Bilgilerini Görürsünüz.

__f!isim-değiştir__= Etiketlediğiniz Kullanıcının İsmini Değiştirirsiniz.

__f!cihaz__= Etiketlenen kişinin nereden, hangi durum ile bağlandığını gösterir. Offline ise bağlandığı yeri yazmaz.

__f!yaş-hesapla__= Yaşınızı Hesaplarsınız.**`)

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

name: 'kullanıcı',
description: 'yardım',
usage: 'f!kullanıcı'
}
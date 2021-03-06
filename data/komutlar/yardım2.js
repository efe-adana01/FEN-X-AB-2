const Discord = require("discord.js")

exports.run = async(client, message, args)  => {

const DarkMsg = new Discord.MessageEmbed() 
.setDescription(`

** __f!ban__= f!ban Etiket Atarak Bir Kişiyi Sunucudan Yasaklayabilirsiniz.

 __f!otorol-bot__= Botlar İçin Otorol Ayarlar.

 __f!sağtık-koruma__= Sağtık Ban Koruma Açar.

 __f!çek__= Sesteki Birini Yanınıza Çekersiniz. 

 __f!git__= Sesteki Birinin Yanına Gidersiniz.

 __f!id__= Belirtiğiniz Kişinin İD Sini Atar. 

 __f!reboot__= Botu Yeniden Başlatırsınız.

  __f!otorol__= Bir kişinin Sunucuya Girerken Verileceği Rolü Bot Otomatik Olarak Verir (Ayarlamalıdır)

 __f!kick__= Sunucudan Bir Üyeyi Kicklersiniz.

 __f!sayaç-ayarla__= Sayacı Ayarlarsınız.

 __f!sayaç-kanal-ayarla__= Sayaç Kanalını Ayarlarsınız.

 __f!rol-ver__= Belirtiğiniz Kuallanıcıya f!rol-ver Yazarak Etiketledğiniz Rolü Verebilirsiniz.

__f!banlist__= Sunucudaki Banlananların Listesini Görürsünüz.

__f!sunucukur__= Hazır Sunucu Kurarsınız (Komudun Sorunsuz Çalışması İçin Sunucuda Tek 1 Kanal Kalması Lazımdır.)

__f!güvenlik #kanal__= Katılan kullanıcıların şüpheli mi yoksa güvenilir mi olduğunu söyler.**`)

.addField(`Bilgilendirme <a:nlem:806921899049091133>`,

` **Botun Tam Çalışması İçin Botun Rolünü En Üste Alınız Ve Tüm Komutların Başına f! Ekleyiniz**.<a:tik:806922560548765766>

`)

message.channel.send(DarkMsg)
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["yedek-komut","yedek-komut2"],// , "" yaparak daha çok çoğaltabilirsin
permLevel: 0
}
exports.help = {

name: 'moderasyon',
description: 'yardım',
usage: 'f!moderasyon'
}
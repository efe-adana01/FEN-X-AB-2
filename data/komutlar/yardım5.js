const Discord = require("discord.js")

exports.run = async(client, message, args)  => {

const DarkMsg = new Discord.MessageEmbed() 
.setDescription(`

**__f!atatürk__= Atatürk Gifi Atar.

__f!nitro__= Avatarınıza nitro Ekler.

 __f!taksimdayı__= Taksim Dayı Gifi Atar.

 __f!wasted__= Avatarınıza Wasted Efekti Uygular.

__f!gun__= Avatarınıza Silah Efekti Uygular. 

__f!napim__= Napim Fotoğrafı Atar. 

__f!kurallar__=Hazır Kurallar Atar.

__f!fbi__= Fbi Gifi Atar

 __f!yazıtura__= Yazımı Turamı Oynarsınız.

 __f!çıkma-teklifi-et__= Birine Çıkma Teklifi Edersiniz.

 __f!fal__= Fal Bakarsınız.

 __f!gol__= Gol Atarsınız

__f!balıktut__= Balık Tutarsınız.

 __f!ağla__= Botu Ağlatırsınız.

 __f!8ball__= Bot İle Soru Cevap Yaparsınız.

 __f!keko-yazı__= Keko Yazı Stili İle Yazdığınız Mesajı Keko Yazısı Olarak Atar.

__f!kuş-dili-çevirici__= Yazdığınız Kelimeyi kuş Diline Çevirir

 __f!evlenme-teklifi__= Etiketledğiniz Kişiye Evlenme Teklifi Edersiniz

__f!espri__= Bot Espri Yapar.

__f!boğazla__= Etiketlediğiniz veya IDsini yazdığınız kişinin profil fotoğrafına boğazlıyormuş gibi duran eller ekler ve yollar.

__f!atasözü__= Rastgele Atasözü Atar.

__f!zar-at__= Zar Atarsınız.**`)

.addField(`Bilgilendirme <a:nlem:806921899049091133>`,

`**Botun Tam Çalışması İçin Botun Rolünü En Üste Alınız Ve Tüm Komutların Başına f! Ekleyiniz.**<a:tik:806922560548765766>`)

message.channel.send(DarkMsg)
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["yedek-komut","yedek-komut2"],// , "" yaparak daha çok çoğaltabilirsin
permLevel: 0
}
exports.help = {

name: 'eğlence',
description: 'yardım',
usage: 'f!eğlence'
}
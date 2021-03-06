const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    var d = ["En büyük ve pişman olduğun kötülüğün neyle alakalı idi ve neydi ?",
    "Hiç kimsenin bilmediği bir şeyini bana söyler misin?",
    "En çok utandığın an ne zamandı?",
    "En son neden ağladın?",
    "Satın aldığın ama asla kullanmadığın 10 şey nedir?",
    "Bir saat boyunca karşı cinsten biri olsaydın ne yapardın?",
    "Bugüne kadar gördüğün en garip rüyayı tarif eder misin?",
    "Tanıdığın bir kişiyle bir adada mahsur kalacak olsan bu kim olurdu ?",
    "Bir saat boyunca görünmez olsaydın ne yapmak isterdin?",
    "Sana yanlış yapan birinden hiç intikam aldın mı?",
    "Geçmişte bir yere geri gidebilecek olsan nereye giderdin?",
    "Gelecekte bir yere geri gidebilecek olsan nereye giderdin?",
    "Bu sunucuda bir kişiyle evlenmek isteseydin bu kim olurdu?",
    "Tanınmak için yaptığın en aptalca şey nedir?",
    "Durağan, sakin veya çılgınca bir ilişkiden hangisini seçersin?",
    "Görmemek istediğin halde görmek zorunda kaldığın şey nedir?",
    "En büyük kusurun nedir?",
    "Söylediğin en son yalan neydi?",
    "Bize bir sarhoşluk hikayeni anlat!",
    ""
  ]
    var c = ["Erkek/kız arkadaşının ailesini arayıp çocuklarıyla evlenmeyi planladığını söyle.",
    "Sunucu kurucusunu etiketleyip genel sohbet te kuralları boz fazla abartma ama.",
    "Başka sunucularda bizim reklamımızı yap ve ss at.",
    "İnstagram dmlerini ss alıp buraya at.",
    "Galeriyi ss al ve at.",
    "Galerindeki en saçma fotoğraf at",
    "Rastgele birine seni seviyorum de.",
    "Rastgele birine ben gelecekten geliyorum diyerek muhabbet başlat.",
    "Bir meme oluştur.",
    "Cesaret sorusu öner.",
    "#hikaye-devam-ettirme de oyunu bitir.",
  ]
    var dcevap = d[Math.floor(Math.random() * d.length)];
    var ccevap = c[Math.floor(Math.random() * c.length)];

    var filter = m => m.author.id === message.author.id;
    message.reply(' | \`Doğruluk\` Mu Yoksa \`Cesaret\` Mi?').then(msg => {
    message.channel.awaitMessages(filter, {
      max: 1
    }).then(collected => {
        let karakter = collected.first();
        if (karakter == "d" || karakter == "doğruluk" || karakter == "d") {
            return message.channel.send(dcevap)

        }
        if(karakter == "c" || karakter == "cesaret" || karakter == "c"){
        return message.channel.send(ccevap)
        } else {
         collected.first().delete();
         return msg.edit("<@"+message.author.id+"> | Sadece d veya c olarak değer giriniz.")
        }

    })
    })
}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['dc'],
    permLevel: 0
};

exports.help = { 
	name: 'dc', 
  description: "doğruluk cesaretlilik",
  usage: 'dc'
}
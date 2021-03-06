const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  var oyun = [
          "Bot 100 Sunucuya Ulaşmıştır Yani Doğrulama Aşamasındadır 📣",
          "Prefix f! => Yardım İçin f!yardım 🔑",
          "Kullanıcı Komutları İçin f!kullanıcı 🔧",
          "Moderasyon Komutları İçin f!moderasyon 💂‍♂️"  ,
          "Chat Komutları İçin f!chat 🔔",
          "Eğlence Komutları İçin f!eğlence 🧸",
      ];
  
      setInterval(function() {
  
          var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
  
          client.user.setActivity(oyun[random], "Destek Sunucusuna Gelmek İçin f!davet" );
          }, 2 * 2500);
          (`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
};

//burda bişi yok reboot at bota
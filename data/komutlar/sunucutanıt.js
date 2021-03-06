const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {

const PreX = new Set();

  if (PreX.has(message.author.id)) {
           return message.channel.send("`6` Saate da Bir Kullanabilirsiniz - " + message.author);
    } else {
        PreX.add(message.author.id);
        setTimeout(() => {
        message.delete();
          PreX.delete(message.author.id);
        },21600000);// milisaniye cinsinden
    } 
  
  
  if (talkedRecently.has(message.author.id)) {
    message.channel.send("Hopp, dur bakalım. Bu komutu 6 saatte bir kullanabilirsin " + message.author);
} else {

   // the user can type the command ... your command code goes here :)

// Adds the user to the set so that they can't talk for a minute
talkedRecently.add(message.author.id);
setTimeout(() => {
  // Removes the user from the set after a minute
  talkedRecently.delete(message.author.id);
}, 43200000);
}

let user = message.author.username;
let guild = message.guild;
let channel = bot.channels.cache.get("807297485944782859");
let invite = await message.channel.createInvite({
    maxAge: 0,
    maxUses: 0
  });
let embed = new Discord.MessageEmbed()
.setTitle("Bir Sunucu Tanıtıldı")
.addField("Sunucuyu Tanıtan Kişi", user, true)
.addField("Sunucu Adı", guild.name, true)
.addField(`Sunucu Davet Linki`, `https://discord.gg/${invite.code}`)
.setColor("#f49542")

message.channel.send(":white_check_mark:  **| Sunucunu başarıyla destek sunucumda tanıttım.**")
channel.send(embed)

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'sunucutanıt'
}
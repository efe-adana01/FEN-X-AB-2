const Discord = require('discord.js');
var prefix = "prefixiniz"
exports.run = async(client, message, args) => {// rând#1337
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Bu Komutu Kullanabilmek için `BAN_MEMBERS` Yetkisine Sahip Olmalısın!');

    var user = message.mentions.users.first();
    if(!user) return message.reply(`Birini Etiketlemen Lazım! (ör: ${prefix}ban <@kullanıcı>)`);

var member = message.guild.member(user)

if(!member) return message.reply('Etiketlediğiniz Kullanıcı Sunucuda Bulunmamaktadır!');
 
/*    if(member){
        if(member.hasPermission('MANAGE_MESSAGES')) return message.reply('Bu Üyeyi Yasaklaman için Yeterli Yetkiye Sahip Değilsin!');
    }
*/
    var reason = args.splice(1).join(' ');
    if(!reason) return message.reply('Bir Sebep Yazmalısın!');

    // burda log yazan yere hangi isimli kanala göndermesini istiyorsanız onu yazabilirsiniz. eğer göndermesini istemiyorsanız silebilirsiniz

    var log = new Discord.MessageEmbed()
    .setTitle('Bir Üye Yasaklandı!')
    .addField('Yasaklanan Üye:', user, true)
    .addField('Yasaklayan Yetkili:', message.author, true)
    
   
    var embed = new Discord.MessageEmbed()
    .setTitle(`**${message.guild.name}** Adlı Sunucudan Yasaklandın.`);
    

    try {
        await user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    message.guild.members.ban(user);

    message.channel.send(`**${user}** isimli kullanıcı **${message.author}** adlı yetkili tarafından sunucudan yasaklanmıştır.`);
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["yasakla"], 
  permLevel: 0
};
// rând#1337 ~ discord.gg/codare
exports.help = {
  name: 'ban',
  description: 'gelişmiş ban komutu işte', 
  usage: 'ban <@user>'
};
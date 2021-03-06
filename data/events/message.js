const ayarlar = require("../ayarlar.json");
module.exports = async message => {
  let client = message.client;
  let prefix =
    (await require("quick.db").fetch(`prefix_${message.guild.id}`)) ||
    ayarlar.prefix;
  if (message.author.bot) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
};
const Discord = require('discord.js')
module.exports = message => {

  let client = message.client;

  if (message.author.bot) return;

  if (!message.content.startsWith(ayarlar.prefix)) return;

  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);

  let params = message.content.split(' ').slice(1);

  let perms = client.elevation(message);

  let cmd;

  

  if (!client.commands.has(command)) {

    if (client.aliases.has(command)) {

      cmd = client.commands.get(client.aliases.get(command));

    } else {

      message.channel.send(new Discord.MessageEmbed()
                           .setTitle("UYARI")
        .setDescription(`Komutlarımda **${command}** adında bir komut bulamadım!\nKomut listesine bakmak için: **${ayarlar.prefix}yardım**`)
                          .setColor("RANDOM"))//renk

    }

  }

  if (client.commands.has(command)) {

    cmd = client.commands.get(command);

  } else if (client.aliases.has(command)) {

    cmd = client.commands.get(client.aliases.get(command));

  }

  if (cmd) {

    if (perms < cmd.conf.permLevel) return;

    cmd.run(client, message, params, perms);

  }

};
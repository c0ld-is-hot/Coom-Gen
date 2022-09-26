const Discord = require ("discord.js")

exports.run = async (client, message) => {
    const user = message.mentions.users.first() || message.author;
    if (!message.mentions.users.size) {
        message.channel.send('Mention Someone retard');
        return;
    }
    const avatarEmbed = new Discord.MessageEmbed()
        .setColor(0x00AE86)
        .setAuthor(`${user.username}'s Avatar`)
        .setImage(
          `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`
        );
    message.channel.send(avatarEmbed);
}
module.exports.help = {
  name: 'av'
}
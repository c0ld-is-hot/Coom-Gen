const Discord = require ("discord.js")

exports.run = async (client, message) => {
    const user = message.mentions.users.first() || message.author;
        if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.channel.send('Bruh you dont have fucking perms'); }
    
    if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) { return message.channel.send('I don\'t have the permission for ban users" !'); }
    
    if (message.mentions.users.size === 0) { return message.channel.send('Ping someone nigga'); }
    let banMember = message.guild.member(message.mentions.users.first());
    if (!banMember) { return message.channel.send('Its not me you did something to the user faggot check if pingged'); }
    
            banMember.ban().then((member) => {
        //    message.channel.send(member.displayName + " has left the server")
        let embed = new Discord.MessageEmbed()
        .setColor('#0x00AE86')
        .setTitle('Ban momento')
        .setAuthor('Made by Alone#0003')
        .setDescription(`Bye bye faggot hope you like your ban ${member.displayName}`)
        .setImage(
            `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`
          );
    message.channel.send(embed);
           //     message.channel.send(member.displayName + " Bye bye faggot hope you like your ban ");
            })
}
module.exports.help = {
  name: 'gen'
}
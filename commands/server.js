const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('CoomGen MainServer')
	.setAuthor('Alone#0003')
    .setURL("https://discord.gg/zSjAKmGQnU")
	.setTimestamp()
	.setFooter('CoomGen');

message.channel.send(embed);
}
module.exports.help = {
  name: 'Server'
}
const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Invite coomgen')
	.setAuthor('Alone#0003')
    .setURL("https://bit.ly/3Fe3o1H")
	.setTimestamp()
	.setFooter('CoomGen');

message.channel.send(embed);
}
module.exports.help = {
  name: 'Server'
}
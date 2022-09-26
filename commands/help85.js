const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('CoomGen Help')
	.setAuthor('Made by Alone#0003')
	.setDescription('Commands: \n $moderation \n $stock \n $util \n $fun \n $gen')
	.setTimestamp()
	.setFooter('CoomGen');

message.channel.send(embed);
}
module.exports.help = {
  name: 'help'
}

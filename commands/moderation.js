const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, msg, args, config) => {
  let embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('CoomGen Mod commands')
	.setAuthor('Alone#0003')
	.setDescription('Commands: \n $kick \n $purge \n $lockdown \n $unlockdown \n $mute \n $serverinfo \n $ban')
	.setTimestamp()
	.setFooter('CoomGen');

    msg.channel.send(embed);
}
module.exports.help = {
  name: 'help'
}

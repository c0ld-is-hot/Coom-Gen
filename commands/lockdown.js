const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports.run = async (client, message, args, config) => {
    if(message.member.hasPermission('KICK_MEMBERS')) {
        message.channel.updateOverwrite(message.channel.guild.roles.everyone, { VIEW_CHANNEL: true, SEND_MESSAGES: false });
        message.channel.send("Locked :white_check_mark: ");
    }
}
module.exports.help = {
    name: 'lockdown'
  }
  

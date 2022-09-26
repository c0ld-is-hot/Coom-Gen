const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports.run = async (client, msg, args, config) => {
    if (msg.member.hasPermission("KICK_MEMBERS")) {
        if (msg.members.mentions.first()) {
            try {
                msg.members.mentions.first().kick();
            } catch {
                msg.reply("I do not have permissions to kick " + msg.members.mentions.first());
            }
        } else {
            msg.reply("You do not have permissions to kick " + msg.members.mentions.first());
        }
    }
}
module.exports.help = {
    name: 'kick'
  }
  

const { ReactionCollector } = require('discord.js-collector')
const { Client, MessageEmbed } = require("discord.js");

const pages = {
    '📥': {
        embed: {
            title: 'Help Menu',
            description: `React below To switch pages to see the commands.\n\n📜 Stock\n\n📢 Gen\n\n 👍 Fun\n\n 😄 Mod\n\n💩 Util`,
        },
        reactions: ['📜', '📢', '👍', '😄', '💩'],
        pages: {
            '📜': {
                backEmoji: '🔙',
                embed: {
                    description: 'Commands: \n $stock-nordvpn \n $stock-spotify \n  $stock-nfa \n $stock-unban \n $stock-demo \n $stock-val'
                },
            },
            '📢': {
                backEmoji: '🔙',
                embed: {
                    description: 'Commands: \n $unban \n $nfa \n $spotify \n $nordvpn \n $demo \n $valorant' 
                },
            }, 
            '👍': {
                backEmoji: '🔙',
                embed: {
                    description: 'Commands: \n $meme'
                },
            },
            '😄': {
                backEmoji: '🔙',
                embed: {
                    description: 'Commands: \n $kick \n $purge \n $lockdown \n $unlockdown \n $mute \n $serverinfo \n $ban'
                },
            },
            '💩':{
                backEmoji: '🔙',
                embed: {
                    description: 'Commands: \n $serverinfo \n $userinfo \n $giveaway \n $server \n $invite \n $av \n $uptime \n $poll'
                },
            }
        }
    },
};



exports.run = async (client, message) => {
    const embed = new MessageEmbed()
    .setTitle('Help Menu')
    .setDescription('React below to see the menu of commands to gen.\n\n📥 Help Menu')
const botMessage = await message.reply(embed);
ReactionCollector.menu({ botMessage, user: message.author, pages });
}
module.exports.help = {
  name: 'help'
}

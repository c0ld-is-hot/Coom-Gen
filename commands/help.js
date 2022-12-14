const { ReactionCollector } = require('discord.js-collector')
const { Client, MessageEmbed } = require("discord.js");

const pages = {
    'š„': {
        embed: {
            title: 'Help Menu',
            description: `React below To switch pages to see the commands.\n\nš Stock\n\nš¢ Gen\n\n š Fun\n\n š Mod\n\nš© Util`,
        },
        reactions: ['š', 'š¢', 'š', 'š', 'š©'],
        pages: {
            'š': {
                backEmoji: 'š',
                embed: {
                    description: 'Commands: \n $stock-nordvpn \n $stock-spotify \n  $stock-nfa \n $stock-unban \n $stock-demo \n $stock-val'
                },
            },
            'š¢': {
                backEmoji: 'š',
                embed: {
                    description: 'Commands: \n $unban \n $nfa \n $spotify \n $nordvpn \n $demo \n $valorant' 
                },
            }, 
            'š': {
                backEmoji: 'š',
                embed: {
                    description: 'Commands: \n $meme'
                },
            },
            'š': {
                backEmoji: 'š',
                embed: {
                    description: 'Commands: \n $kick \n $purge \n $lockdown \n $unlockdown \n $mute \n $serverinfo \n $ban'
                },
            },
            'š©':{
                backEmoji: 'š',
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
    .setDescription('React below to see the menu of commands to gen.\n\nš„ Help Menu')
const botMessage = await message.reply(embed);
ReactionCollector.menu({ botMessage, user: message.author, pages });
}
module.exports.help = {
  name: 'help'
}

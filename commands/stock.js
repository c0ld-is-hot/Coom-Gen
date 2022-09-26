const { ReactionCollector } = require('discord.js-collector')
const { Client, MessageEmbed } = require("discord.js");

const pages = {
            '📜': {
                embed: {
                    description: 'Commands: \n $stock-nordvpn \n $stock-spotify \n  $stock-nfa \n $stock-unban \n $stock-demo \n $stock-val'
                }
            },
        };



exports.run = async (client, message) => {
    const embed = new MessageEmbed()
    .setTitle('Stock Menu')
    .setDescription('React below to see the menu of the stock.\n\n📜 Stock menu Menu')
const botMessage = await message.reply(embed);
ReactionCollector.menu({ botMessage, user: message.author, pages });
}
module.exports.help = {
  name: 'help'
}

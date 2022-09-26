const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    const amount = parseInt(args[0]) + 1;
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You dont have the permission to do this command.");
    if (isNaN(amount)) {
        return message.reply('nigga did you put a number?');
    } else if (amount <= 1 || amount > 100) {
        return message.reply('you need to input a number between 1 and 99.');
    }

    message.channel.bulkDelete(amount, true).then(deletedMessages => {
        // Filter the deleted messages with .filter()
        var botMessages = deletedMessages.filter(m => m.author.bot);
        var userPins = deletedMessages.filter(m => m.pinned);
        var userMessages = deletedMessages.filter(m => !m.author.bot);

        const embed = new Discord.MessageEmbed()
            .setTitle("It work man")
            .setColor(0x00AE86)
            .setTimestamp()
            .addField("Bot Messages Purged", botMessages.size, false)
            .addField("User Pins Purged", userPins.size, false)
            .addField("User Messages Purged", userMessages.size, false)
            .addField("Total Messages Purged", deletedMessages.size, false);

        message.channel.send(embed);
    }).catch(err => {
        console.error(err);
        message.channel.send('there was an error trying to purge :Crii:');
    });
};

module.exports.help = {
    name: "purge"
};
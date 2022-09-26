const Discord = require('discord.js');
const fs = require('fs');
const cooldown = new Set();

module.exports.run = async (client, msg, args, config) => {
    if (msg.member.roles.cache.some(role => role.name === 'Premium')) {

    if(cooldown.has(msg.author.id)) {
        msg.reply(`You need to wait ${config.COOLDOWN} minute to use this command again!`)
            .then((m) => {
                msg.delete();

                setTimeout(() => {
                    m.delete();
                }, 5000);
            });
    } else {
        fs.readFile('./accounts/minecraft.txt', 'utf8', function(err, data) {
            if (err) throw err;

            data = data + '';
            var lines = data.split('\n');
            let account = lines[Math.floor(Math.random() * 1)];

            fs.writeFile('./accounts/minecraft.txt', lines.slice(1).join('\n'), function(err) {
                if(err) throw err;
            });
        //    if(lines.length = 1) {
          //      msg.reply("we are out of stock.") 
           // } else {
                let embed = new Discord.MessageEmbed()
                .addField('Coom Gen', `Best`)
                .addField('Nfa',`\n**${account}**`)
                .setColor("#363940")
                .setFooter('@CoomGen 2021')
                .setTimestamp();
    
                msg.author.send(embed);
    
    var xd = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("Sent to your dms")
            .addField('Stock Left', `${lines.length}`)
            .setFooter("CoomGen")
            .setTimestamp()
            .setDescription("I've sent you 1 Nfa Account!")
    
                    
     //       }

msg.reply(xd).then(m => {
                    setTimeout(() => {
                    }, 900000);
                });

	
            cooldown.add(msg.author.id);
            setTimeout(() => {
                cooldown.delete(msg.author.id);
            }, config.COOLDOWN * 60 * 1000);
		});
    }
 } else {
        msg.reply("You dont have premium you retard ")
 }
};

module.exports.help = {
    name: `gen nfa`,
    description: `Sends you a unban Account!`
};
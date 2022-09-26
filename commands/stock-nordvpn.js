const Discord = require('discord.js');
const fs = require('fs');
const cooldown = new Set();

module.exports.run = async (client, msg, args, config) => {

        fs.readFile('./accounts/nordvpn.txt', 'utf8', function(err, data) {
            if (err) throw err;

            data = data + '';
            var lines = data.split('\n');
            let account = lines[Math.floor(Math.random() * 1)];

            fs.writeFile('./accounts/nordvpn.txt', lines.slice(1).join('\n'), function(err) {
                if(err) throw err;
            });


var xd = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("NordVpn Stock")
        .addField('Stock Left', `${lines.length}`)
        .setFooter("CoomGen")

                
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

module.exports.help = {
    name: `stock nordvpn`,
    description: `Stock!`
};
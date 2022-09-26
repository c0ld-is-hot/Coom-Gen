const Discord = require ("discord.js")
const ms = require('ms');

exports.run = async (client, message,args) => {
    const messageArray = message.content.split(" ");
    if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("Fucking retard you dont have admin go kys")
    var item = "";
    var time;
    var winnerCount;
    for (var i = 1; i < args.length; i++) {
      item += (args[i] + " ");
    }
    time = args[0];
    if (!time) {
      return message.channel.send(`Nigga put a time`);
    }
    if (!item) {
      item = "No title"
    }
    var embed = new Discord.MessageEmbed();
    embed.setColor(0x3333ff);
    embed.setTitle("Giveaway!");
    embed.setDescription("**" + item + "**");
    embed.addField(`Duration : `, ms(ms(time), {
      long: true
    }), true);
    embed.setFooter("React to this message with 🎉 to participate !");
    var embedSent = await message.channel.send(embed);
    embedSent.react("🎉");

    setTimeout(async () => {
      try{
        const peopleReactedBot = await embedSent.reactions.cache.get("🎉").users.fetch();
        var peopleReacted = peopleReactedBot.array().filter(u => u.id !== client.user.id);
      }catch(e){
        return message.channel.send(`men error happen sadge **${item}** : `+"`"+e+"`")
      }
      var winner;

      if (peopleReacted.length <= 0) {
        return message.channel.send(`not enough ppl niggas no react? **${item}** :(`);
      } else {
        var index = Math.floor(Math.random() * peopleReacted.length);
        winner = peopleReacted[index];
      }
      if (!winner) {
        message.channel.send(`men error with drawing  **${item}**`);
      } else {
        console.log(`Giveaway ${item} won by ${winner.toString()}`)
        message.channel.send(` **${winner.toString()}** has won the giveaway **${item}**!`);
      }
    }, ms(time));
}
module.exports.help = {
    name: 'giveaway'
  }
  

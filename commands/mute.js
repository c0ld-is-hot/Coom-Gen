module.exports.run = async (client, message, args, config) => {
      
      
      // Variables
      var muteRole = client.member.roles.cache.some(role => role.name == "Retard");
     // var muteChannel = client.channel.guild.get(channel => channel.name.includes("logs"));
      var muteUser = message.mentions.members.first();
      var muteReason = message.content.slice(args.length + 27);
      
      
      // Conditions for muting
      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the permissions"); //the member has higher perms
      if (!muteUser) return message.channel.send("You have to mention a valid member");
      //if (!muteChannel) return message.channel.send("There's no channel called modlogs");
      if (!muteRole) return message.channel.send("There's no role called muted");
      if (!message.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send("I Don't have permissions");
      if (!muteReason) muteReason = "No reason given";
      
      // Embed for details of mute
      var muteEmbed = new Discord.RichEmbed() 
      .setTitle("Mute")
      .addField("Muted user", muteUser)
      .addField("Reason", muteReason)
      .setFooter(`Muted by ${message.author.tag}`)
      .setTimestamp();
      
      //Mute
      muteUser.addRole(muteRole);
      message.channel.send(`${muteUser} has been muted`);
      //muteChannel.send(muteEmbed);
      
    }

  module.exports.help = {
    name: 'mute'
  }

const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = "!";

bot.on("ready", () => {
  console.log("estoy listo!");
  bot.user
    .setActivity("#DigamosleAAdriQueEsLoMejorDelMundo", { type: "STREAMING" })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
  bot.user.setStatus("online")
  .then(console.log)
  .catch(console.error);
});

bot.on("guildMemberAdd", member => {
  const channel = member.guild.channels.find(
    channel => channel.id === "738529769477505106"
  );
  const miembro = new Discord.RichEmbed()
    .addField(
      "BIENVENID@",
      "<@" +
        member.id +
        "> esto es CLASE CON LOS PANAS, necesitamos comprobar tu identidad así que #por-favor-identificate en ese canal, yo soy solo un bot entonces espera a que uno de los moderadores te identifiquen."
    )
    .setColor(0x2f3136)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/716403231705792594/738532236290293810/giphy_3.gif"
    )
var role = member.guild.roles.find("id", "707939297763917866");
  member.addRole(role);
  channel.sendEmbed(miembro);
  });

bot.on("guildMemberRemove", member => {
  const channel = member.guild.channels.find(
    channel => channel.id === "738529769477505106"
  );
  const miembro = new Discord.RichEmbed()
    .addField(
      "SE NOS HA IDO UN ALIADO",
      "<@" +
        member.id +
        "> hasta luego pana :,v."
    )
    .setColor(0x2f3136)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/716403231705792594/738532229109645330/giphy_2.gif"
  
    )
  channel.sendEmbed(miembro);
});

bot.on("message", message => {
  let args = message.content.substring(PREFIX.length).split(" ");
  switch (args[0]) {
    //clear
    case "clear":
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.reply("lo siento mucho, los administradores no me permiten ejecutar este comando por ti.");
      }
      if (!args[1])
        return message.reply(
          "por favor especifica la cantidad de mensajes que deseas borrar..."
        );
      message.channel.bulkDelete(args[1]);
      break;
      
    //fin clear 
      
    case "among":
      message.channel.send("Server para el Among Us: https://discord.gg/cZdYnbU")
      break;
      
    case "updateamong":
      message.channel.send("https://thetecnosanty.com/among-us-para-pc-ultima-version/")
      break;      
 } 

  if(message.content.endsWith("pepe")){
   if(message.author.bot) return;
   message.channel.send("EL PEPE")
}
  
  if(message.content.startsWith("maikol")){
   if(message.author.bot) return;
   message.channel.send("tu **ldita...")
   message.channel.send("tu no halla...")
}
  
  if(message.content.startsWith("un bot po")){
   if(message.author.bot) return;
   message.channel.send("si")
   message.channel.send("un bot po")
}
  
  if(message.content.startsWith("-t")){
   if(message.author.bot) return;
   message.channel.send("T E M A Z O")
}

});
bot.login(process.env.BOT_TOKEN);

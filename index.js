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

bot.on("guildMemberAdd", guildMember => {
  let welcomeRole = guildMember.guild.roles.cache.get("707939297763917866");
  guildMember.roles.add(welcomeRole);
  guildMember.guild.channels.cache.get("738529769477505106").send(`Bienvenidx <@${guildMember.user.id}> esto esto es CLASE CON LOS PANAS, necesitamos comprobar tu identidad así que #por-favor-identificate en ese canal, yo soy solo un bot entonces espera a que uno de los te identifiquen. https://media.discordapp.net/attachments/716403231705792594/738532236290293810/giphy_3.gif`)
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
      
    case "wo789714mo3":
      message.channel.send("@everyone juegmos VALORANT :D https://playvalorant.com/en-us/")
      break;
      
    case "updateamong":
      message.channel.send("https://thetecnosanty.com/among-us-para-pc-ultima-version/")
      break;      
 } 

  if(message.content === ("el pepe")){
   if(message.author.bot) return;
   message.channel.send("EL PEPE")
}
  
  if(message.content === ("maikol")){
   if(message.author.bot) return;
   message.channel.send("tu **ldita...")
   message.channel.send("tu no halla...")
}
 
  if(message.content === ("perro guaton")){
   if(message.author.bot) return;
   message.channel.send("perro guatOn")
   message.channel.send("PERRO GUATON")
   message.channel.send("perro guaton")
   message.channel.send("¿quién es este perro?")
   message.channel.send("ES EL PERRO GUATON")
   message.channel.send("perro guatOn")
   message.channel.send("PERRO GUATON")
}
  
  if(message.content === ("un bot po")){
   if(message.author.bot) return;
   message.channel.send("si")
   message.channel.send("un bot po")
}
  
  if(message.content === ("-t")){
   if(message.author.bot) return;
   message.channel.send("T E M A Z O")
}

  if(message.content.startsWith ("epico")){
   if(message.author.bot) return;
   message.channel.send("si")
}
 
});
bot.login(process.env.BOT_TOKEN);

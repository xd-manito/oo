const Discord = require("discord.js");
const bot = new Discord.Client();

const PREFIX = "b!";

const embed = new Discord.RichEmbed();

bot.on("ready", () => {
  console.log("estoy listo!");
  bot.user
    .setActivity("a CLASE CON LOS PANAS", { type: "WATCHING" })
    .catch(console.error);
});

bot.on("guildMemberAdd", member => {
  const canal = member.guild.channels.find(
    channel => channel.id === "738529769477505106"
  );
  const nuevomiembro = embed
    .addField(
      "BIENVENID@",
      "<@" +
        member.id +
        "> esto es CLASE CON LOS PANAS, necesitamos comprobar tu identidad así que #por-favor-identificate en ese canal, yo soy solo un bot entonces espera a que uno de los moderadores te identifiquen."
    )
    .setColor(0x2f3136)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/716403231705792594/738532236290293810/giphy_3.gif"
    );
var role = member.guild.roles.find("id", "707939297763917866");
  member.addRole(role);
  canal.sendEmbed(nuevomiembro);
  break;
  });

bot.on("guildMemberRemove", member => {
  const canal = member.guild.channels.find(
    channel => channel.id === "738529769477505106"
  );
  const adiosmiembro = embed
    .addField(
      "SE NOS HA IDO UN ALIADO",
      "<@" +
        member.id +
        "> hasta luego pana :,v."
    )
    .setColor(0x2f3136)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/716403231705792594/738532229109645330/giphy_2.gif"
  
    );
  canal.sendEmbed(adiosmiembro);
  break;
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

    case "pan":
      const pan = embed
        .setTitle("MI PAN SUSUSUM")
        .addField(
          "LYRICS:",
          "Mi pan su su sum, su su su, mi pan yakakus, ñam ñam ñam, mi paaaan, su su su su su su..."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/709124080137142334/738518782980653086/giphy.gif"
        )
      message.channel.sendEmbed(pan);
      break;
  }
});
bot.login(process.env.BOT_TOKEN);

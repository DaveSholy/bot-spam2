const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("568365914190381056")
setInterval(function() {
channel.send(` Made From  before Dave`);
}, 10)
})

client.login(process.env.BOT_TOKEN);

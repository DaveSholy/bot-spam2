const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("566612229894438915")
setInterval(function() {
channel.send(` Shanks Shanks Shanks Shanks`);
}, 30)
})

client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");

client.on("ready", () => {
let channel =     client.channels.get("572109782614278154")
setInterval(function() {
channel.send(` Made From  before Dave s ض س سث ض ض س`);
}, 90)
})
client.login(process.env.BOT_TOKEN);

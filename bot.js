const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("593104583245693008")
setInterval(function() {
channel.send(`yousef yousef yousef yousef yousef yousef yousef yousef yousef yousef yousef yousef yousef yousef `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
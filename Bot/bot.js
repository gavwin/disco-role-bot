"use strict";

const Discord = require('discord.js');
var config = require('./config.json');
const disco = new Discord.Client();
const prefix = config.prefix;

disco.on("ready", function() {
    disco.user.setGame(`Disco Roles! Created by i am toast`);
  console.log("Disco role bot online! Created by i am toast.");
});

disco.on("message", message => {

  function discoRole() {
    let role = message.guild.roles.find("name", config.roleToDisco);
    var random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    role.edit({color: random}).catch(e => {
      return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
    });
  }

  if(message.content.startsWith(prefix + "startdisco")) {
    if(message.author.id === config.allowedUser || message.author.id === config.allowedUser2 || message.author.id === config.allowedUser3) {
    setInterval(function(){ discoRole(); }, config.ms);
    message.channel.sendMessage("```css\nDiscoing...```");
  } else {
    message.reply(`You do not have permission to disco. If you have downloaded this bot off of github please go to the config.json and add your user ID to the "allowedUsers" value.`);
  }
} else

if(message.content.startsWith(prefix + "stopdisco")) {
  if(message.author.id === config.allowedUser || message.author.id === config.allowedUser2 || message.author.id === config.allowedUser3) {
  message.channel.sendMessage("I've stopped discoing.");
  setTimeout(function() { console.log(process.exit(0)); }, 300);
} else {
  message.reply(`You do not have permission to disco. If you have downloaded this bot off of github please go to the config.json and add your user ID to the "allowedUsers" value.`);
  }
}

});

disco.login(config.token);

"use strict";

const Discord = require('discord.js');
const config = require('./config.json');
const disco = new Discord.Client();
const prefix = config.prefix;
const allowedUsers = config.allowedUsers;

disco.on("ready", function() {
    disco.user.setGame(`Disco Roles! Created by i am toast#1213`);
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
    if(allowedUsers.includes(message.author.id)) {
    setInterval(() => { discoRole(); }, config.ms);
    message.channel.sendMessage("```css\nDiscoing...```");
    message.channel.sendMessage("Please make sure you read the README, you could get IP banned from discord because of ratelimits.");
  } else {
    message.reply(`You do not have permission to disco. If you have downloaded this bot off of github please go to the config.json and add your user ID to the "allowedUsers" value.`);
  }
} else

if(message.content.startsWith(prefix + "stopdisco")) {
  if(allowedUsers.includes(message.author.id)) {
  message.channel.sendMessage("I've stopped discoing.");
  setTimeout(() => { console.log(process.exit(0)); }, 300);
} else {
  message.reply(`You do not have permission to disco. If you have downloaded this bot off of github please go to the config.json and add your user ID to the "allowedUsers" value.`);
  }
}

});

disco.login(config.token);

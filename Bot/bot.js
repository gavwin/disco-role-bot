"use strict";

const Discord = require('discord.js');
const randomColor = require('randomcolor');
const config = require('./bot/config.json');
const disco = new Discord.Client();
const prefix = config.prefix;

disco.on("ready", function() {
    disco.user.setGame(`Disco Roles! Created by i am toast`);
  console.log("Disco role bot online! Created by i am toast.");
});

disco.on("message", message => {

  if(message.content.startsWith(prefix + "startdisco")) {
    if(message.author.id === '193378071141810176' | message.author.id === '144228394324721665') {
    let ms = message.content.replace(prefix + "disco", "");
    let msInt = parseInt(ms);
    setInterval(function(){ discoRole(); }, 420);
    message.channel.sendMessage("```css\nDiscoing...```");
  } else {
    message.reply(`You can't disco bro.`);
  }
}

if(message.content.startsWith(prefix + "stopdisco")) {
  if(message.author.id === '193378071141810176' | message.author.id === '144228394324721665') {
  message.channel.sendMessage("Stopping discoing...");
  setTimeout(function() { console.log(process.exit(0)); }, 300);
} else {
  message.reply(`You can't disco bro.`);
  }
}

});

function discoRole() {
  let role = message.guild.roles.find("name", "Toasty");
  var random = randomColor();
  role.edit({color: random});
}

disco.login(config.token);

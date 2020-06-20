//Set-Location -Path C:\Users\irogo\Desktop\pizzaJoe

const Discord = require('discord.js');
const client = new Discord.Client();
const prefixes = ["p!","joe"];

function catchError (error, message) {
	message.channel.send(`Be more specific, I'm to cool to solve that :sunglasses:!`);
}

client.once('ready', () => {
	console.log('Ready!');
		client.user.setStatus('idle');
		client.user.setActivity('p!help | version 1.0.2', {
				type: 'PLAYING'
		});
});

client.on('message', message => {
  if(message.member.hasPermission(['SEND_MESSAGES', 'VIEW_CHANNEL'])) {
		if(message.author.bot) return;

		let thereIsPrefix = false;
		// For each element of prefixes
		for (i=0; i<prefixes.length; i++){
    // if message starts with prefix
    // Note that here is not 《!》 unlinke before
    if (message.content.toLowerCase().startsWith(prefixes[i])) {
    thereIsPrefix = true;
    // remove prefix
    message.content = message.content.slice(0 + prefixes[i].length );

    // we did our job, so we exit loop
    break;
    }
}
		function pizzaRole() {
				let botRole = message.guild.role.find(role => role.name === "Pizza Joe");
				botRole.edit({color: "#a9c52f"});
		}

			try {

			  	//console.log(message.content);
			    if(message.content.startsWith(`help`)) {
						const helpEmbed = new Discord.MessageEmbed()
							.setColor('#fe9801')
							.setTitle('Pizza Joe commands list')
							.setURL('https://www.youtube.com/watch?v=lpvT-Fciu-4')
							.setDescription("**HERE ARE THE AVAILABLE COMMANDS**\n Pizza Joe will answer to both `p!` and `Joe`\n \n `p!help` - display commands list\n `p!pizza?` - Pizza Joe will answer\n `p!morning @user` - Pizza Joe will say Morning\n`p!night @user` - Pizza Joe will say Good Night\n `p!pizza @user` - Bake someone a pizza (requires @user)\n `p!joe` - Ping Pizza Joe\n `p!love` - Pizza Joe will love you back\n `Joe I want pizza` - Pizza joe will answer\n `Joe you're a dummy` - Pizza Joe will answer back\n \n **USEFUL LINKS**\n [INVITE ME](https://discord.com/oauth2/authorize?client_id=723293726515921027&permissions=412736&scope=bot) | [SUPPORT](https://discord.com/invite/tEaZ2c7)")
							.setFooter(`Pizza Joe is the best!`)
			      message.channel.send(helpEmbed);
			    }
					else if(message.content.startsWith(`pizza?`)) {
			      message.channel.send("Always Pizza! https://gph.is/2ferErB")
			    }
					else if(message.content.startsWith(`morning`)){
			      const taggedUser = message.mentions.users.first();
			      	message.channel.send(`Good Morning ${taggedUser.username}! You should have some :pizza: ***pizza***! https://giphy.com/gifs/3orieNTh5JZFPYZXR6 `)
			    }
					else if(message.content.startsWith(`night`)){
			      const taggedUser = message.mentions.users.first();
			      	message.channel.send(`Good Night ${taggedUser.username}! May your dreams be full of :pizza: ***pizza***! https://gph.is/2ILP1Gd `)
			    }
					else if(message.content.startsWith(`pizza`)){
			      const taggedUser = message.mentions.users.first();
			      	message.channel.send(`You baked ${taggedUser.username} a :pizza: pizza. Enjoy!`)
			    }
					else if(message.content.startsWith(`joe`)) {
						message.channel.send(`Stop pinging Pizza Joe you :poop:!`)
					}
					else if(message.content.startsWith(`love`)) {
						message.channel.send(`Here you go sugar :heart:! https://gph.is/g/ZdxNGvP`)
					}
					else if(message.content.startsWith(` you're a dummy`)) {
						message.channel.send(`No, U! https://i.imgur.com/mUBjN1a.jpg`)
					}
					else if(message.content.startsWith(` I want pizza`)) {
						message.channel.send(`Me too! https://gph.is/19iU3Rq`)
					}


			} catch (error) {
						catchError(error, message);
											}
	}

});

client.login(process.env.TOKEN);

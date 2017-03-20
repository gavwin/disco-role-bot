# disco-role-bot
This is a downloadable version of my "disco-role" discord bot. It changes the color of a certain role either every set amount of milliseconds.

# **RUN THIS BOT AT YOUR OWN RISK!!!**
### **As you may know, there are ratelimits to about everything on discord. Therefor, you COULD GET BANNED FOR RUNNING THE BOT BECAUSE THE DISCORD API MAY NOT LIKE THE CONSTANT ROLE COLOR CHANGE.**
### I am **NOT** responsible for what happens after you run this bot.


## Steps to use bot:
#### 1. Install the latest version of Node.js on your computer at https://nodejs.org. To check that it is installed open cmd prompt (if on windows), or open terminal (if on linux or mac) and run the command, ```node -v```. If you get a response simmilar to, ```v7.4.0```, you are good to go.

#### 2. Install discord.js. Open cmd prompt (if on Windows), or open terminal (if on linux or mac) and run the command, ```npm install --save discord.js```. After installing it check if it has been installed by running the command, ```npm list discord.js -v```. If you get a response simmilar to, ```3.10.10```, you are good to go.

#### 3. Make your bot application. [Here](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) is a great guide on how to. It's pretty simple.

#### 4. Download the Bot folder [here](https://github.com/gavwin/disco-role-bot/archive/master.zip) and extract the zip file to your **desktop**.

#### 5. Go to the config.json file and configure the bot so it works for your server.
##### The file looks like this: 

```
{
  "token" : "Bot token goes here",
  "ms" : 1500,
  "roleToDisco" : "Role to disco goes here",
  "prefix" : "d!",
  "allowedUser" : "your user id goes here",
  "allowedUser2" : "someone else's user id who should be able to use the bot goes here",
  "allowedUser3" : "someone else's user id who should be able to use the bot goes here"
}
```

##### For "token" replace "Bot token goes here" with your bot token from the bot application you created.
##### For "ms" either keep it at "1500" or change it to whatever speed you like. If you set it to something larger than a minute, you won't have to worry about the rate limit issues.
##### For "roleToDisco" replace it with the role you wawnt to disco.
##### For "prefix" either change it to whatever you want or keep it.
##### For "allowedUser" put your discord user ID.
##### For "allowedUser2" and "allowedUser3" replace it with the user id of anyone else besides you that should be able to start and stop the disco role.

#### 6. Run the bot. Open cmd prompt (if on windows), or open terminal (if on linux or mac) and run the command, ```node Desktop/Bot```. It should then say ```Disco role bot online! Created by i am toast.```. If it doesn't say this, try running, ```cd ~``` then run, ```cd Desktop/Bot```, then run, ```node bot.js```. If that does not work, then locate where your Bot folder is and navigate to that folder in terminal / cmd prompt.

#### 7. Go to discord and start the discoing! Just type ```d!startdisco``` to start the discoing and ```d!stopdisco``` to stop the discoing!

## If you have any questions or something went wrong, find me on discord with the username: i am toast#1213 or join:
[![](https://discordapp.com/api/guilds/208674478773895168/embed.png?style=banner2)](https://discord.me/toasty)

### A few 100% necessary badges:
![](https://forthebadge.com/images/badges/built-with-swag.svg)
![](https://forthebadge.com/images/badges/kinda-sfw.svg)
![](https://forthebadge.com/images/badges/does-not-contain-treenuts.svg)

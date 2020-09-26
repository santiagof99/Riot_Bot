const Discord = require('discord.js');

const token = '*';

const client = new Discord.Client();

client.on('message',(msg) => {
    if (msg.content.split(" ").length === 2){

        var [command,user] = msg.content.split(" ");

        switch(command){
            case "!rank":
                msg.channel.send(`You searched for ${user}s rank`);
                break;
            default:
                console.log('default');
        }
    }
});

//lets the host and server users that the bot is now live and ready 
client.on('ready',() => {
    console.log('Bot is now connected');

    client.channels.find(x => x.name === 'general').send('Hello Riot Bot is Live!!');
});

client.login(token);
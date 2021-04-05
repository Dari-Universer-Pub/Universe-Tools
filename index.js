const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "!";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.on("guildMemberAdd", member => {
    console.log("Un nouveau membre est arrivé");
    member.guild.channels.cache.find(channel => channel.id === "804006373783502949").send(member.displayName + "est arrivé !");
});

Client.on("guildMemberRemove", member => {
    console.log("Un nouveau membre nous a quitté");
    member.guild.channels.cache.find(channel => channel.id === "815600325024284672").send(member.displayName + "nous a quitté !");
});

Client.on("messageReactionAdd", (reaction, user) => {
    console.log("reaction ajouté");
});

Client.on("messageReactionRemove", (reaction, user) => {
    console.log("reaction retiré");
});  
    
Client.on("message", message => {
    if(message.author.bot) return; 
    if(message.channel.type == "dm") return;
    
    message.react("🙌");
    message.react("820991309753876511")
    
    if(message.content == prefix + "ping"){
        message.channel.send("pong");
    }

    if(message.content == prefix + "stat"){
        message.channel.send(message.author.username + " qui a pour indentifiant : " + message.author.id + " a posté un message");
    }
});


Client.login(process.env.BOT_TOKEN)

onst Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "!";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.on("message", message => {
    if(message.author.bot) return; 
    
    
    if(message.content == prefix + "ping"){
        message.channel.send("pong");
    }    

    if(message.content == prefix + "stat"){
        message.channel.send(message.author.username + " qui a pour indentifiant : " + message.author.id + " a posté un message");
    }        
});   


Client.login()

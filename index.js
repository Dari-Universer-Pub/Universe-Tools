const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "U!";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.on("message", message => {
    if(message.author.bot) return; 
    if(message.channel.type == "dm") return;
    
    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();
        
             if(mention == undefined){
                 message.reply("Membre non ou mal mentionné.");
             }
             else {
                 if(mention.bannable){
                     mention.ban();
                     message.channel.send(mention.displayName + " a été banni avec succès");
                 }
                 else {
                     message.reply("Impossible de bannir ce membre.");
                 }
             }
         }
         else if(message.content.startsWith(prefix + "kick")){
             let mention = message.mentions.members.first();
             
             if(mention = undefined){
                 message.reply("Membre non ou mal mentionné.");
             } 
             else {
                 if(mention.kickable){
                     mention.kick();
                     message.channel.send(mention.displayName + " a été kick avec succès.");
                 }   
                 else {
                     message.reply("Impossible de kick ce membre.");
                 } 
             } 
         }  
     }  
}); 

            
    


Client.login(process.env.BOT_TOKEN)

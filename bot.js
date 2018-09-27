const Discord = require('discord.js');
const client = new Discord.Client();


console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
 console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
});
client.on('ready', () => {
    client.user.setStatus('online');
});




client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**شكرا ${message.guild.owner} علي ثقتك بفريق NoobBot !
    Thanks ${message.guild.owner} for trust HOLDER Bot Team! **`)
        guild.owner.send(embed)
  });





  client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
   
   **
  
   
           『General Commands | اوامر عامه』
❖$avatar @name | صوره الشخص

   **
   `)
   message.author.sendEmbed(embed)
   
   }
   });  
   
   
     client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
   
   **
     
              『Admins Commands | اوامر اداريه』
❖$ban @name [reason] | اعطاء العضو باند

**
   `)
   message.author.sendEmbed(embed)
   
   }
   });  
   
   
   
        client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
		 **
   
   
              『Games Commands | اوامر الالعاب』

**
   `)
   message.author.sendEmbed(embed)
   
   }
   });  
   
   
              client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
		 **
   
           『Music Commands  | اوامر الاغاني』
         
$play | لتشغيل اغنية')
$join | دخول رومك الصوتي')
$disconnect | الخروج من رومك الصوتي')
$skip | تخطي الأغنية')
$pause | ايقاف الاغنية مؤقتا')
$resume | تكملة الاغنية')
$queue |اظهار قائمة التشغيل
$np | اظهار الاغنية اللي انت مشغلها حاليا


   
   **
   `)
   message.author.sendEmbed(embed)
   
   }
   });  
   
   
           client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
		 **
   
           『Bot Info | معلومات البوت』
         
اسم البوت :
HONER BOT
تاق البوت :
#3168
برفكس البوت :
++
رابط السبورت :
https://discord.gg/aF4tndR
ايدي البوت :
471464656242737183
راعي البوت :
! MHSTR 4K#0202 
**
   `)
   message.author.sendEmbed(embed)
   
   }
   });  
   
   




   
   client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**شكرا ${message.guild.owner} علي ثقتك بفريق NoobBot !
    Thanks ${message.guild.owner} for trust NoobBot Team! **`)
        guild.owner.send(embed)
  });

    
client.login(process.env.BOT_TOKEN);

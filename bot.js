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
    client.user.setActivity("PUBG",{type: 'PLAYING'});

});

client.on('ready', async() => {
var server = "431397251445817345"; // ايدي السررفر
var channel = "495302676515389453";//ايدي الروم
    setInterval(()=>{
     client.guilds.get(server).channels.get(channel).send('**مهستر مهستر مهستر مهمهستر مهستر مهسترمهستر مهستر مهستر مهمهستر مهستر مهستر  مهستر مهستر مهستر مهمهستر مهستر مهستر مهستر مهستر مهستر مهمهستر مهستر مهستر**')
    },305);
})



client.on('ready', async() => {
var server = "431397251445817345"; // ايدي السررفر
var channel = "495302676515389453";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})

client.login(process.env.BOT_TOKEN);

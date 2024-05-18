const config = require("../config.js");
const { ActivityType  } = require("discord.js")
module.exports = async (client) => {


if (config.mongodbURL || process.env.MONGO) {

const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const rest = new REST({ version: "10" }).setToken(config.TOKEN || process.env.TOKEN);
(async () => {
try {
await rest.put(Routes.applicationCommands(client.user.id), {
body: await client.commands,
});
console.log('\x1b[36m%s\x1b[0m', '|    Komutlar Yüklendi!')
} catch (err) {
console.log('\x1b[36m%s\x1b[0m', '|    Komutlar Dikkati Dağıldı!');
}
})();

console.log('\x1b[32m%s\x1b[0m', `|    Bot Giriş Yapıldı ${client.user.username}`);

setInterval(() => client.user.setActivity({ 
  name: `WraithsDev Müzik Botu`, 
  type: ActivityType.Streaming }), 10000);
  client.user.setStatus('idle');
client.errorLog = config.errorLog
} else {
console.log('\x1b[36m%s\x1b[0m', `|    MongoDB Hatalı!`)
}
console.log('\x1b[36m%s\x1b[0m', `|    Durum Bilgisi Ayarlandı!`);


if(client.config.voteManager.status === true && client.config.voteManager.api_key){
const { AutoPoster } = require('topgg-autoposter')
const ap = AutoPoster(client.config.voteManager.api_key, client)
ap.on('posted', () => {
})
}

}

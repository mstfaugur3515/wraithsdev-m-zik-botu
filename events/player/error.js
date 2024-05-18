module.exports = async (client, textChannel, e) => {
if (textChannel){
   return textChannel?.send(`**Bir hatayla karşılaşıldı:** ${e.toString().slice(0, 1974)}`)
}
}
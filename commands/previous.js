const db = require("../mongoDB");
module.exports = {
  name: "previous",
  description: "Önceki parçayı çalar.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    try {
      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) return interaction.reply({ content: `⚠️ Müzik çalmıyor!!`, ephemeral: true }).catch(e => { })
      try {
        let song = await queue.previous()
        interaction.reply({ content: `**Bakın, geçmişin büyüleyici melodisi!!**` }).catch(e => { })
      } catch (e) {
        return interaction.reply({ content: `❌ Önceki parça yok!!`, ephemeral: true }).catch(e => { })
      }
    } catch (e) {
    console.error(e); 
  }
  },
};

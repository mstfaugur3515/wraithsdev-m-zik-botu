const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "clear",
  description: "Müzik kuyruğunu temizler.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    const queue = client.player.getQueue(interaction.guild.id);
    
    try {
      if (!queue || !queue.playing) {
        return interaction.reply({ content: '⚠️ Müzik çalmıyor!!', ephemeral: true });
      }

      if (!queue.songs[0]) {
        return interaction.reply({ content: '❌ Sıra boş!!', ephemeral: true });
      }

      await queue.stop(interaction.guild.id);

      const embed = new EmbedBuilder()
        .setColor('#3498db')
        .setAuthor({
          name: 'Temizlenmiş Liste',
          iconURL: 'https://cdn.discordapp.com/attachments/1156866389819281418/1157314241393598585/4618-no-slides.png?ex=65182861&is=6516d6e1&hm=dac8fed5a18e1574485e833d4c017591c50f59d161e1bde7fed5f6a92543f951&',
          url: 'https://discord.gg/vcs'
        })
        .setDescription('**Sıra temizlendi! Yeni bir müzikal yolculuğa hazır olun.**')
       

      interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e); 
    }
  },
};
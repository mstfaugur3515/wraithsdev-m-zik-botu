const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "Bot ve komutlar hakkında bilgi alın.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Müzik Komutları**')
        .addFields(
          { name: '🎹 Play', value: 'Müziği Oynatmak için komutu kullan' },
          { name: '⏹️ Stop', value: 'Oynatılan müziği durdurur' },
          { name: '📊 Queue', value: 'Oynatma Listesini görüntüle' },
          { name: '⏭️ Skip', value: 'Sıradaki Müziğe geç' },
          { name: '⏸️ Pause', value: 'Oynatılan müziği durdur bir süre' },
          { name: '▶️ Resume', value: 'Duran Müziği Devam ettir' },
          { name: '🔁 Loop', value: 'Şarkı Tekrar Aç/Kapat' },
          { name: '🔄 Autoplay', value: 'Rastgele müzikleri çalması için sürekli bu komutu kullan' },
          { name: '⏮️ Previous', value: 'Sıradaki önceki şarkıyı çal' },
          { name: '📃 playlist', value: 'çalma listelerini yönet' }
        )

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Temel Komutlar**')
        .addFields(
          { name: '🏓 Ping', value: "Botun gecikmesini kontrol edin" },
          { name: '🗑️ Clear', value: 'Bu sunucunun şarkı kuyruğunu temizle' },
          { name: '⏱️ Time', value: 'Geçerli şarkı çalma süresini görüntüleyin' },
           { name: '🎵 Now Playing', value: 'Şu anda çalınan şarkının bilgilerini görüntüle' },
          { name: '🔊 Volume', value: 'Müzik ses seviyesini ayarlayın [yüksek ses seviyesinde duymak risklidir]' },
        )
      const button1 = new ButtonBuilder()
        .setLabel('YouTube Kanalım')
        .setURL('https://www.youtube.com/@WraithsDev')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('Discord Sunucumuz')
        .setURL('https://discord.gg/vsc')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};
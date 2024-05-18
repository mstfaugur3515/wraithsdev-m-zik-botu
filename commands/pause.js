const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

async function pauseLogic(client, interaction) {
  const queue = client.player.getQueue(interaction.guild.id);

  try {
    if (!queue || !queue.playing) {
      return interaction.reply({ content: '⚠️ Müzik çalmıyor!!', ephemeral: true });
    }

    const success = queue.pause();

    const embed = new EmbedBuilder()
      .setColor('#7645fe') 
      .setAuthor({
        name: 'Şarkı Duraklatıldı',
        iconURL: 'https://cdn.discordapp.com/attachments/1156866389819281418/1157296313013117049/8061-purple-pause-icon.png?ex=651817ae&is=6516c62e&hm=67440a1134550b844596c9fab9d8b66de8b5215b2750572ced352eed6b5693b9&',
        url: 'https://discord.gg/vsc'
      })
      .setDescription(success ? '**Müzik bir anlığına duraklatıldı!!**' : '❌ Komut Hatası: Şarkı duraklatılamıyor');

    return interaction.reply({ embeds: [embed] });
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  name: "pause",
  description: "Şu anda çalan müziği çalmayı durdurur.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    await pauseLogic(client, interaction);
  },
};
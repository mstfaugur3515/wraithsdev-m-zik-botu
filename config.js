module.exports = {
  TOKEN: "BOT-TOKEN",
  ownerID: ["KENDİ-IDNI-GİR", ""],
  botInvite: "",
  supportServer: "",
  mongodbURL: "MONGO-URL-GİR",
  status: 'WraithsDev Müzik Botu',
  commandsDir: './commands',
  language: "tr",
  embedColor: "#ff0000",
  errorLog: "LOG-KANAL-GİR",


  sponsor: {
    status: true,
    url: "https://www.youtube.com/@WraithsDev",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "loop", "nowplaying", "pause", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  opt: {
    DJ: {
      commands: ['back', 'clear','loop', 'pause', 'resume', 'skip', 'stop', 'volume']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },

    },

    maxVol: 250,

  }
}

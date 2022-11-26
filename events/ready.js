const { prefix } = require('../index')
const client = require('../index')
const { version: discordjsVersion } = require('discord.js');

client.on('ready', async () => {
  client.user.setStatus('online');
  console.log(`${client.user.username} ✅`)
  client.user.setActivity(`${prefix}help | dsc.gg/development.world`)

})
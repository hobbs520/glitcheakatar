const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Literya 》 Gerekli kurulum tamamlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Literya 》 ${client.user.tag} olarak giriş sağlandı...`);
  client.user.setActivity(`Literya RP`, {type: 4})


};
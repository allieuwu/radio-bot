const { MessageEmbed } = require("discord.js");

const bot_author = { name: 'radio-bot', iconURL: 'https://natashaskitchen.com/wp-content/uploads/2021/08/Grilled-Cheese-Sandwich-SQ.jpg', url: 'https://github.com/allieuwu/radio-bot' };

const embed_epam = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Electron Proton Alpha Monitor Graph')
    .setURL('https://services.swpc.noaa.gov/images/ace-epam-24-hour.gif')
    .setAuthor(bot_author)
    .setImage('https://services.swpc.noaa.gov/images/ace-epam-24-hour.gif')
    .setTimestamp()
    .setFooter({ text: `Image pulled from NOAA site`, iconURL: 'https://natashaskitchen.com/wp-content/uploads/2021/08/Grilled-Cheese-Sandwich-SQ.jpg' });

const embed_euvi = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('EUVI Heliographic')
    .setURL('https://stereo-ssc.nascom.nasa.gov/beacon/euvi_195_heliographic.gif')
    .setAuthor(bot_author)
    .setImage('https://stereo-ssc.nascom.nasa.gov/beacon/euvi_195_heliographic.gif')
    .setTimestamp()
    .setFooter({ text: `Image pulled from NASA site`, iconURL: 'https://natashaskitchen.com/wp-content/uploads/2021/08/Grilled-Cheese-Sandwich-SQ.jpg' });

const embed_sunspot = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Sunspot Map')
    .setURL('https://www.spaceweatherlive.com/images/SDO/SDO_HMIIF_1024.jpg')
    .setAuthor(bot_author)
    .setImage('https://www.spaceweatherlive.com/images/SDO/SDO_HMIIF_1024.jpg')
    .setTimestamp()
    .setFooter({ text: `Image pulled from spaceweatherlive`, iconURL: 'https://natashaskitchen.com/wp-content/uploads/2021/08/Grilled-Cheese-Sandwich-SQ.jpg' });

const embed_flare = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Solar Flares')
    .setURL('https://sdo.gsfc.nasa.gov/assets/img/latest/latest_1024_0131.jpg')
    .setAuthor(bot_author)
    .setImage('https://sdo.gsfc.nasa.gov/assets/img/latest/latest_1024_0131.jpg')
    .setTimestamp()
    .setFooter({ text: `Image pulled from NASA site`, iconURL: 'https://natashaskitchen.com/wp-content/uploads/2021/08/Grilled-Cheese-Sandwich-SQ.jpg' });

const embed_drap = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('D-Region Absorption Predictions')
    .setURL('https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png')
    .setAuthor(bot_author)
    .setImage('https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png')
    .setTimestamp()
    .setFooter({ text: `Image pulled from NOAA site`, iconURL: 'https://natashaskitchen.com/wp-content/uploads/2021/08/Grilled-Cheese-Sandwich-SQ.jpg' });


module.exports = { embed_epam, embed_euvi, embed_sunspot, embed_flare, embed_drap };
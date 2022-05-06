const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const { token } = require('./config.json');
const { embed_epam, embed_euvi, embed_sunspot, embed_flare, embed_drap } = require('./src/embeds.js')

client.on('ready', () => {
    console.log(`Logged in as user ${client.name}`)
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'epam') {
        await interaction.reply({ embeds: [embed_epam] });
    };

    if (interaction.commandName === 'euvi') {
        await interaction.reply({ embeds: [embed_euvi] });
    };

    if (interaction.commandName === 'sunspot') {
        await interaction.reply({ embeds: [embed_sunspot] });
    };

    if (interaction.commandName === 'flare') {
        await interaction.reply({ embeds: [embed_flare] });
    };

    if (interaction.commandName === 'drap') {
        await interaction.reply({ embeds: [embed_drap] });
    }
});

client.login(token);


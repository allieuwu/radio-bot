const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token, CLIENT_ID, GUILD_ID } = require('./config.json');

const commands = [
    {
        name: 'epam',
        description: 'Sends Current NOAA EPAM Image'
    },
    {
        name: 'euvi',
        description: 'Sends Current NASA EUVI Image'
    },
    {
        name: 'sunspot',
        description: 'Sends Current Space Weather Live Sunspot Map Image'
    },
    {
        name: 'flare',
        description: 'Sends Current NASA Solar Flare Image'
    },
    {
        name: 'drap',
        description: 'Sends Current NOAA DRAP Image'
    },

];

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
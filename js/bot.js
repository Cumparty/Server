const Discord = require('discord.js');

const client = new Discord.Client();

client.login("OTkxNzYxNzI0Nzg3MTQ2ODQy.GWfpQi.93_Eo8gh8JnDStf5gZeOYq3vCaoCrU6Efn5HdQ");

client.on('ready', () => {
    setChannelName();
    setInterval(setChannelName, 30 * 1000);
});

async function setChannelName() {
    const channel = client.guilds.array().find((guild) => guild.id === 925060012529819649);

    if (!channel) return;

    const responseMembers = await channel.fetchMembers();

    const notOfflineMembersLength = responseMembers.members.filter(
        (member) => !member.user.bot && member.user.presence.status !== 'offline'
    ).size;
}

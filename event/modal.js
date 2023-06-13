const discord = require('discord.js');

module.exports = {
    name: 'modal',
    execute: async (inter, client) => {
        if (inter.type === discord.InteractionType.ApplicationCommand) {
            const command = client.commands.get(inter.commandName);
            if (command) command.execute(inter, client);
        } else if (inter.isModalSubmit()) {

            if (inter.customId === 'mymodalso') {

                let resposta1 = inter.fields.getTextInputValue(so1)
                let resposta2 = inter.fields.getTextInputValue(so2)
                let resposta3 = inter.fields.getTextInputValue(so3)
                let resposta4 = inter.fields.getTextInputValue(so4)
                const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1117983476222799892/FUMlmoLa-ljFby4jRKQ8zVjDzLQiWJFTmkO27nWYEsoiSoi_z0r1QoEDQCoMScQ0wKHt' });

                if (!resposta1) resposta1 = 'Teste'
                if (!resposta2) resposta2 = 'Teste'
                if (!resposta3) resposta3 = 'Teste'
                if (!resposta4) resposta4 = 'Teste'

                let diario = new discord.EmbedBuilder()
                    .setColor('Green')
                    .setDescription(`O usuario ${inter.user} enviou o relatorio.`)
                    .addFields(
                        {
                            name: 'Pergunta 1:',
                            value: `*Resposta 1:* \`${so1}`,
                            inline: false
                        },
                        {
                            name: 'Pergunta 2:',
                            value: `*Resposta 2:* \`${so2}`,
                            inline: false
                        },
                        {
                            name: 'Pergunta 3:',
                            value: `*Resposta 3:* \`${so3}`,
                            inline: false
                        },
                        {
                            name: 'Pergunta 4:',
                            value: `*Resposta 4:* \`${so4}`,
                            inline: false
                        },
                    );

                inter.reply({ content: `${inter.user.username} seu relatorio foi enviado.`, ephemeral: true })
                webhookClient.send({ embeds: [diario] });

            }
        }

    },
};
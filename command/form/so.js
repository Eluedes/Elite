const { EmbedBuilder, PermissionsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js");

module.exports = {
    name: 'so',
    type: 1,
    description: 'Relatório de Controle de Ponto Diário - Setor Operacional',

    execute: (inter, client) => {

        if (!inter.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
            
            inter.reply({ content: 'Você não tem permissão para usar esse comando!', ephemeral: true });
            return;
        }

        let embedso = new EmbedBuilder()

            .setColor('#00fee9')
            .setTitle('Relatório de Controle de Ponto Diário')
            .setDescription('Clique no botao abaixo para preencher o seu relatório')

        let botaoso = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId('formso')
                .setLabel('Clique Aqui!')
                .setStyle(ButtonStyle.Primary)
                .setEmoji('📋')
                .setDisabled(false)
            );

        inter.reply({ embeds: [embedso], components: [botaoso]})


    }
}
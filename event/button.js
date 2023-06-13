const discord = require('discord.js');

module.exports = {
    name: 'button',
    execute: async (inter, client) => {
        if (inter.type === discord.InteractionType.ApplicationCommand) {
            const command = client.commands.get(inter.commandName);
            if (command) command.execute(inter, client); 
        } else if (inter.isButton()) {

                if (inter.customId === 'botao1') {
                    if (inter.member.roles.cache.has(cargo1.id)) {
                        inter.member.roles.remove(cargo1);
                        inter.reply({ content: `Cargo ${cargo1.name} foi retirado!`, ephemeral: true });
                    } else {
                        inter.member.roles.add(cargo1);
                        inter.reply({ content: `Cargo ${cargo1.name} foi adicionado!`, ephemeral: true });
                    }
                }
            

            if (inter.customId === 'botao2') {
                if (inter.member.roles.cache.has(cargo2.id)) {
                    inter.member.roles.remove(cargo2);
                    inter.reply({ content: `Cargo ${cargo2.name} foi retirado!`, ephemeral: true });
                } else {
                    inter.member.roles.add(cargo2);
                    inter.reply({ content: `Cargo ${cargo2.name} foi adicionado!`, ephemeral: true });
                }
            }

            if (inter.customId === 'botao3') {
                if (inter.member.roles.cache.has(cargo3.id)) {
                    inter.member.roles.remove(cargo3);
                    inter.reply({ content: `Cargo ${cargo3.name} foi retirado!`, ephemeral: true });
                } else {
                    inter.member.roles.add(cargo3);
                    inter.reply({ content: `Cargo ${cargo3.name} foi adicionado!`, ephemeral: true });
                }
            }


            if (inter.customId === 'botao4') {
                if (member.roles.cache.has(cargo4.id)) {
                    inter.member.roles.remove(cargo4);
                    inter.reply({ content: `Cargo ${cargo4.name} foi retirado!`, ephemeral: true });
                } else {
                    inter.member.roles.add(cargo4);
                    inter.reply({ content: `Cargo ${cargo4.name} foi adicionado!`, ephemeral: true });
                }
            }

            if (inter.customId === 'formso') {


                const modalso = new discord.ModalBuilder()
                    .setCustomId('mymodalso')
                    .setTitle('Relatório de Controle de Ponto Diário');

                const so1 = new TextInputBuilder()
                    .setCustomId('ref')
                    .setLabel("Qual o dia Referente?")
                    .setMaxLength(67)
                    .setMinLength(37)
                    .setPlaceholder('Ex:. Referente ao dia 00.00.2023 (Domingo)')
                    .setRequired(true)
                    .setStyle(discord.TextInputStyle.Short);

                const so2 = new TextInputBuilder()
                    .setCustomId('quantidade')
                    .setLabel("Quantos colaboradores estiveram presente em sede?")
                    .setMaxLength(90)
                    .setMinLength(37)
                    .setPlaceholder('Ex:. Ontem tivemos um total de 10 colaboradores presentes em sede.')
                    .setRequired(true)
                    .setStyle(discord.TextInputStyle.Short);

                const so3 = new TextInputBuilder()
                    .setCustomId('form')
                    .setLabel("Coloque nick, cargo, horas e o total dos colaboradores:")
                    .setMaxLength(9000)
                    .setMinLength(60)
                    .setPlaceholder('Ex:. :Nihz • Dona -> 10h00 às 11h30 = ✔️ |  13h45 às 15h00 = ❌ |  Total: 1h30.')
                    .setRequired(true)
                    .setStyle(discord.TextInputStyle.Paragraph);

                const so4 = new TextInputBuilder()
                    .setCustomId('destaque')
                    .setLabel("Destaque diário de horas em sede:")
                    .setMaxLength(90)
                    .setMinLength(20)
                    .setRequired(true)
                    .setStyle(discord.TextInputStyle.Short);


                modalso.addComponents(
                    new discord.ActionRowBuilder().addComponents(so1),
                    new discord.ActionRowBuilder().addComponents(so2),
                    new discord.ActionRowBuilder().addComponents(so3),
                    new discord.ActionRowBuilder().addComponents(so4)
                );

                await inter.showModal(modalso);

            }

            
        }
    },
};
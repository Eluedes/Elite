const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'ajuda',
	type: 1,
	description: 'Aqui você ira saber meus comandos disponiveis.',

	execute: (inter, client) => {

		const embed = new EmbedBuilder()
			.setColor('Random')
			.setTitle('Central de Ajuda')
			.setDescription('Guia de Comandos.')
			.addFields(
				{ name: 'Página 1', value: 'Utilidades (botao1)' },
				{ name: 'Página 2', value: 'Moderação (botao2)' },
				{ name: 'Página 3', value: 'Economia (botao3)' },
				{ name: 'Página 5', value: 'Miscellaneous (botao4)' },
				{ name: 'Página 6', value: 'MiniGames (botao5)' },

			);

		const embed2 = new EmbedBuilder()
			.setColor('Random')
			.setTitle('Utilidades')
			.addFields(
				{ name: '/ajuda', value: 'Faça /help para a lista de comandos e suporte.' },
				{ name: '/ping', value: 'Veja quanto de ms eu tenho.' },
				{ name: '/reactionrole', value: 'Cria uma embed de cargo por reações.' },

			)
			.setTimestamp();

		const embed3 = new EmbedBuilder()
			.setColor('Random')
			.setTitle('Moderação')
			.addFields(
				{ name: '/limpar', value: 'Apaga as mensagens de 1 até 99.' },

			)
			.setTimestamp();

		const embed4 = new EmbedBuilder()
			.setColor('Random')
			.setTitle('Economia')
			.setDescription('BREVE...')
			/* .addFields(
					{ name: '/ajuda', value: 'Faça /help para a lista de comandos e suporte.' },
					{ name: '/ping', value: 'Veja quanto de ms eu tenho.' },
					{ name: '/reactionrole', value: 'Cria uma embed de cargo por reações.' },
					{ name: 'Página 4', value: 'AutoMod (boatao4)' },
					{ name: 'Página 5', value: 'Miscellaneous (boatao5)' },
					{ name: 'Página 6', value: 'MiniGames (boatao6)' },
	
				)*/
			.setTimestamp();

		const embed5 = new EmbedBuilder()
			.setColor('Random')
			.setTitle('Miscellaneous')
			.setDescription('BREVE...')
			/* .addFields(
					{ name: '/ajuda', value: 'Faça /help para a lista de comandos e suporte.' },
					{ name: '/ping', value: 'Veja quanto de ms eu tenho.' },
					{ name: '/reactionrole', value: 'Cria uma embed de cargo por reações.' },
					{ name: 'Página 4', value: 'AutoMod (boatao4)' },
					{ name: 'Página 5', value: 'Miscellaneous (boatao5)' },
					{ name: 'Página 6', value: 'MiniGames (boatao6)' },
	
				)*/
			.setTimestamp();

		const embed6 = new EmbedBuilder()
			.setColor('Random')
			.setTitle('MiniGames')
			.setDescription('BREVE...')
			/* .addFields(
					{ name: '/ajuda', value: 'Faça /help para a lista de comandos e suporte.' },
					{ name: '/ping', value: 'Veja quanto de ms eu tenho.' },
					{ name: '/reactionrole', value: 'Cria uma embed de cargo por reações.' },
					{ name: 'Página 4', value: 'AutoMod (boatao4)' },
					{ name: 'Página 5', value: 'Miscellaneous (boatao5)' },
					{ name: 'Página 6', value: 'MiniGames (boatao6)' },
	
				)*/
			.setTimestamp();

		const botao = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('page1')
					.setLabel('Página 1')
					.setStyle(ButtonStyle.Secondary),
			)

			.addComponents(
				new ButtonBuilder()
					.setCustomId('page2')
					.setLabel('Página 2')
					.setStyle(ButtonStyle.Secondary),
			)

			.addComponents(
				new ButtonBuilder()
					.setCustomId('page3')
					.setLabel('Página 3')
					.setStyle(ButtonStyle.Secondary),
			)

			.addComponents(
				new ButtonBuilder()
					.setCustomId('page4')
					.setLabel('Página 4')
					.setStyle(ButtonStyle.Secondary),
			)

			.addComponents(
				new ButtonBuilder()
					.setCustomId('page5')
					.setLabel('Página 5')
					.setStyle(ButtonStyle.Secondary),
			);


		inter.reply({ embeds: [embed], components: [botao], ephemeral: true });

		const coletor = inter.channel.createMessageComponentCollector();

		coletor.on('collect', (i) => {

			if (i.customId === 'page1') {

				i.update({ embeds: [embed], components: [botao], ephemeral: true })
			}

			if (i.customId === 'page2') {

				i.update({ embeds: [embed2], components: [botao], ephemeral: true })
			}

			if (i.customId === 'page3') {

				i.update({ embeds: [embed3], components: [botao], ephemeral: true })
			}

			if (i.customId === 'page4') {

				i.update({ embeds: [embed4], components: [botao], ephemeral: true })
			}

			if (i.customId === 'page5') {

				i.update({ embeds: [embed5], components: [botao], ephemeral: true })
			}
		});

	},
};
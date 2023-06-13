const fs = require('fs');

module.exports = {
	execute: (client) => {
		fs.readdirSync('./command/').forEach(dir => { // Mapeando as sub pastas do command
			fs.readdirSync(`./command/${dir}`).forEach (file => {
				const command = require('../command/' + dir + '/' + file);

				client.commands.set(command.name, command);
			});
		});
		fs.readdirSync('./event/').forEach(file => { // Mapeando os arquivos dos eventos.
			const event = require('../event/' + file);
			client.on(event.name, (...args) => event.execute(...args, client));
		});
	},
};

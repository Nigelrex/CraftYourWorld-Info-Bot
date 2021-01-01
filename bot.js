const Discord = require("discord.js")
const { prefix, channelIDs, color } = require("./config.json")
const keepAlive = require('./server')
const client = new Discord.Client({
	partials: ["MESSAGE", "CHANNEL"],
})





// Bot Turned on Notification
client.once("ready", () => {
	console.log("CraftYourWorld Info Bot is Online!")
	client.user.setActivity("Your Info...", { type: "WATCHING" })
})

client.on("message", (message) => {
	if (!message.content.startsWith(prefix)) return

	const args = message.content.slice(prefix.length).split(/ +/)
	const commandName = args.shift().toLowerCase()

	const command =
		client.commands.get(commandName) ||
		client.commands.find(
			(cmd) => cmd.aliases && cmd.aliases.includes(commandName)
		)

	if (!command) return

	try {
		command.execute(message, args)
	} catch (error) {
		console.error(error)
		message.reply("there was an error trying to execute that command!")
	}
})




client.on("message", (message) => {
	if (message.content === `info 1`) {
		message.delete()
		const embed = new Discord.MessageEmbed()
			.setColor("#0099ff")
			.setTitle("**CraftYourWorld Terms and Usage**")
			.setAuthor("CraftYourWorld", "https://imgur.com/i8UVoJq.png")
			.setDescription(
				"It is perfectly fine for anyone to use, modify and share our packs within their projects for the betterment of the community.\nHowever, you may only do so if it does not infringe on the following terms and conditions:"
			)
			.setThumbnail("https://imgur.com/i8UVoJq.png")
			.addFields(
				{
					name: "**Section 1 - TermsAndUsage**",
					value: "\n────────────\n\n\n",
					inline: false,
				},
				{
					name: "\n\n**1.1**",
					value:
						"\n**You cannot redistribute our packs as they are, without proper modification and/or additions.**",
					inline: false,
				},
				{
					name: "\n**1.2**",
					value:
						"\n** You cannot restrict access or sell any pack that includes our packs through donations and/or a paywall.** ",
					inline: false,
				},
				{
					name: "\n**1.3**",
					value:
						"\n**You cannot distribute our packs without appropriate credit (refer to Section 2).**",
					inline: false,
				},
				{
					name: "\n**1.4**",
					value:
						"\n**You can distribute your pack, as long as your pack includes proper modification and/or additions.**",
					inline: false,
				},
				{
					name: "\n**1.5**",
					value:
						"\n**You can distribute your pack with our packs, as long as you have appropriately credited CraftYourWorld (refer to Section 2).** ",
					inline: false,
				},
				{
					name: "\n**1.6**",
					value:
						"\n**You can distribute your pack, as long as it is free to use for the community.**\n\n\n",
					inline: false,
				},
				{
					name: "\n\n\n**Section 2 - Credits**",
					value: "\n────────────",
					inline: false,
				},
				{
					name: "\n\n**2.1**",
					value:
						"\n**You must include the below text on all main publishing platforms that you may use. (Minecraft Forum, Planet Minecraft, Minecraft Maps, Curseforge, etc.).**",
					inline: false,
				},
				{
					name: "\n**2.2**",
					value:
						"\n**You must create a `credits.txt` within your project that includes the below text.**",
					inline: false,
				},
				{
					name: "\n\n**Credit.txt Format**",
					value: "```Credits:\n[website Yet To Come]```",
					inline: false,
				}
			)
			.setTimestamp()
			.setFooter(`@CraftYourWorld`)
		message.channel.send({ embed })
	}
})


keepAlive()
client.login(process.env.bottoken)
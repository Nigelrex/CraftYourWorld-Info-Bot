const Discord = require("discord.js")
const { prefix} = require("./config.json")
const dotenv = require("dotenv").config()
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


})




client.on("message", (message) => {
	if (message.content === `rule1`) {
		message.delete()
		const embed = new Discord.MessageEmbed()
			.setColor("#0099ff")
			.setTitle("**CraftYourWorld Rules**")
			.setAuthor("CraftYourWorld", "https://imgur.com/i8UVoJq.png")
			.setDescription(
				"Get Your Self To Know the Rules Of This Server Before You Can Do Anything!\nAnd Make Sure To get Yourself Some Roles To Know More About People And This Server"
			)
			.setThumbnail("https://imgur.com/i8UVoJq.png")
			.addFields(
				{
					name: "**Rule 1**",
					value: "\n**Common Sense :** Try Now To Post Your Personal Info Anywhere On This Server! \nThis Might Lead You To Hackers Taking Over Your Personal Information And Threaten You!",
					inline: false,
				},
			)
			.setTimestamp()
			.setFooter(`@CraftYourWorld`)
		message.channel.send({ embed })
	}
})

client.on("message", (message) => {
	if (message.content === `rule2`) {
		message.delete()
		const embed = new Discord.MessageEmbed()
			.setColor("#0099ff")
			.setTitle("**CraftYourWorld Rules**")
			.setAuthor("CraftYourWorld", "https://imgur.com/i8UVoJq.png")
			.setDescription(
				"Get Your Self To Know the Rules Of This Server Before You Can Do Anything!\nAnd Make Sure To get Yourself Some Roles To Know More About People And This Server"
			)
			.setThumbnail("https://imgur.com/i8UVoJq.png")
			.addFields(
				{
					name: "**Rule 2**",
					value: "\n**Language :** Please stick to English so we can understand you.",
					inline: false,
				},
			)
			.setTimestamp()
			.setFooter(`@CraftYourWorld`)
		message.channel.send({ embed })
	}
})

client.on("message", (message) => {
	if (message.content === `rule3`) {
		message.delete()
		const embed = new Discord.MessageEmbed()
			.setColor("#0099ff")
			.setTitle("**CraftYourWorld Rules**")
			.setAuthor("CraftYourWorld", "https://imgur.com/i8UVoJq.png")
			.setDescription(
				"Get Your Self To Know the Rules Of This Server Before You Can Do Anything!\nAnd Make Sure To get Yourself Some Roles To Know More About People And This Server"
			)
			.setThumbnail("https://imgur.com/i8UVoJq.png")
			.addFields(
				{
					name: "**Rule 3**",
					value: "\n**Staff :** Do Not DM Or Friend Request The Staff Members At Any Cost, Unless And Untill We Tell You.\nWhat The Moderators Say The Rules Mean, The Rules Mean.",
					inline: false,
				},
			)
			.setTimestamp()
			.setFooter(`@CraftYourWorld`)
		message.channel.send({ embed })
	}
})

client.on("message", (message) => {
	if (message.content === `rule4`) {
		message.delete()
		const embed = new Discord.MessageEmbed()
			.setColor("#0099ff")
			.setTitle("**CraftYourWorld Rules**")
			.setAuthor("CraftYourWorld", "https://imgur.com/i8UVoJq.png")
			.setDescription(
				"Get Your Self To Know the Rules Of This Server Before You Can Do Anything!\nAnd Make Sure To get Yourself Some Roles To Know More About People And This Server"
			)
			.setThumbnail("https://imgur.com/i8UVoJq.png")
			.addFields(
				{
					name: "**Rule 4**",
					value: "\n**Chat :** No spamming. This Includes Starting Or Continuing Emoji Trains, Message Trains, etc.\nNo Loopholes. These rules Are Not Comprehensive And Are Subject To Common Sense.",
					inline: false,
				},
			)
			.setTimestamp()
			.setFooter(`@CraftYourWorld`)
		message.channel.send({ embed })
	}
})

client.on("message", (message) => {
	if (message.content === `rule5`) {
		message.delete()
		const embed = new Discord.MessageEmbed()
			.setColor("#0099ff")
			.setTitle("**CraftYourWorld Rules**")
			.setAuthor("CraftYourWorld", "https://imgur.com/i8UVoJq.png")
			.setDescription(
				"Get Your Self To Know the Rules Of This Server Before You Can Do Anything!\nAnd Make Sure To get Yourself Some Roles To Know More About People And This Server"
			)
			.setThumbnail("https://imgur.com/i8UVoJq.png")
			.addFields(
				{
					name: "**Rule 5**",
					value: "\n**Social :** Be respectful. This includes no swearing.",
					inline: false,
				},
			)
			.setTimestamp()
			.setFooter(`@CraftYourWorld`)
		message.channel.send({ embed })
	}
})

client.on("message", (message) => {
	if (message.content === `rule6`) {
		message.delete()
		const embed = new Discord.MessageEmbed()
			.setColor("#0099ff")
			.setTitle("**CraftYourWorld Rules**")
			.setAuthor("CraftYourWorld", "https://imgur.com/i8UVoJq.png")
			.setDescription(
				"Get Your Self To Know the Rules Of This Server Before You Can Do Anything!\nAnd Make Sure To get Yourself Some Roles To Know More About People And This Server"
			)
			.setThumbnail("https://imgur.com/i8UVoJq.png")
			.addFields(
				{
					name: "**Rule 6**",
					value: "\n**Channels :** Keep Chat In The Correct Channels, To Avoid Any Misunderstanding Or Frustration/Anger Of Other people On You.",
					inline: false,
				},
			)
			.setTimestamp()
			.setFooter(`@CraftYourWorld`)
		message.channel.send({ embed })
	}
})

client.on("message", (message) => {
	if (message.content === `rule7`) {
		message.delete()
		const embed = new Discord.MessageEmbed()
			.setColor("#0099ff")
			.setTitle("**CraftYourWorld Rules**")
			.setAuthor("CraftYourWorld", "https://imgur.com/i8UVoJq.png")
			.setDescription(
				"Get Your Self To Know the Rules Of This Server Before You Can Do Anything!\nAnd Make Sure To get Yourself Some Roles To Know More About People And This Server"
			)
			.setThumbnail("https://imgur.com/i8UVoJq.png")
			.addFields(
				{
					name: "**Rule 7**",
					value: "\n**NSFW :** NSFW Is Not Allowed. This Includes Messages, Images,Avatars, Usernames, And Custom Status Texts.",
					inline: false,
				},
			)
			.setTimestamp()
			.setFooter(`@CraftYourWorld`)
		message.channel.send({ embed })
	}
})

client.on("message", (message) => {
	if (message.content === `rule8`) {
		message.delete()
		const embed = new Discord.MessageEmbed()
			.setColor("#0099ff")
			.setTitle("**CraftYourWorld Rules**")
			.setAuthor("CraftYourWorld", "https://imgur.com/i8UVoJq.png")
			.setDescription(
				"Get Your Self To Know the Rules Of This Server Before You Can Do Anything!\nAnd Make Sure To get Yourself Some Roles To Know More About People And This Server"
			)
			.setThumbnail("https://imgur.com/i8UVoJq.png")
			.addFields(
				{
					name: "**Rule 8**",
					value: "\n**Advertising :** Advertising On This Server is Strictly Not Allowed, Do Not Advertise Your Youtube Channel And Other Social Media Lead You To A Warn At First And Then Ban, So To Avoid It.",
					inline: false,
				},
			)
			.setTimestamp()
			.setFooter(`@CraftYourWorld`)
		message.channel.send({ embed })
	}
})

client.on("message", (message) => {
	if (message.content === `links`) {
		message.delete()
		const embed = new Discord.MessageEmbed()
			.setColor("#0099ff")
			.setTitle("**CraftYourWorld Links**")
			.setAuthor("CraftYourWorld", "https://imgur.com/i8UVoJq.png")
			.setDescription(
				"Get Your Self To Know the Rules Of This Server Before You Can Do Anything!\nAnd Make Sure To get Yourself Some Roles To Know More About People And This Server"
			)
			.setThumbnail("https://imgur.com/i8UVoJq.png")
			.addFields(
				{
					name: "**Rule 2**",
					value: "\n**Language :** Please stick to English so we can understand you.",
					inline: false,
				},
			)
			.setTimestamp()
			.setFooter(`@CraftYourWorld`)
		message.channel.send({ embed })
	}
})


keepAlive()
client.login(process.env.bottoken)
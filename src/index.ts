#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";
import { clear } from "console";
import { Command } from "commander";
import { away } from "./commands/away";
import { open } from "./commands/open";
import { leave } from "./commands/leave";

const program = new Command();
export const currentDir = process.cwd();
export const rootDir = process.argv[1];

clear();

// > options
program
	.description(
		chalk.blue(
			figlet.textSync("Zzzzz", { horizontalLayout: "controlled smushing" }),
		) + "\nTake a sleep, wake up later, or go to sleep for a while.",
	)
	.version("0.0.1")
	.option(
		"-g, --generate",
		"Generate templated folders & files for an ethanol project",
	);

// > commands
// away
program
	.command("away")
	.alias("a")
	.description("Make your computer stay awake for a specified amount of time")
	.option("-s, --seconds <seconds>", "How many seconds to stay awake")
	.option("-m, --minutes <minutes>", "How many minutes to stay awake")
	.option("-hr, --hours <hours>", "How many hours to stay awake")
	.action(({ seconds, minutes, hours }) => {
		// parse args
		if (seconds) {
			seconds = parseInt(seconds);
			if (typeof seconds !== "number") throw Error("Seconds is not a number!");
		}
		if (minutes) {
			minutes = parseInt(minutes);
			if (typeof minutes !== "number") throw Error("Minutes is not a number!");
		}
		if (hours) {
			hours = parseInt(hours);
			if (typeof hours !== "number") throw Error("Hours is not a number!");
		}
		// get that time
		let time = 0;
		if (seconds) time += parseInt(seconds);
		if (minutes) time += parseInt(minutes) * 60;
		if (hours) time += parseInt(hours) * 60 * 60;
		// step away -> keel over -> die
		away(time);
	});

// away
program
	.command("leave")
	.alias("l")
	.description(
		"Make your computer stay awake for a specified amount of time and then go to sleep",
	)
	.option("-s, --seconds <seconds>", "How many seconds to stay awake")
	.option("-m, --minutes <minutes>", "How many minutes to stay awake")
	.option("-hr, --hours <hours>", "How many hours to stay awake")
	.action(({ seconds, minutes, hours }) => {
		// parse args
		if (seconds) {
			seconds = parseInt(seconds);
			if (typeof seconds !== "number") throw Error("Seconds is not a number!");
		}
		if (minutes) {
			minutes = parseInt(minutes);
			if (typeof minutes !== "number") throw Error("Minutes is not a number!");
		}
		if (hours) {
			hours = parseInt(hours);
			if (typeof hours !== "number") throw Error("Hours is not a number!");
		}
		// get that time
		let time = 0;
		if (seconds) time += parseInt(seconds);
		if (minutes) time += parseInt(minutes) * 60;
		if (hours) time += parseInt(hours) * 60 * 60;
		// step away -> keel over -> die
		leave(time);
	});

// open
program
	.command("open <url>")
	.alias("o")
	.description("Make your computer stay awake for a specified amount of time")
	.option("-s, --seconds <seconds>", "How many seconds to stay awake")
	.option("-m, --minutes <minutes>", "How many minutes to stay awake")
	.option("-hr, --hours <hours>", "How many hours to stay awake")
	.action((url, { seconds, minutes, hours }) => {
		console.log({
			url,
			seconds,
			minutes,
			hours,
		});
		// parse args
		if (seconds) {
			seconds = parseInt(seconds);
			if (typeof seconds !== "number") throw Error("Seconds is not a number!");
		}
		if (minutes) {
			minutes = parseInt(minutes);
			if (typeof minutes !== "number") throw Error("Minutes is not a number!");
		}
		if (hours) {
			hours = parseInt(hours);
			if (typeof hours !== "number") throw Error("Hours is not a number!");
		}
		// get that time
		let time = 0;
		if (seconds) time += parseInt(seconds);
		if (minutes) time += parseInt(minutes) * 60;
		if (hours) time += parseInt(hours) * 60 * 60;
		// step away -> keel over -> die
		open(url, time);
	});

// > parse
program.parse(process.argv);

if (!process.argv.slice(2).length) {
	program.outputHelp();
}

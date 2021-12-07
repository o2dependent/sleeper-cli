import { clear } from "console";
import { sleep } from "../utils/sleep";
import { formatDistance } from "date-fns";
import openUrl from "open";

export const open = async (url: string, seconds: number) => {
	const initialTime = new Date().getTime();
	const stopDate = new Date(initialTime + seconds * 1000);
	const stopTime = stopDate.getTime();
	let printString = [" ", " ", " ", " ", " ", " ", " ", ".", ".", "."];
	let i = 0;
	while (new Date().getTime() < stopTime) {
		clear();
		console.log(printString.join(""));
		console.log(formatDistance(stopDate, new Date(), { includeSeconds: true }));
		const firstElement = printString.shift();
		printString = [...printString, firstElement ?? ""];
		await sleep(0.25);
	}
	openUrl(url);
	console.log("Opening up!");
};

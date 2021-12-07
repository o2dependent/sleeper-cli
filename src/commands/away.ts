import { clear } from "console";
import { sleep } from "../utils/sleep";
import { formatDistance } from "date-fns";

export const away = async (seconds: number) => {
	const initialTime = new Date().getTime();
	const stopDate = new Date(initialTime + seconds * 1000);
	const stopTime = stopDate.getTime();
	let printString = ["_", "-"];
	for (let i = 0; i < 3; i++) {
		printString = [...printString, ...printString];
	}
	while (new Date().getTime() < stopTime) {
		clear();
		console.log(printString.join(""));
		console.log(formatDistance(stopDate, new Date(), { includeSeconds: true }));
		const first = printString.shift() as string;
		printString = [...printString, first];
		await sleep(0.25);
	}
	// await sleep(seconds);
	console.log("Wake up!");
};

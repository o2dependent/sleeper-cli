import robot from "robotjs";
import { clear } from "console";
import { sleep } from "../utils/sleep";
import { formatDistance } from "date-fns";

const moveDistance = 50;
const speed = 0.01;

enum Direction {
	Up = -1,
	Down = 1,
	Left = -1,
	Right = 1,
}

export const leave = async (seconds: number) => {
	robot.moveMouse(0, 0);
	const initialTime = new Date().getTime();
	const stopDate = new Date(initialTime + seconds * 1000);
	const stopTime = stopDate.getTime();
	let printString = ["_", "-"];
	for (let i = 0; i < 3; i++) {
		printString = [...printString, ...printString];
	}
	const { height, width } = robot.getScreenSize();
	let dirX = 1;
	let dirY = 1;
	while (new Date().getTime() < stopTime) {
		const { x, y } = robot.getMousePos();
		let newX = x + dirX * moveDistance;
		let newY = y + dirY * moveDistance;
		if (dirX === Direction.Down && newX >= width) {
			newX = width - 1;
			dirX = Direction.Up;
		} else if (dirX === Direction.Up && newX <= 0) {
			newX = 0;
			dirX = Direction.Down;
		}
		if (dirY === Direction.Right && newY > height) {
			newY = height;
			dirY = Direction.Left;
		} else if (dirY === Direction.Left && newY < 0) {
			newY = 0;
			dirY = Direction.Right;
		}
		robot.moveMouseSmooth(newX, newY, speed * 100);
		clear();
		console.log(printString.join(""));
		console.log(formatDistance(stopDate, new Date(), { includeSeconds: true }));
		const first = printString.shift() as string;
		printString = [...printString, first];
		await sleep(speed);
	}
	// await sleep(seconds);
	console.log("Wake up!");
};

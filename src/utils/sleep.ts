export const sleep = (seconds: number, callback = () => {}) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			callback();
			resolve(null);
		}, seconds * 1000);
	});
};

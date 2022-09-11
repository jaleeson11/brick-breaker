import Brick from "./brick.js";

export function buildLevel(level, game) {
	let bricks = [];

	level.forEach((row, rowIndex) => {
		row.forEach((brick, brickIndex) => {
			if(brick === 1) {
				let position = {
					x: 50 * brickIndex,
					y: 20 * rowIndex
				};

				bricks.push(new Brick(game, position))
			}
		});
	});

	return bricks;
}

export const level1 = [
	[0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

export const level2 = [
	[0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
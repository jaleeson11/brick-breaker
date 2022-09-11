export function collisionDetected(gameObject, ball) {
	let ballBottom = ball.position.y + ball.size,
		ballTop = ball.position.y,
		gameObjectTop = gameObject.position.y,
		gameObjectBottom = gameObject.position.y + gameObject.height,
		gameObjectLeftSide = gameObject.position.x,
		gameObjectRightSide = gameObject.position.x + gameObject.width;

	if (ballTop <= gameObjectBottom &&
		ballBottom >= gameObjectTop &&
		ball.position.x >= gameObjectLeftSide &&
		ball.position.x + ball.size <= gameObjectRightSide) {
		return true;
	} else {
		return false;
	}
}
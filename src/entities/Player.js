import Phaser from 'phaser';

class Player extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y) {
		super(scene, x, y, 'player');

		scene.add.existing(this);
		scene.physics.add.existing(this);

		this.init();
		this.initEvents();
	}

	init() {
		this.gravity = 500;
		this.playerSpeed = 200;
		this.cursors = this.scene.input.keyboard.createCursorKeys();
		this.previousSpeed;

		this.body.setGravityY(this.gravity);
		this.setCollideWorldBounds(true);
	}

	initEvents() {
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
	}

	update() {
		const { left, right } = this.cursors;

		if (left.isDown && right.isDown) {
			this.setVelocityX(-this.previousSpeed);
		} else if (left.isDown) {
			this.setVelocityX(-this.playerSpeed);
			this.previousSpeed = this.body.velocity.x;
		} else if (right.isDown) {
			this.setVelocityX(this.playerSpeed);
			this.previousSpeed = this.body.velocity.x;
		} else {
			this.setVelocityX(0);
		}
		
	}
}

export default Player;
import Phaser from 'phaser';
import Player from '../entities/Player';

class Play extends Phaser.Scene {

	constructor() {
		super('PlayScene');
	}

	create () {
		const map = this.createMap();
		const layers = this.createLayers(map);

		const player = this.createPlayer();

		this.physics.add.collider(player, layers.platform_colliders);

	}

	createMap() {
		const map = this.make.tilemap({key: 'map'});

		map.addTilesetImage('main_lev_build_1', 'tiles-1');
		return map;
	}

	createLayers(map) {
		const tileset = map.getTileset('main_lev_build_1');
		const platform_colliders = map.createStaticLayer('platform_colliders', tileset);
		const environment = map.createStaticLayer('environment', tileset);
		const platforms = map.createStaticLayer('platforms', tileset);
		

		// be able to walk on platforms
		platform_colliders.setCollisionByProperty( {collides: true} );

		return { platform_colliders, environment, platforms };
	}

	createPlayer() {
		return new Player(this, 100, 250);
	}
}

export default Play;
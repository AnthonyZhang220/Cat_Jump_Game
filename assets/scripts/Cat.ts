const { ccclass, property } = cc._decorator;

@ccclass
export default class Cat extends cc.Component {
	GRAVITY: number = 9.8;
	duration: number = 0;
	game_start: boolean = false;
	cats: cc.Node[];

	@property()
	speed: number = 50;

	// LIFE-CYCLE CALLBACKS:

	onLoad() {
		this.cats = this.node.children;
	}

	start() {
		// 	this.node.on(
		// 		cc.Node.EventType.TOUCH_START,
		// 		() => {
		// 			while (this.duration < 3) {
		// 				this.duration += 1;
		// 			}
		// 		},
		// 		this
		// 	);
		// 	this.node.on(
		// 		cc.Node.EventType.TOUCH_END,
		// 		() => {
		// 			this.node.y;
		// 		},
		// 		this
		// 	);
	}

	update(dt: number) {
		for (let cat of this.cats) {
		}
	}
}

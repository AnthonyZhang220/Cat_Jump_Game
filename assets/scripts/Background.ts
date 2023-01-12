const { ccclass, property } = cc._decorator;

@ccclass
export default class Background extends cc.Component {
	screenWidth: number;
	screenHeight: number;
	bgs: cc.Node[];

	@property()
	speed: number = 50;

	// LIFE-CYCLE CALLBACKS:

	onLoad() {
		this.screenWidth = cc.view.getCanvasSize().width;
		this.screenHeight = cc.view.getCanvasSize().height;
		this.bgs = this.node.children;
	}

	start() {}

	update(dt: number) {
		for (let bg of this.bgs) {
			bg.x -= this.speed * dt;
			if (bg.x < -this.screenWidth) {
				bg.x = this.screenWidth;
			}
		}
	}
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
	@property(cc.Label)
	label: cc.Label = null;

	@property
	text: string = "hello";

	// LIFE-CYCLE CALLBACKS:

	onLoad() {}

	start() {
		cc.resources.load(
			"audios/bg.mp3",
			cc.AudioClip,
			(error, clip: cc.AudioClip) => {
                console.log(cc.AudioClip)
				let audioID = cc.audioEngine.play(clip, true, 1);
				cc.audioEngine.setLoop(audioID, true);
			}
		);
	}

	// update (dt) {}
}

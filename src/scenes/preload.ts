import * as Phaser from "phaser";
import { GameFrame } from "../gameParameters";

export class Preload extends Phaser.Scene {
  private startText?: Phaser.GameObjects.Text // 追加

  private bk_color: string = '0xe08734' // 追加
  private fontStyle: Phaser.Types.GameObjects.Text.TextStyle = { color: 'red', fontSize: '70px' } //追加

  init() {
    console.log("Preloading");
  }

  preload () {
    console.log("Load things necessary for Game scene");
    //this.scene.start("game");
  }
  create(){
    this.cameras.main.setBackgroundColor(this.bk_color);
    this.startText = this.add.text(GameFrame.w/2, GameFrame.h/2, 'START', this.fontStyle);

    this.startText.setOrigin(0.5);
    this.startText.setInteractive();
    this.startText.on('pointerdown', () => {
      this.scene.start('game');
    });
  }
}
/**
 * 添加音频文件，文件格式支持mp3,ogg,aac
 * */
export class Sounds extends Entity {
  constructor(src: string) {
    super()
    this.addComponent(new AudioStream(src))
    this.getComponent(AudioStream).volume = 1
    this.getComponent(AudioStream).playing = true
  }
  public setVolume(volume: number) {
    this.getComponent(AudioStream).volume = volume
  }

  public play() {
    this.getComponent(AudioStream).playing = true
  }
  public pause() {
    this.getComponent(AudioStream).playing = false
  }
  public clickPlay(target: Entity) {
    target.addComponent(
      new OnPointerDown(() => {
        this.getComponent(AudioStream).playing = !this.getComponent(AudioStream).playing
      })
    )
  }
}

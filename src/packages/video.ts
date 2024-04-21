import { Base } from './base'

/**
 * 添加视频文件，文件支持MP4,m3u8格式
 * */
export class Video extends Base {
  vt: VideoTexture
  constructor(src: string) {
    super()
    const videoClip = new VideoClip(src)
    const videoTexture = new VideoTexture(videoClip)
    this.vt = videoTexture
    const videoMaterial = new Material()
    videoMaterial.albedoTexture = videoTexture
    videoMaterial.roughness = 1
    videoMaterial.specularIntensity = 0
    videoMaterial.metallic = 0
    videoMaterial.emissiveTexture = videoTexture
    videoMaterial.emissiveColor = Color3.White()
    videoMaterial.emissiveIntensity = 0.9

    this.addComponent(new PlaneShape())
    this.addComponent(videoMaterial)

    return this
  }
  public playVideo() {
    this.vt.play()
  }
  public clickPlay(entity?: Entity) {
    if (entity) {
      entity.addComponent(
        new OnPointerDown(() => {
          this.vt.playing = !this.vt.playing
        })
      )
    } else {
      this.addComponent(
        new OnPointerDown(() => {
          this.vt.playing = !this.vt.playing
        })
      )
    }
  }
  public loopVideo() {
    this.vt.loop = true
  }
}

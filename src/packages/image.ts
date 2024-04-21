import { Base } from './base'

/**
 * function: 封装一个用于布置图片的接口
 * author： flynn
 * date: 2023/10/17
 * */
export class Image extends Base {
  constructor(src: string) {
    super()
    const plane = new PlaneShape()
    this.addComponent(plane)
    const material = new Material()
    const texture = new Texture(src)
    material.albedoTexture = texture
    material.emissiveTexture = texture
    material.emissiveColor = Color3.White()
    material.emissiveIntensity = 1
    material.roughness = 1
    material.specularIntensity = 0
    this.addComponent(material)
    return this
  }
}

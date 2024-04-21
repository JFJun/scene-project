/**
 * 添加.glb或者.gltf模型
 * */
export class Base extends Entity {
  constructor(src?: string) {
    super()
    if (src) {
      // 添加一个模型组件，填写模型的路径，例如： models/test.glb
      this.addComponent(new GLTFShape(src))
    }
    // 实体添加一个Transform组件
    this.addComponent(new Transform())
  }
  // 设置实体的位置，单位是： 米
  public setPosition(x: number, y: number, z: number) {
    this.getComponent(Transform).position.set(x, y, z)
  }
  // 设置实体的大小
  public setScale(x: number, y: number, z: number) {
    this.getComponent(Transform).scale.set(x, y, z)
  }
  // 设置实体的旋转角度
  public setRotation(x: number, y: number, z: number) {
    this.getComponent(Transform).rotation = Quaternion.Euler(x, y, z)
  }
}

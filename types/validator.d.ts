declare class Validator {
  static mobile: RegExp
  static plane: RegExp
  static validateMobile(value: string): boolean
  static validatePlane(value: string): boolean
}
export default Validator

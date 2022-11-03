class Validator {
  static mobile =
    /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/

  static plane = /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/

  static validateMobile(value: string) {
    return this.mobile.test(value)
  }

  static validatePlane(value: string) {
    return this.plane.test(value)
  }
}
export default Validator

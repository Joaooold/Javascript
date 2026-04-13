import Staff from "./Staff.js";

// Sub classe de Staff
export default class Manicurist extends Staff {
  constructor(name, monthySalary, nailDesigns) {
    super(name, "Manicure", monthySalary);
    this.nailDesigns = nailDesigns; // array de designs
  }
  #getNailsDesign() {
    return `Oferece os designs: ${this.nailDesigns.join(", ")}`;
  }
  getInfo() {
    return `${super.getInfo()}: ${this.#getNailsDesign()}`;
  }
}

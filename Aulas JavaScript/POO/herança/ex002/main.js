import HairStyle from "./HairStyle.js";
import Manicurist from "./Manicurist.js";

const cabeleireiro1 = new HairStyle("Luana", 3000, ["corte", "coloração", "penteados"]);
const manicure1 = new Manicurist("Sônia", 1500, ["francesinha", "degradê", "Unhas Artísticas"]);
console.log(cabeleireiro1)
console.log(cabeleireiro1.getInfo())
console.log(manicure1)
console.log(manicure1.getInfo())

let Juan = "lleva"
let Samuel = "No lleva"
let Martín = "No lleva"
let Sara = "No lleva"

switch (true) {

    case (Juan === "lleva" && Samuel === "lleva"):
        console.log("Samuel lleva")
        break;

    case (Juan === "lleva" && Martín === "lleva"):
        console.log("Martín lleva")
        break;

    case (Juan === "lleva" && Sara === "lleva"):
        console.log("Sara lleva")
        break;

    default:
        console.log("Nadie más lleva")
}

const Enoki = {
        name: "Enoki",
        color: "white",
        texture: "crunchy",
        flavor: ["mild", "sweet","blissful", "satisying"],
        common: "yes",
}
const Portobello = {
        name: "Portobello",
        color: "brown",
        texture: "dense",
        flavor: ["rich", "savory", "woodsy", "strong"],
        common: "yes"
    }
const Shiitake = {
        name: "Shiitake",
        color: "brown",
        texture: "chewy",
        flavor: ["earthy", "smoky", "satisfying", "strong"],
        common: "yes"
    }
const Chanterelle = {
        name: "Chanterelle",
        color: "yellow",
        texture: "chewy",
        flavor: ["smoky", "mild", "woodsy", "savory"],
        common: "no"
    }

const Morel = {
    
        name: "Morel",
        color: ["brown", "white"],
        texture: ["slimy", "dense"],
        flavor: ["earthy", "woodsy", "nutty", "blissful", "strong"],
        common: "yes"
    }

let mushrooms=[Enoki, Portobello, Shiitake, Chanterelle, Morel]

mushrooms.forEach((mushrooms) => console.log(mushrooms.name));
mushrooms.forEach(function(flavor) {
    console.log(flavor);
  });

//const tasty = mushrooms.filter((mushrooms) => mushrooms.flavor === "savory");

const tasty = mushrooms.filter(mushroom => {
    return mushroom.flavor.includes("savory");
  });

tasty.forEach((tasty) => console.log(tasty.name, tasty.flavor));
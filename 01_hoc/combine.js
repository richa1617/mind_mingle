"use strict";
//Give name of every sheep
let sheepName = animals
    .filter((e) => e.kind === "sheep")
    .map((e) => {
    return e.name;
});
//console.log(sheepName);
//Give the id of every animal that is a cow and hasn't been fed
let animal3 = animals.filter((e) => {
    return e.kind === "cow" && e.hasBeenFed === false;
});
//Give the name of every unfed animal on the farm owned by a person with name Mary
let maryFarm = farms[1];
let maryanimals = animals
    .filter((e) => {
    return maryFarm.animals.includes(e.id) && e.hasBeenFed === false;
})
    .map((e) => e.name);
console.log(maryanimals);

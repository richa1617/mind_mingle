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

let mary = people.find((e) => e.name === "Mary");
let mary_id = mary ? mary.id : null;

if (mary_id){

  let maryFarm: Farm|undefined = farms.find((e) => e.farmer === mary_id)

 
  let maryanimals: string[]  = animals
   .filter((e: Animal) => {
    if(maryFarm)
    return maryFarm.animals.includes(e.id) && e.hasBeenFed === false})
   .map((e) => e.name);

   console.log(maryanimals)

}
;



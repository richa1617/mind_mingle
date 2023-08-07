import { animals } from "../pages/animals";

interface animalKind {
  kind: "cow" | "pig" | "sheep" | "cow";
}

function AnimalList(props: animalKind) {
  console.log(props);
  const animalEmojies = { cow: "🐮", chicken: "🐔", pig: "🐷", sheep: "🐑" };
  return (
    <>
      {animals
        .filter((a) => a.kind === props.kind)
        .map((a) => {
          return (
            <div>
              <h1>{a.name}</h1>
              <h4>{animalEmojies[props.kind]}</h4>
            </div>
          );
        })}
    </>
  );
}

export default AnimalList;

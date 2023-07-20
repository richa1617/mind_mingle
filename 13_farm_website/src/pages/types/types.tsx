type Kind = "cow" | "pig" | "sheep" | "chicken";

export interface Animal {
  id: number;
  name: string;
  kind: Kind;
  age: number;
  hasBeenFeb: false;
  imgUrl: "string";
}

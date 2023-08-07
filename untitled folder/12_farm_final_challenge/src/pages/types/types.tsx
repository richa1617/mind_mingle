type Kind = "cow" | "pig" | "chicken" | "sheep";

export interface Animal {
  id: number;
  name: string;
  kind: Kind;
  age: number;
  hasBeenFed: boolean;
  imgUrl: string;
}


export interface Weather{
    date:string;
    temperature:number;
    weatherIcon:string;
    title:string;
    description:string
}

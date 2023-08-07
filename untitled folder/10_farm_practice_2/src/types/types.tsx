type Kind = "cow" | "pig" | "chicken" | "sheep";

export interface Animal {
  id: number;
  name: string;
  kind: Kind;
  age: number;
  hasBeenFed: boolean;
  description: string;
}

export interface Emoji {
  cow: string;
  pig: string;
  sheep: string;
  chicken: string;
}

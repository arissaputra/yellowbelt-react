export interface Character {
  id?: number;
  name: string;
  age: number;
  occupation: string;
  location: string;
  specialAbilities: string[];
  backstory: string;
  appearance: {
    hairColor: string;
    eyeColor: string;
    height: string;
    otherFeatures: string[];
  };
  source: string;
  imageURL: string;
}


export interface CharacterProps {
  character: Character
}
export interface Character {
  id?: string;
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
  createdAt: number | undefined;
}

export interface CharacterProps {
  character: Character
}
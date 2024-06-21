import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { Character } from "../types/character";
import { toast } from 'react-toastify';
import { useCreateCharacterMutation } from "../api/charactersApi";
import Spinner from "../components/Spinner";
import Form from "../components/Form";
import { characterValidationSchema } from "../validations/characterFormValidation";

const DEFAULT_VALUE: Character = {
  name: '',
  age: 10,
  occupation: '',
  location: '',
  specialAbilities: [''],
  backstory: '',
  appearance: {
    hairColor: '',
    eyeColor: '',
    height: '',
    otherFeatures: ['']
  },
  source: '',
  imageURL: '',
  createdAt: undefined
}

const AddCharacterPage = () => {
  const navigate = useNavigate();
  const [createCharacter, {isLoading:isCreating}] = useCreateCharacterMutation();
  const character:Character = DEFAULT_VALUE;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      source: character.source,
      name: character.name,
      age: character.age,
      occupation: character.occupation,
      location: character.location,
      specialAbilities: character.specialAbilities,
      backstory: character.backstory,
      appearance: {
        hairColor: character.appearance.hairColor,
        eyeColor: character.appearance.eyeColor,
        height: character.appearance.height,
        otherFeatures: character.appearance.otherFeatures,
      },
      imageURL: character.imageURL,
      createdAt: character.createdAt
    },
    validationSchema: characterValidationSchema,
    onSubmit: async (values) => {
      try {
        const currentDate = new Date();
        const timestamp = currentDate.getTime();
        const createdValues = {
          ...values,
          createdAt: timestamp,
        };
        await createCharacter(createdValues).unwrap();
        toast.success('Character created successfully');
        navigate(`/characters`);
      } catch (error) {
        console.error('Failed to create character:', error);
        toast.error('Failed to create character. Please try again.');
      }
    },
  });

  if (isCreating) {
    return <Spinner />
  }

  return (
    <section className="bg-sky-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <Form formik={formik} formTitle="Add Character" submitText="Save Character" />
        </div>
      </div>
    </section>
  )
}

export default AddCharacterPage
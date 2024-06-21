import { useNavigate, useParams } from "react-router-dom";
import { useGetCharacterByIdQuery, useUpdateCharacterMutation } from "../api/charactersApi";
import { useFormik } from 'formik';
import Spinner from "../components/Spinner";
import { toast } from 'react-toastify';
import Form from "../components/Form";
import { characterValidationSchema } from "../validations/characterFormValidation";

const EditCharacterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const characterId = id ? id : undefined;
  const { data: character, isLoading } = useGetCharacterByIdQuery(characterId);
  const [updateCharacter, {isLoading: isSaving}] = useUpdateCharacterMutation();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      source: character?.source || '',
      name: character?.name || '',
      age: character?.age || 0,
      occupation: character?.occupation || '',
      location: character?.location || '',
      specialAbilities: character?.specialAbilities || [],
      backstory: character?.backstory || '',
      appearance: {
        hairColor: character?.appearance.hairColor || '',
        eyeColor: character?.appearance.eyeColor || '',
        height: character?.appearance.height || '',
        otherFeatures: character?.appearance.otherFeatures || [],
      },
      imageURL: character?.imageURL || '',
      createdAt: character?.createdAt
    },
    validationSchema: characterValidationSchema,
    onSubmit: async (values) => {
      try {
        const currentDate = new Date();
        const timestamp = currentDate.getTime();
        const updatedValues = {
          id: characterId,
          ...values,
          createdAt: timestamp,
        };

        await updateCharacter(updatedValues).unwrap();
        toast.success('Character edited successfully');
        navigate(`/characters/${characterId}`);
      } catch (error) {
        console.error('Failed to update character:', error);
        toast.error('Failed to update character. Please try again.');
      }
    },
  });

  if (isLoading || isSaving) {
    return <Spinner />
  }

  if (!character) {
    return <p>No character found.</p>;
  }

  return (
    <section className="bg-sky-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <Form formik={formik} />
        </div>
      </div>
    </section>
  )
}

export default EditCharacterPage
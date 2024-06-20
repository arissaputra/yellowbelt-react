import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { Character } from "../types/character";
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useCreateCharacterMutation } from "../api/charactersApi";
import Spinner from "../components/Spinner";

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
  imageURL: ''
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
    },
    onSubmit: async (values) => {
      try {
        await createCharacter({ ...values }).unwrap();
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

  const handleAddAbility = () => {
    const updatedAbilities = [...formik.values.specialAbilities];
    updatedAbilities.push('');
    formik.setFieldValue('specialAbilities', updatedAbilities);
  }

  const handleRemoveAbility = (index: number) => {
    const updatedAbilities = [...formik.values.specialAbilities];
    updatedAbilities.splice(index, 1);
    formik.setFieldValue('specialAbilities', updatedAbilities);
  }

  const handleChangeAbility = (ability: string, index: number) => {
    const updatedAbilities = [...formik.values.specialAbilities];
    updatedAbilities[index] = ability;
    formik.setFieldValue('specialAbilities', updatedAbilities);
  }

  const handleAddFeature = () => {
    const updatedFeatures = [...formik.values.appearance.otherFeatures];
    updatedFeatures.push('');
    formik.setFieldValue('appearance.otherFeatures', updatedFeatures);
  }

  const handleRemoveFeature = (index: number) => {
    const updatedFeatures = [...formik.values.appearance.otherFeatures];
    updatedFeatures.splice(index, 1);
    formik.setFieldValue('appearance.otherFeatures', updatedFeatures);
  }

  const handleChangeFeature = (feature: string, index: number) => {
    const updatedFeatures = [...formik.values.appearance.otherFeatures];
    updatedFeatures[index] = feature;
    formik.setFieldValue('appearance.otherFeatures', updatedFeatures);
  }

  return (
    <section className="bg-sky-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={formik.handleSubmit}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Character</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >From</label
              >
              <input
                type="text"
                id="source"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Doraemon Series"
                required
                {...formik.getFieldProps('source')}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Name</label
              >
              <input
                type="text"
                id="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Nobita"
                required
                {...formik.getFieldProps('name')}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Age</label
              >
              <input
                type="number"
                id="age"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. 10"
                required
                {...formik.getFieldProps('age')}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Occupation</label
              >
              <input
                type="text"
                id="occupation"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Student"
                required
                {...formik.getFieldProps('occupation')}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Location</label
              >
              <input
                type="text"
                id="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Japan"
                required
                {...formik.getFieldProps('location')}
              />
            </div>
            <div className="mb-4">
              <div className="flex">
                <label className="text-gray-700 font-bold mb-2"
                  >Special Abilities</label
                >
                <button onClick={handleAddAbility} className="text-blue-600 px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 flex items-center" type="button">
                  Add <FaPlus className="ml-2" />
                </button>
              </div>
              {formik.values.specialAbilities.map((ability, abilityIndex) => (
                <div className="flex" key={abilityIndex}>
                  <input
                    type="text"
                    className="border rounded w-9/12 py-2 px-3 mb-2"
                    required
                    value={ability}
                    onChange={(e) => handleChangeAbility(e.target.value, abilityIndex)}
                  />
                  <button onClick={() => handleRemoveAbility(abilityIndex)} className="text-red-600 px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 flex items-center" type="button">
                    remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Backstory</label
              >
              <textarea
                id="backstory"
                rows={5}
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder=""
                required
                {...formik.getFieldProps('backstory')}
              />
            </div>

            <h3 className="text-2xl mb-5">Character Appearance</h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Hair Color</label
              >
              <input
                type="text"
                id="hair-color"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Black"
                required
                {...formik.getFieldProps('appearance.hairColor')}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Eye Color</label
              >
              <input
                type="text"
                id="eye-color"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Black"
                required
                {...formik.getFieldProps('appearance.eyeColor')}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Height</label
              >
              <input
                type="text"
                id="height"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Black"
                required
                {...formik.getFieldProps('appearance.height')}
              />
            </div>
            <div className="mb-4">
              <div className="flex">
                <label className="text-gray-700 font-bold mb-2"
                  >Other Features</label
                >
                <button onClick={handleAddFeature} className="text-blue-600 px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 flex items-center" type="button">
                  Add <FaPlus className="ml-2" />
                </button>
              </div>
              {formik.values.appearance.otherFeatures.map((feature, featureIndex) => (
                <div className="flex" key={featureIndex}>
                  <input
                    type="text"
                    className="border rounded w-9/12 py-2 px-3 mb-2"
                    required
                    value={feature}
                    onChange={(e) => handleChangeFeature(e.target.value, featureIndex)}
                  />
                  <button onClick={() => handleRemoveFeature(featureIndex)} className="text-red-600 px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 flex items-center" type="button">
                    remove
                  </button>
                </div>
              ))}

            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Image URL</label
              >
              <input
                type="text"
                id="image-url"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder=""
                required
                {...formik.getFieldProps('imageURL')}
              />
            </div>

            <div>
              <button
                className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Character
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddCharacterPage
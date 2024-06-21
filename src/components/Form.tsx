import { FormikProps, FormikTouched } from 'formik';
import { FaPlus } from 'react-icons/fa';
import { Character } from '../types/character';
import { useEffect } from 'react';

interface FormProps {
  formik: FormikProps<Character>;
  formTitle?: string;
  submitText?: string;
}

const Form = ({ formik, formTitle = 'Edit Character', submitText = 'Update Character' }: FormProps) => {
  const { errors, isValid, submitCount, isSubmitting, touched } = formik;

  useEffect(() => {
    const isValidErrorKey = (key: string): key is keyof FormikTouched<Character> => {
      return key in touched;
    }

    if (!isValid && submitCount !== 0 && isSubmitting) {
      const errorKeys = Object.keys(errors);

      if (errorKeys.length > 0) {
        const firstErrorKey = errorKeys.find(key => isValidErrorKey(key) && touched[key]);

        if (firstErrorKey) {
          const errorField = document.getElementsByName(firstErrorKey)[0];

          if (errorField) {
            errorField.focus();
          }
        }
      }
    }
  }, [errors, isValid, submitCount, isSubmitting, touched]);

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
    <form onSubmit={formik.handleSubmit}>
      <h2 className="text-3xl text-center font-semibold mb-6">{ formTitle }</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2"
          >From</label
        >
        <input
          type="text"
          id="source"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="eg. Doraemon Series"
          {...formik.getFieldProps('source')}
        />
        {formik.touched.source && formik.errors.source ? (
          <div className='text-red-500'>{formik.errors.source}</div>
        ) : null}
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
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className='text-red-500'>{formik.errors.name}</div>
        ) : null}
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
          {...formik.getFieldProps('age')}
        />
        {formik.touched.age && formik.errors.age ? (
          <div className='text-red-500'>{formik.errors.age}</div>
        ) : null}
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
          {...formik.getFieldProps('occupation')}
        />
        {formik.touched.occupation && formik.errors.occupation ? (
          <div className='text-red-500'>{formik.errors.occupation}</div>
        ) : null}
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
          {...formik.getFieldProps('location')}
        />
        {formik.touched.location && formik.errors.location ? (
          <div className='text-red-500'>{formik.errors.location}</div>
        ) : null}
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
              value={ability}
              name={abilityIndex === 0 ? 'specialAbilities' : `specialAbilities${abilityIndex}`}
              onChange={(e) => handleChangeAbility(e.target.value, abilityIndex)}
            />
            <button onClick={() => handleRemoveAbility(abilityIndex)} className="text-red-600 px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 flex items-center" type="button">
              remove
            </button>
          </div>
        ))}
        {formik.touched.specialAbilities && formik.errors.specialAbilities ? (
          <div className='text-red-500'>{formik.errors.specialAbilities}</div>
        ) : null}
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
          {...formik.getFieldProps('backstory')}
        />
        {formik.touched.backstory && formik.errors.backstory ? (
          <div className='text-red-500'>{formik.errors.backstory}</div>
        ) : null}
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
          {...formik.getFieldProps('appearance.hairColor')}
        />
        {formik.touched.appearance?.hairColor && formik.errors.appearance?.hairColor ? (
          <div className='text-red-500'>{formik.errors.appearance?.hairColor}</div>
        ) : null}
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
          {...formik.getFieldProps('appearance.eyeColor')}
        />
        {formik.touched.appearance?.eyeColor && formik.errors.appearance?.eyeColor ? (
          <div className='text-red-500'>{formik.errors.appearance?.eyeColor}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2"
          >Height</label
        >
        <input
          type="text"
          id="height"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="eg. 180 cm"
          {...formik.getFieldProps('appearance.height')}
        />
        {formik.touched.appearance?.height && formik.errors.appearance?.height ? (
          <div className='text-red-500'>{formik.errors.appearance?.height}</div>
        ) : null}
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
              value={feature}
              name={featureIndex === 0 ? 'appearance' : `appearance${featureIndex}`}
              onChange={(e) => handleChangeFeature(e.target.value, featureIndex)}
            />
            <button onClick={() => handleRemoveFeature(featureIndex)} className="text-red-600 px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 flex items-center" type="button">
              remove
            </button>
          </div>
        ))}
        {formik.touched.appearance?.otherFeatures && formik.errors.appearance?.otherFeatures ? (
          <div className='text-red-500'>{formik.errors.appearance?.otherFeatures}</div>
        ) : null}

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
          {...formik.getFieldProps('imageURL')}
        />
        {formik.touched.imageURL && formik.errors.imageURL ? (
          <div className='text-red-500'>{formik.errors.imageURL}</div>
        ) : null}
      </div>

      <div>
        <button
          className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          { submitText }
        </button>
      </div>
    </form>
  )
}

export default Form
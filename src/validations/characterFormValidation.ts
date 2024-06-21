import * as yup from 'yup';

const isAlphanumeric = (value: string) => {
  if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
    return false;
  }
  return true;
};

export const characterValidationSchema = yup.object().shape({
  source: yup.string().required('Source is required'),
  name: yup.string().required('Name is required').test('alphanumeric', 'Must be alphanumeric', isAlphanumeric),
  age: yup
    .number()
    .required('Age is required')
    .positive('Age must be a positive number')
    .integer('Age must be an integer'),
  occupation: yup.string().required('Occupation is required'),
  location: yup.string().required('Location is required'),
  specialAbilities: yup
    .array()
    .of(yup.string().required('Each special ability must be a non-empty string'))
    .min(1, 'At least one special ability is required'),
  backstory: yup.string().required('Backstory is required'),
  appearance: yup.object().shape({
    hairColor: yup.string()
      .trim()
      .required('Hair color is required')
      .max(15, 'Hair color must be at most 15 characters'),
    eyeColor: yup.string()
      .trim()
      .required('Eye color is required')
      .max(15, 'Eye color must be at most 15 characters'),
    height: yup.string()
      .trim()
      .required('Height is required')
      .max(50, 'Height must be at most 50 characters'),
    otherFeatures: yup
      .array()
      .of(yup.string().required('Each feature must be a non-empty string'))
      .min(1, 'At least one special ability is required'),
  }),
  imageURL: yup.string().url('Invalid URL format'),
});
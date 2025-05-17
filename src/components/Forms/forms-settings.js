import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validateSchema = {
  registrationForm: Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name is too short, minimum 3 letters.')
      .max(50, 'Name is too long, maximum 50 letters.')
      .trim()
      .required('Name is required'),

    email: Yup.string().matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Email format is not valid.'
    ),

    password: Yup.string()
      .min(7, 'Password must be at least 7 characters long')
      .required('Password is required'),

    confirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
  }),
  loginForm: Yup.object().shape({
    email: Yup.string().matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Email format is not valid.'
    ),
    password: Yup.string()
      .min(7, 'Password must be at least 7 characters long')
      .required('Password is required'),
  }),
  editUserForm: Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name is too short, minimum 3 letters.')
      .max(50, 'Name is too long, maximum 50 letters.')
      .trim(),

    email: Yup.string().matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Email format is not valid.'
    ),

    avatarUrl: Yup.string()
      .matches(
        /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
        'Avatar must be a valid image URL.'
      )
      .nullable()
      .transform((value, originalValue) =>
        originalValue.trim() === '' ? null : value
      ),

    phone: Yup.string().matches(
      /^\+38\d{10}$/,
      'Phone must match format +380XXXXXXXXX'
    ),
  }),
  addPetForm: Yup.object().shape({
    title: Yup.string().required('Title is required'),
    petName: Yup.string().required('Pet name is required'),
    species: Yup.string().required('Species is required'),
    sex: Yup.string().required('Sex is required'),
    birthday: Yup.string()
      .matches(/^\d{4}-\d{2}-\d{2}$/, 'YYYY-MM-DD')
      .required('Birthday is required .'),
    imgUrl: Yup.string()
      .matches(
        /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
        'Avatar must be a valid image URL'
      )
      .nullable()
      .transform((value, originalValue) =>
        originalValue.trim() === '' ? null : value
      ),
  }),
};

 const defaultValues = {
  registrationForm: { name: '', email: '', password: '', confirm: '' },
  loginForm: { email: '', password: '' },
  editUserForm: { name: '', email: '', avatarUrl: '', phone: '' },
  addPetForm: {
    title: '',
    petName: '',
    species: '',
    sex: '',
    birthday: '',
    imgUrl: '',
  },
  filterForm:{search:"",category:"",gender:"",type:"",location:"",rating:"",price:""}
};

const formSettings = formName => {
  return {
    resolver: yupResolver(validateSchema[formName]),
    mode: 'onChange',
    defaultValues: defaultValues[formName],
    shouldFocusError: true,
    delayError: 300,
  };
};

export const filterFormDefaultValues = defaultValues.filterForm;
export default formSettings;
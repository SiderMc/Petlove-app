import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import Input from '../../Shared/Inputs/Input/Input';
import Button from '../../Shared/Button/Button';
import UploadImage from '../../Shared/Inputs/UploadImage/UploadImage';
import SvgIcons from '../../Shared/SvgIcons/SvgIcons';
import css from './ModalEditUser.module.css';

const validateSchema = Yup.object().shape({
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
});

const defaultValues = { name: '', email: '', avatarUrl: '', phone: '' };
const formOptions = {
  resolver: yupResolver(validateSchema),
  mode: 'onChange',
  defaultValues,
  shouldFocusError: true,
  delayError: 300,
};

export default function ModalEditUser() {
  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm(formOptions);
  const [imagePreview, setImagePreview] = useState({ url: '', name: '' });
  const getInputType = fieldName => {
    const value = watch(fieldName);
    const hasError = errors?.[fieldName];

    if (hasError) return { noValid: true };
    if (value?.trim()?.length > 0) return { primary: true };
    return { secondary: true };
  };
  const onSubmit = data => {
    console.log(data);
    reset();
  };
  return (
    <div className={css.modal__content}>
      <h2 className={css.modal__title}>Edit information</h2>
      {imagePreview.url ? (
        <img
          src={imagePreview.url}
          alt={imagePreview.name || 'user avatar'}
          className={css.user__image}
        />
      ) : (
        <span className={css.user__avatar}>
          <SvgIcons name="user" className={css.icon} />
        </span>
      )}
      <form
        className={css.user__form}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          id="avatarUrl"
          {...getInputType('avatarUrl')}
          {...register('avatarUrl')}
          errors={errors}
          placeholder="Avatar URL"
        />
        <UploadImage
          imageChange={setImagePreview}
          imagePreview={imagePreview}
        />
        <Input
          type="text"
          id="name"
          {...getInputType('name')}
          {...register('name')}
          errors={errors}
          placeholder="Name"
        />
        <Input
          type="email"
          id="email"
          {...getInputType('email')}
          {...register('email')}
          errors={errors}
          placeholder="Email"
        />
        <Input
          type="text"
          id="phone"
          {...getInputType('phone')}
          {...register('phone')}
          errors={errors}
          placeholder="Phone number +380"
        />
        <Button
          type="submit"
          primary={isValid}
          disable={!isValid}
          className={css.modal__btn}
          disabled={!isValid}>
          Go to profile
        </Button>
      </form>
    </div>
  );
}

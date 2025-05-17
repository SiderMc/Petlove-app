import { useState } from 'react';
import SvgIcons from '../../Shared/SvgIcons/SvgIcons';
import css from './AddPetForm.module.css';
import UploadImage from '../../Shared/Inputs/UploadImage/UploadImage';
import Input from '../../Shared/Inputs/Input/Input';
import { useForm, useWatch, Controller } from 'react-hook-form';
import formSettings from '../forms-settings';
import Button from '../../Shared/Button/Button';
import Select from '../../Shared/Inputs/Select/Select';
import Radio from '../../Shared/Inputs/Radio/Radio';
import { options, radioValues } from '../constants.js';
import DatePicker from '../../Shared/Inputs/DatePicker/DatePicker.jsx';
import { useNavigate } from 'react-router-dom';

export default function AddPetForm() {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState({ url: '', name: '' });
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm(formSettings('addPetForm'));
  const formValues = useWatch({ control });
  const getInputType = (value, error) => ({
    noValid: !!error,
    valid: !error && value?.trim()?.length > 0,
    secondary: !error && !value,
  });
  console.log(errors);
  const onSubmit = data => {
    console.log(data);
    reset();
    handleBack()
  };
  const handleBack = () => {
    navigate('/profile');
  };
  return (
    <form className={css.add__pet_form} onSubmit={handleSubmit(onSubmit)}>
      <Radio
        radioValues={radioValues}
        name="sex"
        errors={errors}
        {...register('sex')}
        className="add__pet"
      />
      {imagePreview.url ? (
        <img
          src={imagePreview.url}
          alt={imagePreview.name || 'pet photo'}
          className={css.pet__image}
        />
      ) : (
        <span className={css.pet__photo}>
          <SvgIcons name="paw" className={css.icon} />
        </span>
      )}
      <Input
        type="text"
        id="imgUrl"
        {...getInputType(formValues.imgUrl, errors.imgUrl)}
        {...register('imgUrl')}
        errors={errors}
        placeholder="Enter URL"
      />
      <UploadImage imageChange={setImagePreview} imagePreview={imagePreview} />
      <Input
        type="text"
        id="name"
        {...getInputType(formValues.title, errors.title)}
        {...register('title')}
        errors={errors}
        placeholder="Title"
      />
      <Input
        type="text"
        id="petName"
        {...getInputType(formValues.petName, errors.petName)}
        {...register('petName')}
        errors={errors}
        placeholder="Pet's name"
      />
      <Controller
        control={control}
        name="birthday"
        render={({ field }) => (
          <DatePicker
            field={field}
            id="birthday"
            {...getInputType(formValues.birthday, errors.birthday)}
            value={field.value}
            errors={errors}
            placeholder="0000.00.00"
          />
        )}
      />
      <Controller
        control={control}
        name="species"
        render={({ field }) => (
          <Select
            field={field}
            id="species"
            {...getInputType(formValues.species, errors.species)}
            value={field.value}
            errors={errors}
            placeholder="Type of pet"
            options={options}
          />
        )}
      />
      <div className={css.add__pet_actions}>
        <Button type="button" simple onClick={handleBack}>
          Back
        </Button>
        <Button type="submit" primary={isValid} disabled={!isValid}>
          Submit
        </Button>
      </div>
    </form>
  );
}

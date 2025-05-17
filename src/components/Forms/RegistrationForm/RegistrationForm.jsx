import { useForm, useWatch } from 'react-hook-form';

import { useState } from 'react';
import Button from '../../Shared/Button/Button';
import Input from '../../Shared/Inputs/Input/Input';
import SvgIcons from '../../Shared/SvgIcons/SvgIcons';
import css from './RegistrationForm.module.css';
import formSettings from '../forms-settings.js';

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm(formSettings('registrationForm'));
  const formValues = useWatch({ control });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm: false,
  });
  const getInputType = (value, error) => ({
    noValid: !!error,
    valid: !error && value?.trim()?.length > 0,
    secondary: !error && !value,
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <form
      autoComplete="off"
      className={css.registration__form}
      onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        name="name"
        {...register('name')}
        {...getInputType(formValues.name, errors.name)}
        errors={errors}
        placeholder="Name"
      />
      <Input
        type="text"
        name="email"
        {...register('email')}
        {...getInputType(formValues.email, errors.email)}
        errors={errors}
        placeholder="Email"
      />
      <Input
        type={showPassword.password ? 'text' : 'password'}
        name="password"
        {...register('password')}
        {...getInputType(formValues.password, errors.password)}
        errors={errors}
        placeholder="Password">
        <div className={css.icons__content}>
          {errors.password ? (
            <SvgIcons name="close" className={css.icon} />
          ) : formValues.password ? (
            <SvgIcons name="success" />
          ) : null}
          <button
            type="button"
            className={css.icon__btn}
            onClick={() =>
              setShowPassword(prev => ({ ...prev, password: !prev.password }))
            }>
            <SvgIcons name={!showPassword.password ? 'eyeOff' : 'eye'} />
          </button>
        </div>
      </Input>
      <Input
        type={showPassword.confirm ? 'text' : 'password'}
        name="confirm"
        {...register('confirm')}
        {...getInputType(formValues.confirm, errors.confirm)}
        errors={errors}
        placeholder="Confirm password">
        <div className={css.icons__content}>
          {errors.confirm ? (
            <SvgIcons name="close" className={css.icon} />
          ) : formValues.confirm ? (
            <SvgIcons name="success" />
          ) : null}
          <button
            type="button"
            className={css.icon__btn}
            onClick={() =>
              setShowPassword(prev => ({ ...prev, confirm: !prev.confirm }))
            }>
            <SvgIcons name={!showPassword.confirm ? 'eyeOff' : 'eye'} />
          </button>
        </div>
      </Input>
      <Button
        type="submit"
        primary={isValid}
        disabled={!isValid}
        className={css.registration__btn}>
        Registration
      </Button>
    </form>
  );
}

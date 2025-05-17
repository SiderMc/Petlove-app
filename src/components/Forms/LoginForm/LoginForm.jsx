import { useForm, useWatch } from 'react-hook-form';
import css from './LoginForm.module.css';
import formSettings from '../forms-settings';
import { useState } from 'react';
import Input from '../../Shared/Inputs/Input/Input';
import SvgIcons from '../../Shared/SvgIcons/SvgIcons';
import Button from '../../Shared/Button/Button';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm(formSettings('loginForm'));
  const formValues = useWatch({ control });
  const [showPassword, setShowPassword] = useState(false);
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
      className={css.login__form}
      onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        name="email"
        {...register('email')}
        {...getInputType(formValues.email, errors.email)}
        errors={errors}
        placeholder="Email"
      />
      <Input
        type={showPassword ? 'text' : 'password'}
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
            onClick={() => setShowPassword(prev => !prev)}>
            <SvgIcons name={!showPassword ? 'eyeOff' : 'eye'} />
          </button>
        </div>
      </Input>
      <Button
        type="submit"
        primary={isValid}
        disabled={!isValid}
        className={css.login__btn}>
        Log In
      </Button>
    </form>
  );
}

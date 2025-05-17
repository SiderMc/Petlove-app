import { useForm, Controller } from 'react-hook-form';
import { filterFormDefaultValues } from '../forms-settings';
import Select from '../../Shared/Inputs/Select/Select';
import SearchField from '../../Shared/SearchField/SearchField';
import css from './FilterForm.module.css';
import { options, radioValuesPrice, radioValuesRating } from '../constants.js';
import RadioFilter from '../../Shared/Inputs/RadioFilter/RadioFilter.jsx';
import { useEffect } from 'react';

export default function FilterForm() {
  const {
    resetField,
    control,
    watch,
  } = useForm({ defaultValues: filterFormDefaultValues });
const data = watch()
  useEffect(()=>{
    console.log(data)
  },[data])
  return (
    <form className={css.filter__form}>
      <SearchField placeholder="Search" />
      <Controller
        control={control}
        name="category"
        render={({ field }) => (
          <Select
            field={field}
            id="category"
            value={field.value}
            placeholder="Category"
            simple
            options={options}
          />
        )}
      />
      <Controller
        control={control}
        name="gender"
        render={({ field }) => (
          <Select
            field={field}
            id="gender"
            value={field.value}
            placeholder="By gender"
            simple
            options={options}
          />
        )}
      />
      <Controller
        control={control}
        name="type"
        render={({ field }) => (
          <Select
            field={field}
            id="type"
            value={field.value}
            placeholder="By type"
            simple
            options={options}
          />
        )}
      />
      <SearchField placeholder="Location" />
      <span className={css.line}></span>
      <div className={css.filter__radio_group}>
        <Controller
          control={control}
          name="rating"
          render={({ field }) => (
            <RadioFilter
              radioValues={radioValuesRating}
              field={field}
              resetField={resetField}
            />
          )}
        />
        <Controller
          control={control}
          name="price"
          render={({ field }) => (
            <RadioFilter
              radioValues={radioValuesPrice}
              field={field}
              resetField={resetField}
            />
          )}
        />
      </div>
    </form>
  );
}

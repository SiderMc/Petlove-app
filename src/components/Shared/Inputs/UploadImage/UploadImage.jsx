import { useId } from 'react';
import css from './UploadImage.module.css';
import SvgIcons from '../../SvgIcons/SvgIcons';

export default function UploadImage({ imageChange }) {
  const uid = useId();
  const handleImageChange = e => {
    const image = e.target.files[0];
    if (!image) return;
    const imageURL = URL.createObjectURL(image);
    const formData = new FormData();
    formData.append('image', image);
    imageChange({ url: imageURL, name: image.name });
  };
  return (
    <>
      <label className={css.upload__label}>
      <input
        type="file"
        className={css.upload__image}
        accept="image/*"
        id={`${uid}-image`}
        onChange={handleImageChange}
      />
        Upload photo
        <SvgIcons name="upload" className={css.icon} />
      </label>
    </>
  );
}

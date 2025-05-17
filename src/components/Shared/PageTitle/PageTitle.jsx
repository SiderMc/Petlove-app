import css from './PageTitle.module.css';

export default function PageTitle({ title, className }) {
  const titleClass = `${css.page__title} ${className}`.trim();
  return <h2 className={titleClass}>{title}</h2>;
}

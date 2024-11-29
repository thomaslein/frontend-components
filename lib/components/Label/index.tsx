import styles from './label.module.css';

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  const { className, ...restProps } = props;
  return <label className={`${className} ${styles.label}`} {...restProps} />;
}

import styles from './button.module.scss';

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;

import styles from './text-content.module.scss';

interface IProps {
  content: string[] | readonly string[];
}

export const TextContent = ({ content }: IProps) => {
  return (
    <div className={styles.textContent}>
      {content.map((text) => (
        <p>{text}</p>
      ))}
    </div>
  );
};

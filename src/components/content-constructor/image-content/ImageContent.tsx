import styles from './image-content.module.scss';

interface IProps {
  stepName: string;
  imageContent: string[];
}

export const ImageContent = (props: IProps) => {
  const { stepName, imageContent } = props;

  return (
    <div
      className={styles.imageBox}
    >
      {imageContent.map((img: string, index: number) => (
        <img
          key={index}
          className={styles.imageBox__image}
          src={img}
          alt={`${stepName} - ${index}`}
        />
      ))}
    </div>
  );
};

import { useCallback } from 'react';
import { ImageContent } from './image-content';
import { IMAGE_ALT_TEXT } from '@/constants';
import styles from './content-constructor.module.scss';

interface IProps {
  body: any[];
  dependencyArray?: any[];
  stepName?: string;
}

export const ContentConstructor = (props: IProps) => {
  const { body, dependencyArray, stepName } = props;

  const getContent = useCallback(
    (item: any, index: number, stepName?: string) => {

      switch (true) {
        case 'text' in item:
          return (Array.isArray(item.text) ? item.text : [item.text]).map(
            (text: string) => (
              <p key={text} className={styles.text}>
                {text}
              </p>
            ),
          );

        case 'image' in item:
          return (
            <ImageContent
              key={index}
              imageContent={item.image}
              stepName={`${IMAGE_ALT_TEXT.imageInConstructor} ${stepName}`}
            />
          );
      }
    },
    dependencyArray || [],
  );

  return (
    <div>
      {body.map((item: any, i: number) => getContent(item, i, stepName))}
    </div>
  );
};

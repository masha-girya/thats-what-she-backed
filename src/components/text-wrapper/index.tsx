interface ITextWrapper {
  text: string;
}

export const TextWrapper = (props: ITextWrapper) => {
  const { text } = props;
  const arrText = text.split(" ");

  const res = arrText.map((tex) => {
    if (tex.toUpperCase() === tex.toUpperCase()) {
      return <strong>{tex + ' '}</strong>;
    } else if (tex.includes("[")) {
      const lastTextIndex = tex.indexOf(":");
      const rawText = tex.slice(1, lastTextIndex);
      const link = tex.slice(lastTextIndex + 1, -2);
      return (
        <a href={link} target="_blank">
          {rawText + ' '}
        </a>
      );
    } else return <>{tex + ' '}</>;
  });

  return <>{res}</>;
};

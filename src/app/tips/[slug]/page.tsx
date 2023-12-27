import { ServerErrorPlug } from "@/components/server-error-plug";
import { RecipeSticker } from "@/components/recipe-sticker";
import { getTipBySlug } from "@/lib/tips";
import { ITips } from "@/types/tips.type";
import { linkCutter } from "@/utils/helpers";
import styles from "./index.module.scss";

async function getTip(slug: string) {
  try {
    const tips: { tip: ITips } = await getTipBySlug(slug);

    return { res: tips.tip };
  } catch (error) {
    console.error(error);
    return { res: "Error in fetching data" };
  }
}

const Tip = async ({ params }: any) => {
  const { res } = await getTip(params.slug);

  if (typeof res === "string" || !res) {
    return <ServerErrorPlug text="Упс! Хтось з'їв всі замітки!" />;
  }

  const { title, mainImage, tips, conclusion } = res as ITips;

  return (
    <div className={styles.tipPage}>
      <h1 className={styles.tipPage__title}>{res.title}</h1>
      <img className={styles.tipPage__mainImage} src={mainImage} alt={title} />

      {tips.map((tip, i) => (
        <RecipeSticker key={i}>
          <div key={tip.title} className={styles.tip}>
            <h3 className={styles.tip__title}>{tip.title}</h3>

            {Array.isArray(tip.text) ? (
              tip.text.map((tipText) => (
                <div key={tipText} className={styles.tip__textBox}>
                  {linkCutter(tipText, [styles.tip__link, styles.tip__text])}
                </div>
              ))
            ) : (
              <p>
                TYPE: {JSON.stringify(typeof tip.text)}, CONT:{" "}
                {JSON.stringify(tip.text)}{" "}
              </p>
            )}

            {tip.image && (
              <div className={styles.tip__imageBox}>
                {tip.image.map((tipImage, i) => (
                  <img
                    key={tipImage}
                    className={styles.tip__image}
                    src={tipImage}
                    alt={`${tip.title} #${i}`}
                  />
                ))}
              </div>
            )}
          </div>
        </RecipeSticker>
      ))}

      <div className={styles.tipPage__conclusion}>
        {conclusion.map((text, i) => (
          <p key={i} className={styles.tipPage__conclusion__text}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tip;

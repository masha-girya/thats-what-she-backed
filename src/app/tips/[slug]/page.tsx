import { ServerErrorPlug } from "@/components/server-error-plug";
import { getTipBySlug } from "@/lib/tips";
import { ITips } from "@/types/tips.type";
import styles from "./index.module.scss";

async function getTip(slug: string) {
  try {
    const tips: { tip: ITips } = await getTipBySlug(slug);

    return { res: tips.tip };
  } catch (error) {
    console.error("error");
    return { res: "Error in fetching data" };
  }
}

const Tip = async ({ params }: any) => {
  const { res } = await getTip(params.slug);

  if (typeof res === "string" || !res) {
    return <ServerErrorPlug text="Упс! Хтось з'їв всі замітки!" />;
  }

  const { title, mainImage, tips } = res;

  return (
    <div className={styles.tipPage}>
      <h1 className={styles.tipPage__title}>{res.title}</h1>
      <img className={styles.tipPage__mainImage} src={mainImage} alt={title} />

      {tips.map((tip, i) => (
        <div key={i} className={styles.tip}>
          <h3 className={styles.tip__title}>{tip.title}</h3>
          <p className={styles.tip__text}>{tip.text}</p>
          {tip.image && (
            <div className={styles.tip__imageBox}>
              {tip.image.map((tipImage, i) => (
                <img
                  className={styles.tip__image}
                  src={tipImage}
                  alt={`${tip.title} #${i}`}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tip;

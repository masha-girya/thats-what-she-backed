import { RecipeSticker, Tip, ServerErrorPlug, BackButton } from "@/components";
import { getTipBySlug } from "@/lib/tips";
import { ITips } from "@/types/tips.type";
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

const TipPage = async ({ params }: any) => {
  const { res } = await getTip(params.slug);

  if (typeof res === "string" || !res) {
    return <ServerErrorPlug text="Упс! Хтось з'їв всі замітки!" />;
  }

  const { title, mainImage, tips, conclusion } = res as ITips;

  return (
    <div className={styles.tipPage}>
      <BackButton />
      <div className={styles.tipPage__container}>
        <h1 className={styles.tipPage__title}>{res.title}</h1>
        <img
          className={styles.tipPage__mainImage}
          src={mainImage}
          alt={title}
        />

        {tips.map((tip, i) => (
          <RecipeSticker key={i}>
            <Tip tip={tip} />
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
    </div>
  );
};

export default TipPage;

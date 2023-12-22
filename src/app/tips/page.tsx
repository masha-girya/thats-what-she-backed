import { ServerErrorPlug } from "@/components/server-error-plug";
import { TipCard } from "@/components/tip-card";
import { getAllTips } from "@/lib/tips";
import styles from "./index.module.scss";

async function getTips() {
  try {
    const tips = await getAllTips();

    return { res: tips };
  } catch (error) {
    console.error(error);
    return { res: "Error in fetching data" };
  }
}

const Tips = async () => {
  const tips = await getTips();

  if (typeof tips.res === "string") {
    return <ServerErrorPlug text="Упс! Хтось з'їв всі замітки!" />;
  }

  return (
    <main className={styles.tips}>
      <h1 className={styles.tips__title}>Замітки про іжу</h1>
      <div className={styles.tips__list}>
        {tips.res.map((tip) => (
          <TipCard key={tip.slug} tip={tip} />
        ))}
      </div>
    </main>
  );
};

export default Tips;

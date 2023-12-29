import { ServerErrorPlug } from "@/components/server-error-plug";
import { TipCard } from "@/components/tip-card";
import { getAllTips } from "@/lib/tips";
import { ERROR_TEXT } from "@/constants";
import { ITipShort } from "@/types/tips.type";
import styles from "./index.module.scss";

async function getTips() {
  try {
    const tips = (await getAllTips()) as ITipShort[];

    return { res: tips };
  } catch (error) {
    console.error(error);
    return { res: null };
  }
}

const Tips = async () => {
  const { res } = await getTips();

  if (!res) {
    return <ServerErrorPlug text={ERROR_TEXT.tips} />;
  }

  return (
    <main className={styles.tips}>
      <h1 className={styles.tips__title}>Замітки про іжу</h1>
      <div className={styles.tips__list}>
        {res.map((tip) => (
          <TipCard key={tip.slug} tip={tip} />
        ))}
      </div>
    </main>
  );
};

export default Tips;

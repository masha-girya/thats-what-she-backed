import { TipCard, ServerErrorPlug } from "@/components";
import { getAllTips } from "@/lib/tips";
import { ERROR_TEXT, TIPS_PAGE_TEXT } from "@/constants";
import { ITipShort } from "@/types";
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
      <h1 className={styles.tips__title}>{TIPS_PAGE_TEXT.title}</h1>
      <div className={styles.tips__list}>
        {res.map((tip) => (
          <TipCard key={tip.slug} tip={tip} />
        ))}
      </div>
    </main>
  );
};

export default Tips;

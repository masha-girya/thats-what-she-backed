import { SOCIALS } from "@/constants";
import styles from "./index.module.scss";
import classNames from "classnames";

interface IProps {
  isMobMenu?: boolean;
}

export const Socials = (props: IProps) => {
  const { isMobMenu } = props;

  return (
    <ul
      className={classNames(styles.socials, {
        [styles.socials_mobMenu]: isMobMenu,
      })}
    >
      {SOCIALS.map((item) => (
        <li key={item.name}>
          <a
            href={item.link}
            title={item.name}
            target="_blank"
            className={classNames(styles.socials__link, {
              [styles.socials__link_mobMenu]: isMobMenu,
            })}
          >
            {
              <item.icon
                className={classNames(styles.socials__icon, {
                  [styles.socials__icon_mobMenu]: isMobMenu,
                  [styles.socials__icon_mobMenu_tiktok]:
                    isMobMenu && item.name === "TikTok",
                })}
              />
            }
          </a>
        </li>
      ))}
    </ul>
  );
};

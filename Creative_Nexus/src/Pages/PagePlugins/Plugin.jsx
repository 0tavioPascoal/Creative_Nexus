import styles from "./styles.module.css";

import discordIcon from "../../assets/DiscordLogo.png";
import instagramIcon from "../../assets/InstagramLogo.png";
import youtubeIcon from "../../assets/YouTubeLogo.png";
import pluginDefaultImage from "../../assets/pluginDefault.svg";

const pluginsData = [
  {
    id: "1",
    title: "Lorem Ipsum",
    subTitle:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam gravida diam, quis maximus ante pulvinar eu. Nullam",
    img: pluginDefaultImage,
  },
  {
    id: "2",
    title: "Lorem Ipsum",
    subTitle:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam gravida diam, quis maximus ante pulvinar eu. Nullam",
    img: pluginDefaultImage,
  },
  {
    id: "3",
    title: "Lorem Ipsum",
    subTitle:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam gravida diam, quis maximus ante pulvinar eu. Nullam",
    img: pluginDefaultImage,
  },
  {
    id: "4",
    title: "Lorem Ipsum",
    subTitle:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam gravida diam, quis maximus ante pulvinar eu. Nullam",
    img: pluginDefaultImage,
  },
  {
    id: "5",
    title: "Lorem Ipsum",
    subTitle:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam gravida diam, quis maximus ante pulvinar eu. Nullam",
    img: pluginDefaultImage,
  },
  {
    id: "6",
    title: "Lorem Ipsum",
    subTitle:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam gravida diam, quis maximus ante pulvinar eu. Nullam",
    img: pluginDefaultImage,
  },
  {
    id: "7",
    title: "Lorem Ipsum",
    subTitle:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam gravida diam, quis maximus ante pulvinar eu. Nullam",
    img: pluginDefaultImage,
  },
  {
    id: "8",
    title: "Lorem Ipsum",
    subTitle:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam gravida diam, quis maximus ante pulvinar eu. Nullam",
    img: pluginDefaultImage,
  },
];

export default function Plugins() {
  return (
    <main className={styles.pluginsContainer}>
      {pluginsData.map((plugin) => (
        <div className={styles.cardSocial} key={plugin.id}>
          <div className={styles.socialContainer}>
            <div className={styles.socialHeader}>
              <div className={styles.socialDescription}>
                <div className={styles.socialTitle}>
                  <h2>{plugin.title}</h2>
                </div>
                <div className={styles.socialText}>
                  <p>{plugin.subTitle}</p>
                </div>
                <div className={styles.socialLinks}>
                  <div className={styles.btn}>
                    <div className={styles.btnContainer}>
                      <a href="" className={styles.btnDiscord}>
                        Detalhes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.socialImg}>
                <img src={plugin.img} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

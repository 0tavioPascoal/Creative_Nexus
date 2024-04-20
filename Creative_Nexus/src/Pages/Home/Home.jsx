//import css
import styles from './styles.module.css'
//svgs and logos
import discordIcon from '../../assets/DiscordLogo.png'
import instagramIcon from '../../assets/InstagramLogo.png'
import youtubeIcon from '../../assets/YouTubeLogo.png'
import creativeNexusIcon from '../../assets/CreativeNexus.png'


export default function Home(){
    return(
    <>
     <section id={styles.sectionHeader}>
      <div classNameName={styles.headerDescription}>
        <div className={styles.descriptionTitle}>
          <h2>Creative Nexus</h2>
        </div>
        <div className={styles.descriptionText}>
          <p>
            Bem-vindo à CreativeNexus, uma comunidade especializada em Minecraft
            focada na criação de builds elaboradas, desenvolvimento de sistemas
            personalizados, design de logotipos e modelagem 3D de itens dentro
            do jogo. Nossa plataforma oferece recursos avançados para
            construtores e desenvolvedores, incluindo tutoriais, ferramentas e
            fóruns de discussão. Junte-se a nós para explorar as possibilidades
            ilimitadas de criação dentro do universo do Minecraft.
          </p>
        </div>
      </div>
    </section>

    <main>
      <div className={styles.cardSocial}>
        <div className={styles.socialContainer}>
          <div className={styles.socialHeader}>
            <div className={styles.socialDescription}>
              <div className={styles.socialTitle}>
                <h2>Siga-nos</h2>
              </div>
              <div className={styles.socialText}>
                <p>
                  Fique conectado com a comunidade do Creative Nexus! Junte-se a
                  nós nas nossas redes sociais e mergulhe em um mundo de
                  inspiração, aprendizado e colaboração.
                </p>
              </div>
              <div className={styles.socialLinks}>
                <div className={styles.btn}>
                  <div className={styles.btnContainer}>
                    <a href="" className={styles.btnDiscord}>Discord</a>
                    <div className={styles.btnIcon}>
                      <img src={discordIcon} />
                    </div>
                  </div>
                </div>
                <div className={styles.btn}>
                  <div className={styles.btnContainer}>
                    <a className={styles.btnCoutube} href="">YouTube</a>
                    <div className={styles.btnIcon}>
                      <img src={youtubeIcon} />
                    </div>
                  </div>
                </div>
                <div className={styles.btn}>
                  <div className={styles.btnContainer}>
                    <a href="" className={styles.btnInstagram}>Instagram</a>
                    <div className={styles.btnIcon}>
                      <img src={instagramIcon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.socialImg}>
              <img src={creativeNexusIcon} />
            </div>
          </div>
        </div>
      </div>
    </main>
    </>  
    )
}
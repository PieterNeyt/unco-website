import styles from './Slides.module.css'

export default function Slides() {
  return (
    <section className="panel" id="s6" style={{ background: 'var(--sand)' }}>
      <div className="panel-inner">
        <div className={styles.layout}>

          {/* Left — description */}
          <div>
            <span className="label reveal">Presentaties</span>
            <div className={`sec-title reveal delay-1`}>Conference<br />Slides</div>
            <div className={`sec-sub reveal delay-2`}>
              Slide decks van onze pitches, workshops en academische presentaties.
              Klik om te bekijken of te downloaden.
            </div>
            <div className={`${styles.techNote} reveal delay-3`}>
              Gebouwd met <strong>Angular</strong> aan de frontend en{' '}
              <strong>Go (Golang)</strong> als backend. Live gekoppeld aan het KdG-rooster,
              Active Directory en Single Sign-On.
            </div>
          </div>

          {/* Right — slide cards grid */}
          <div className={styles.grid}>
            {/*{SLIDES.map((slide, i) => (*/}
            {/*  <a*/}
            {/*    key={slide.num}*/}
            {/*    href={slide.url}*/}
            {/*    className={`${styles.card} reveal delay-${i + 1}`}*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    <div className={`${styles.thumb} ${styles[slide.color]}`}>*/}
            {/*      {slide.emoji}*/}
            {/*    </div>*/}
            {/*    <div className={styles.body}>*/}
            {/*      <div className={styles.num}>{slide.num}</div>*/}
            {/*      <div className={styles.title}>{slide.title}</div>*/}
            {/*    </div>*/}
            {/*  </a>*/}
            {/*))}*/}
          </div>

        </div>
      </div>
    </section>
  )
}

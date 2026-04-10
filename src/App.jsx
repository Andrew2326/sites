



const features = [
  {
    title: 'Modellazione CAD 3D',
    text: 'Creazione di modelli tridimensionali precisi per macchinari industriali, componenti e stampi a iniezione partendo da idee o schemi preliminari.'
  },
  {
    title: 'Messa in Tavola 2D',
    text: 'Disegni tecnici dettagliati, quotati e completi di tolleranze e distinte base, pensati per facilitare la produzione in officina (DWG, PDF).'
  },
  {
    title: 'Preparazione Stampa 3D',
    text: 'Ottimizzazione, taglio e correzione delle geometrie (file STL, 3MF) pronte per essere realizzate in manifattura additiva.'
  }
]

const steps = [
  {
    number: '01',
    title: 'Analisi Progetto',
    text: 'Valutazione del design e dei vincoli produttivi, assicurandosi che il progetto sia realizzabile ed efficiente.'
  },
  {
    number: '02',
    title: 'Sviluppo Tecnico',
    text: 'Costruzione del modello 3D e redazione della tavola tecnica esecutiva, con aggiornamenti durante il processo.'
  },
  {
    number: '03',
    title: 'Consegna File',
    text: 'Rilascio dei ritorni e dei file definitivi nei formati ottimali pronti alla produzione (STEP, DWG, PDF, STL).'
  }
]

const useCases = [
  {
    title: 'Macchinari Industriali',
    text: 'Progettazione e disegno di parti o assiemi completi per automazione e macchine utensili.'
  },
  {
    title: 'Pannelli Solari',
    text: 'Supporto tecnico, schematizzazione e layout di particolari per impianti di fotovoltaico.'
  },
  {
    title: 'Stampi a Iniezione',
    text: 'Disegno dettagliato per la meccanica di precisione e studio degli sformi per lo stampaggio.'
  }
]

export default function App() {


  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeqElCmdn_XoAkQK0B0YqBSRNoSbXGnCYgNHRuVI3DipYdCFQ/viewform?usp=header'
  const emailAddress = 'and999w@outlook.com'
  const whatsappUrl = 'https://wa.me/3793580160'




  return (
    <div className="app-shell">
      <div className="background-layer" aria-hidden="true">
        <div className="background-layer__glow" />
        <div className="background-layer__grid" />
        <div className="background-layer__blur background-layer__blur--one" />
        <div className="background-layer__blur background-layer__blur--two" />
      </div>

      <header className="navbar">
        <div className="navbar__inner">
          <a className="navbar__brand" href="#home">
            <span className="brand-mark__icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 19L19 5" />
                <path d="M7 7h12v12" />
              </svg>
            </span>
            <span>Andrework</span>
          </a>

          <nav className="navbar__menu">
            <a className="navbar__link" href="#servizi">Servizi</a>
            <a className="navbar__link" href="#processo">Processo</a>
            <a className="navbar__link" href="#contatti">Contatti</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy fade-up delay-1">
              <span className="badge-pill">Ingegnere e Progettista Meccanico</span>
              <h1>Progettazione meccanica e disegni tecnici professionali.</h1>
              <p>
                Servizi di modellazione 3D strutturata, messa in tavola 2D e ottimizzazione di file per la produzione: dalla meccanica industriale alla stampa 3D.
              </p>

              <div className="hero-actions">
                <a className="button button--primary" href={googleFormUrl} target="_blank" rel="noopener noreferrer">Invia Dettagli Progetto</a>
                <a className="button button--secondary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Contatto su WhatsApp</a>
              </div>

              <div className="hero-pills">
                <div className="feature-pill">Messe in tavola 2D</div>
                <div className="feature-pill">Progetti CAD 3D</div>
                <div className="feature-pill">Design for Manufacturing</div>
              </div>

              <div className="hero-metrics">
                <div className="metric">
                  <span className="metric__value">24h</span>
                  <span className="metric__label">Primo riscontro rapido</span>
                </div>
                <div className="metric">
                  <span className="metric__value">DWG - OBJ - STEP - STL - 3MF</span>
                  <span className="metric__label">Formati multi-piattaforma</span>
                </div>
                <div className="metric">
                  <span className="metric__value">PDF</span>
                  <span className="metric__label">Consegna fascicoli</span>
                </div>
              </div>
            </div>

            <div className="glass-card hero-visual-card fade-up delay-2">
              <div className="orbit-visual">
                <div className="orbit-visual__outer"></div>
                <div className="orbit-visual__ring"></div>

                <div className="orbit-visual__node orbit-visual__node--one">Mechanical Objects</div>
                <div className="orbit-visual__node orbit-visual__node--two">Industrial Machines</div>
                <div className="orbit-visual__node orbit-visual__node--three">Solar Panels</div>
                <div className="orbit-visual__node orbit-visual__node--four">Injection Molds</div>
                <div className="orbit-visual__node orbit-visual__node--five">3D Printing</div>
                <div className="orbit-visual__core">
                  <div className="orbit-visual__core-icon">A</div>
                  <strong>Andrework</strong>
                  <span>Soluzioni tecniche strutturate, pronte per la produzione.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" id="servizi">
          <div className="container">
            <div className="services-header-grid">
              <div className="section-heading fade-up delay-1">
                <span>I Miei Servizi</span>
                <h2>Sviluppo Tecnico e Modellazione</h2>
                <p>Esperienza specializzata per tradurre le tue idee in disegni concreti e completi agli standard ingegneristici.</p>
              </div>

              <div className="photo-slider photo-slider--compact glass-card fade-up delay-2">
                <div className="photo-slider__track">
                  <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&q=80" alt="Disegno tecnico" className="photo-slider__img" />
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80" alt="Lavorazione meccanica" className="photo-slider__img" />
                  <img src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=400&q=80" alt="Stampante 3D" className="photo-slider__img" />
                  <img src="https://images.unsplash.com/photo-1620021614272-3866205315f4?auto=format&fit=crop&w=400&q=80" alt="Ingegneria" className="photo-slider__img" />

                  <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&q=80" alt="Disegno tecnico" className="photo-slider__img" />
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80" alt="Lavorazione meccanica" className="photo-slider__img" />
                  <img src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=400&q=80" alt="Stampante 3D" className="photo-slider__img" />
                  <img src="https://images.unsplash.com/photo-1620021614272-3866205315f4?auto=format&fit=crop&w=400&q=80" alt="Ingegneria" className="photo-slider__img" />
                </div>
              </div>
            </div>

            <div className="features-grid">
              {features.map((item, index) => (
                <article key={item.title} className={`glass-card feature-card fade-up delay-${index + 1}`}>
                  <div className="feature-card__icon">0{index + 1}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="processo">
          <div className="container">
            <div className="section-heading fade-up delay-1">
              <span>Workflow</span>
              <h2>Come gestisco una commessa</h2>
              <p>Un flusso semplice e trasparente che riduce i tempi e massimizza la qualità finale del progetto esecutivo.</p>
            </div>

            <div className="steps-grid">
              {steps.map((step, index) => (
                <article key={step.title} className={`glass-card step-card fade-up delay-${index + 1}`}>
                  <div className="step-card__number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="settori">
          <div className="container">
            <div className="section-heading fade-up delay-1">
              <span>Settori Operativi</span>
              <h2>Principali ambiti di applicazione</h2>
              <p>Le mie competenze coprono una vasta gamma di contesti nei settori manifatturieri e industriali.</p>
            </div>

            <div className="use-cases-grid">
              {useCases.map((item, index) => (
                <article key={item.title} className={`glass-card use-case-card fade-up delay-${index + 1}`}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section content-section--last" id="contatti">
          <div className="container">
            <div className="glass-card cta-card fade-up delay-1">
              <span className="cta-card__eyebrow">Lavoriamo Insieme</span>
              <h2>Pronto per sviluppare il tuo prossimo progetto?</h2>
              <p>Richiedi una valutazione tecnica inviandomi schizzi e idee, oppure mandami un messaggio per avviare subito le comunicazioni.</p>


              <div className="cta-card__actions">

                <a className="button button--primary" href={googleFormUrl} target="_blank" rel="noopener noreferrer">Apri modulo</a>

                <a className="button button--primary" href={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer">Invia email</a>

                <a className="button button--secondary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>

              <br />
              <div className="cta-card__contact-list">
                {/*  <div className="cta-card__contact-item">Email: <p></p>  <p></p> <a className="cta-card__contact-item" href={`mailto:${emailAddress}`}>{emailAddress}</a> </div>
                  <div className="cta-card__contact-item">Live Chat:  <a className="cta-card__contact-item" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Chat veloce WhatsApp</a> </div>
                  <div className="cta-card__contact-item">Form:  <p>   </p>   <a className="cta-card__contact-item" href={googleFormUrl} target="_blank" rel="noopener noreferrer">Richiesta dettagliata con modulo</a></div> */}


                <div className="cta-card__layout">
                  <div className="cta-card__contact-list">
                    {/*  <a className="cta-card__contact-item" href={`mailto:${emailAddress}`}>{emailAddress}</a>
                  <a className="cta-card__contact-item" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Chat veloce WhatsApp</a>
                  <a className="cta-card__contact-item" href={googleFormUrl} target="_blank" rel="noopener noreferrer">Richiesta dettagliata con modulo</a> annotation */}
                  </div>




                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

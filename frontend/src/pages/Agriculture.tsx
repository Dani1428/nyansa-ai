import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Agriculture = () => {
  const { t } = useTranslation();
  const crops = (t('agriculture.ecosystem.crops', { returnObjects: true }) as any[]) || [];
  const cropIcons = ['energy_savings_leaf', 'water_drop', 'scan'];
  const cropImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCa1_1pLOnaGSLi3SiCpIMWwpVwr0XLho3olCDC9pQRwyshFotZNnLQ_YwMzh8Pq9_kSVvnvX6Drqaj6HlhSitAlUfKW9HmgPeUNM45BRbsAUn6HTpEDHY8-UG-V3PT98PVsqZzZ1PFaAwskQ3JuV_RbeI7fxkYsPNu6_gnsZvO2a4YUhAZ0VW72tGofchhthckKfom0ZrYDkg5OMH5Ccd3kUwYIegg-NqS-nXowo_DaIxDlv3kCDJ6CUXUFRQKBq_-c5PgZ6--VMAx',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBYF1q4cGVsz-4gLH5S53FqK_4nUToxeVCJYIwo1immPeuYbjYEvx-Vfv0uCkCJYi3olIo6AtkjcCVldTdBw9VqvI1Y7AmnT_hs4jTcBGHP41deyMx5xekckcucEG5njE0TCLos4U3v3-wJUEBv6iApILmJU8MBXvg7CU_rHgxODD_4sHiojLKS5uJvH48RoQDoCy1LnpsIuuVir7AH7vrfRXsMgl7tzLIE4lNI6h8kaREPYV487D-nYXiPi2WSczxVKbI_ddgUMo9T',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDnBKDsFXb_Yz4CtQf6PGid3FB6CZj-wb2JBlPlgyBP2RSXN1dKSpBETBy9iAfSP8U-dyfM-CrHvChsFDEAT_IJvjcbGu0KF-xdRtE-GUejVnuywFa6Q8o8yD7rEipSDFMdwNCr8zIqoWTkoo6nPj1DYhakjctG-9myPWdYISR9F1r0zoZZqfbr8j1u7kBi0Uxk_cToTidil0ISs7nfrcbD_MOS8BNLrrusy6UuklHaWWgX0oqHNZGrNk__cAUF8gx30u--ex8UPLSc'
  ];

  return (
    <>
      <Helmet>
        <title>Precision Agri-Tech Intelligence & Field Data | nyansa</title>
        <meta name="description" content="Bridging the gap between fieldwork and science. High-resolution imagery and localized voice models for crop disease detection and yield optimization." />
        <meta property="og:title" content="Precision Agri-Tech Intelligence & Field Data | nyansa" />
      </Helmet>

      <div style={{ marginTop: '5rem' }}>
        {/* Hero */}
        <section style={{ position: 'relative', height: '870px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCwnC0Aglt6H7gvOuI0hqkdd5cn96K2ofJCSaK2ldmDz10F4bUSeWpiPPmU0KL80wmFDmcD7cjE-vZJJXXCyK_xEqnA8v55rHAOpqk48_8NasaLmt7iKF31MOn3zq8SvdSb2QEIZUtwjAOCXdlIW7p7lKjMsToAPsP790oqOJcktzC_a_rZI-PIDGIVIKhQoOdq6ZxtvHfNNZpcMlOCtrC9hMksqvsP00hi1jcGuZpNR-Pf2OGCZTR6EkscBCUQdqquylNMiusyYlL" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Plantation" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0, 32, 24, 0.8), rgba(0, 32, 24, 0.4), transparent)' }}></div>
          </div>
          <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
            <div style={{ maxWidth: '700px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.25rem 0.75rem', borderRadius: '9999px', backgroundColor: 'var(--color-primary-container)', color: 'var(--color-on-primary-container)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
                <span style={{ marginRight: '0.5rem' }}>●</span> {t('agriculture.hero.badge')}
              </div>
              <h1 style={{ color: '#fff', fontSize: '4.5rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1, letterSpacing: '-0.05em' }}>
                {t('agriculture.hero.title')}
              </h1>
              <p style={{ fontSize: '1.25rem', color: '#eef2ee', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '500px' }}>
                {t('agriculture.hero.desc')}
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button className="btn-primary" style={{ height: '3rem', padding: '0 2rem', borderRadius: '0.75rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {t('agriculture.hero.btn1')} <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>arrow_forward</span>
                </button>
                <button className="btn-outline" style={{ borderColor: '#fff', color: '#fff', height: '3rem', padding: '0 2rem', borderRadius: '0.75rem', fontSize: '1rem' }}>{t('agriculture.hero.btn2')}</button>
              </div>
            </div>

            {/* Hero Overlays */}
            <div style={{ position: 'absolute', bottom: '3rem', right: '0', display: 'flex', flexDirection: 'column', gap: '1rem', width: '24rem' }} className="hidden xl:flex">
              <div className="glass-panel" style={{ padding: '1rem', borderRadius: '0.75rem', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{t('agriculture.hero.diag')}</div>
                <div style={{ width: '100%', height: '0.5rem', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '999px', marginBottom: '0.25rem' }}>
                  <div style={{ width: '75%', height: '100%', backgroundColor: 'var(--color-primary)', borderRadius: '999px' }}></div>
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>{t('agriculture.hero.opt')}</div>
              </div>
              <div className="glass-panel" style={{ padding: '1rem', borderRadius: '0.75rem', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>{t('agriculture.hero.model')}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>Wolof / Akan / French</div>
                <div style={{ fontSize: '10px', color: 'var(--color-on-surface-variant)', marginTop: '0.25rem' }}>{t('agriculture.hero.voices')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Crops */}
        <section style={{ padding: '8rem 0', backgroundColor: '#fff' }}>
          <div className="container">
            <div className="flex justify-between items-end" style={{ marginBottom: '4rem', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ maxWidth: '600px' }}>
                <h2 style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--color-primary)', letterSpacing: '0.2em', marginBottom: '1rem' }}>{t('agriculture.ecosystem.badge')}</h2>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.1 }}>{t('agriculture.ecosystem.title')}</h3>
              </div>
              <p style={{ maxWidth: '400px', color: 'var(--color-on-surface-variant)', fontSize: '0.875rem' }}>
                {t('agriculture.ecosystem.desc')}
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {crops.map((crop, i) => (
                <div key={i} className="crop-card">
                  <div style={{ height: '16rem', overflow: 'hidden', borderRadius: '0.5rem', position: 'relative' }}>
                    <img src={cropImages[i]} alt={crop.title} className="crop-card-img" />
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                      <span style={{ backgroundColor: 'rgba(0, 96, 76, 0.9)', color: '#fff', fontSize: '10px', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{crop.tag}</span>
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div className="flex items-center gap-8" style={{ marginBottom: '0.75rem' }}>
                      <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'rgba(31, 122, 99, 0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="material-symbols-outlined">{cropIcons[i]}</span>
                      </div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{crop.title}</h4>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>{crop.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bento Grid */}
        <section style={{ padding: '8rem 0', backgroundColor: 'var(--color-surface-container-low)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--color-primary)', letterSpacing: '0.2em', marginBottom: '1rem' }}>{t('agriculture.bento.badge')}</h2>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.025em' }}>{t('agriculture.bento.title')}</h3>
            </div>
            <div className="bento-grid">
              <div className="bento-item" style={{ gridColumn: 'span 8', gridRow: 'span 2', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', opacity: 0.2 }}>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRl3IKuogc7q4zeNusTOpV_i4dyVWukhu5hSxN2G6xFkOLMErMignlZthf_DmUDzVGbIyGqytet7rtjYL0EBX2C0JceKL4m4TrDy3z0PLzw40dJSEgbTLhTfUY3ZAddnC8-wGmt6S3TxVYEdbcIFauGFJPyjUuuNKm5pS73R9Hd0tbsrXlB75zMBiHZq3Yp32vkJthjqwjUFn-DLyQBIqFF3kNrpCSXCOWQZHPg3kyBpWdKO8pkWTuyvlR9djTl48zqieomtvRORND" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} alt="Data Vis" />
                </div>
                <div style={{ maxWidth: '500px', position: 'relative', zIndex: 10 }}>
                  <div style={{ width: '3rem', height: '3rem', backgroundColor: 'rgba(31, 122, 99, 0.1)', color: 'var(--color-primary)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>photo_camera</span>
                  </div>
                  <h4 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>{t('agriculture.bento.image_t')}</h4>
                  <p style={{ fontSize: '1.125rem', lineHeight: 1.625, color: 'var(--color-on-surface-variant)', marginBottom: '2rem' }}>
                    {t('agriculture.bento.image_d')}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', position: 'relative', zIndex: 10 }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, padding: '0.25rem 0.75rem', backgroundColor: 'var(--color-surface-container-highest)', borderRadius: '999px' }}>1.2M LABELS</span>
                  <span style={{ fontSize: '10px', fontWeight: 800, padding: '0.25rem 0.75rem', backgroundColor: 'var(--color-surface-container-highest)', borderRadius: '999px' }}>4K RESOLUTION</span>
                </div>
              </div>
              <div className="bento-item" style={{ gridColumn: 'span 4', gridRow: 'span 1', backgroundColor: 'var(--color-primary)', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined">record_voice_over</span>
                  </div>
                  <span className="material-symbols-outlined" style={{ opacity: 0.5 }}>waves</span>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{t('agriculture.bento.voices_t')}</h4>
                  <p style={{ fontSize: '0.875rem', opacity: 0.8, color: '#b1ffe4' }}>{t('agriculture.bento.voices_d')}</p>
                </div>
              </div>
              <div className="bento-item" style={{ gridColumn: 'span 4', gridRow: 'span 1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ width: '2.5rem', height: '2.5rem', backgroundColor: 'rgba(133, 64, 54, 0.1)', color: 'var(--color-tertiary)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <span className="material-symbols-outlined">description</span>
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{t('agriculture.bento.diag_t')}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)' }}>{t('agriculture.bento.diag_d')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section style={{ padding: '8rem 0', backgroundColor: '#fff' }}>
          <div className="container">
            <div style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--color-primary)', letterSpacing: '0.2em', marginBottom: '1rem' }}>{t('agriculture.impact.badge')}</h2>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.025em', maxWidth: '600px' }}>{t('agriculture.impact.title')}</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              {[
                { title: t('agriculture.impact.c1_t'), desc: t('agriculture.impact.c1_d'), icon: 'bug_report', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaUyTFD1JcSo0ngpJ1zyybNezJnnO9UZz8k8VNzrAdUKmAQsPyrYrm1WVM1hESpVORlNS5DBEGEEVpHv7xyCr-HxVbKwU4DU_ddGpMnx60a5n2bx1gVfLr7P1NmwAiP0MXiixBeDnBPtcXHzUkPwrU8IBirNBaJfaCAi2g67ewuXcfw8fB99II9fNUMrfItw5LMz5kzOAA-aCZEFGjG6juBk2NSi5CWunQ6eJe6RXNSiUU2qBlolyC4cFKOv19QrJyHAMbJDmEA3gc' },
                { title: t('agriculture.impact.c2_t'), desc: t('agriculture.impact.c2_d'), icon: 'mic_external_on', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh1vbg6ZIdriGEfPN_pqEkpbpb9d-jo7cU19vxcyIM0E48WByZsSmJ4xuCPZPSpFSERBrWtDH2MBusfCn3UXpu6G9wXsQwIMSXLAOwyS3Z9xB_hSofpKvVG91y37qXXHPFD47nlXYiqorJqGITX226697ab-HegrR11IkNj3RGbSzpIpVWtjMsKlHkGFJsT9GNKY-B8bDxxHMOTum0sZaeRcjR4SmbC_Ki3WEnz4xya98AAB1T352HZjTalWdtZwl0sf5we0HCsXrL' },
                { title: t('agriculture.impact.c3_t'), desc: t('agriculture.impact.c3_d'), icon: 'analytics', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbyfDaOTQprzVWvvZkhMHpwi2bbu_rktFifx7EkcJHDTwgZS9Lr4CJlQReDzGKK5PFRQQZLdU-vp_yOEUKnJrOmytXQaPnaP-EBMnKSlX1AJqwv4nCzAAfW9tDsQ4Ed3D0mF4n22W6umiSQK-KUNK80hjcnIrCZmXyTkhGqx7DjdZ2O4zQtRWtkhNBjddLVzaU-Dh6rYKfP1dHOnClPZ4Vq_Mslstls4Lau8DlNsxRAigLkYdlA80DdV-mRA2og8YadLLiZMIwWuHJ' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ aspectRatio: '1/1', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '4px solid #fff' }}>
                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>{item.icon}</span>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Agriculture;

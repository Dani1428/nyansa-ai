import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('privacy.title')} | nyansa</title>
        <meta name="description" content="Privacy Policy and Data Protection at nyansa." />
      </Helmet>

      <div style={{ marginTop: '5rem', backgroundColor: 'var(--color-surface)' }}>
        {/* Simple Header */}
        <section style={{ padding: '6rem 0 4rem 0', borderBottom: '1px solid var(--color-outline-variant)' }}>
          <div className="container">
            <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-primary)', letterSpacing: '0.2em', marginBottom: '1rem', display: 'block' }}>
              {t('privacy.last_updated')}
            </span>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--color-primary)', letterSpacing: '-0.025em', marginBottom: '1.5rem' }}>
              {t('privacy.title')}
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-on-surface-variant)', maxWidth: '600px', lineHeight: 1.6 }}>
              {t('privacy.intro')}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section style={{ padding: '6rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '800px' }}>
              <div style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>{t('privacy.sections.data_collection.title')}</h2>
                <p style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {t('privacy.sections.data_collection.content')}
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[1, 2, 3].map(i => (
                    <li key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)', fontSize: '1.25rem' }}>check_circle</span>
                      <span style={{ color: 'var(--color-on-surface-variant)', fontWeight: 500 }}>{t(`privacy.sections.data_collection.items.${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>{t('privacy.sections.rights.title')}</h2>
                <p style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {t('privacy.sections.rights.content')}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} style={{ padding: '1.25rem', backgroundColor: 'var(--color-surface-container-lowest)', borderRadius: '1rem', border: '1px solid var(--color-outline-variant)' }}>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{t(`privacy.sections.rights.items.${i}.title`)}</h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.5 }}>{t(`privacy.sections.rights.items.${i}.desc`)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>{t('privacy.sections.legal_basis.title')}</h2>
                <p style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.7 }}>
                  {t('privacy.sections.legal_basis.content')}
                </p>
              </div>

              <div style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>{t('privacy.sections.retention.title')}</h2>
                <p style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.7 }}>
                  {t('privacy.sections.retention.content')}
                </p>
              </div>

              <div style={{ padding: '2.5rem', backgroundColor: 'var(--color-surface-container-low)', borderRadius: '1.5rem', border: '1px solid var(--color-outline-variant)' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--color-primary)' }}>{t('privacy.sections.contact.title')}</h2>
                <p style={{ color: 'var(--color-on-surface-variant)', marginBottom: '1.5rem' }}>
                  {t('privacy.sections.contact.content')}
                </p>
                <a href="mailto:privacy@nyansa.ai" style={{ color: 'var(--color-secondary)', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="material-symbols-outlined">mail</span> privacy@nyansa.ai
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Privacy;

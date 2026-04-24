import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CTAHome: FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ 
          backgroundColor: 'var(--color-primary)', 
          borderRadius: '2rem', 
          padding: '5rem 3rem', 
          textAlign: 'center', 
          position: 'relative', 
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 96, 76, 0.2)'
        }}>
          {/* Decorative Blur */}
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            right: 0, 
            width: '24rem', 
            height: '24rem', 
            backgroundColor: 'rgba(255,255,255,0.05)', 
            borderRadius: '50%', 
            transform: 'translate(50%, -50%)', 
            filter: 'blur(64px)' 
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 style={{ color: '#fff', fontSize: '3rem', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-0.025em' }}>
              {t('home.cta.title')}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.25rem', maxWidth: '40rem', margin: '0 auto 3rem', lineHeight: 1.6 }}>
              {t('home.cta.desc')}
            </p>
            <Link to="/contact">
              <button style={{ 
                backgroundColor: '#fff', 
                color: 'var(--color-primary)', 
                padding: '1rem 2.5rem', 
                borderRadius: '0.75rem', 
                fontWeight: 900, 
                fontSize: '1.125rem', 
                border: 'none', 
                cursor: 'pointer',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s'
              }} className="active:scale-95 transform">
                {t('home.cta.start')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAHome;

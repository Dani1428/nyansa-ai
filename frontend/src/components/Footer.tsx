import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/LOGOIA2.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer style={{ width: '100%', padding: '4rem 0', borderTop: '1px solid #E5E5E5', backgroundColor: '#ffffff' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <img src={logo} alt="nyansa Logo" style={{ height: '80px', objectFit: 'contain' }} />
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-outline-variant)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, lineHeight: 1.6 }}>
            {t('footer.copyright')}
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-on-surface)', marginBottom: '1.5rem' }}>
            {t('footer.company')}
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><Link to="/about" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--color-outline-variant)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary-container)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-outline-variant)'}>{t('nav.about')}</Link></li>
            <li><Link to="/services" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--color-outline-variant)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary-container)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-outline-variant)'}>{t('nav.services')}</Link></li>
            <li><Link to="/datasets" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--color-outline-variant)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary-container)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-outline-variant)'}>{t('nav.datasets')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-on-surface)', marginBottom: '1.5rem' }}>
            {t('footer.legal')}
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><Link to="/privacy" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--color-outline-variant)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary-container)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-outline-variant)'}>{t('privacy.title')}</Link></li>
            <li><Link to="/contact" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--color-outline-variant)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary-container)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-outline-variant)'}>{t('nav.contact')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-on-surface)', marginBottom: '1.5rem' }}>
            {t('footer.support')}
          </h4>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              placeholder="Email" 
              style={{ 
                backgroundColor: '#F5F5F5', 
                border: '1px solid transparent', 
                borderRadius: '0.5rem', 
                height: '2.5rem',
                padding: '0 0.75rem', 
                fontSize: '0.75rem', 
                width: '100%',
                outline: 'none',
                transition: 'border-color 0.2s'
              }} 
              onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={(e) => e.target.style.borderColor = 'transparent'}
            />
            <button style={{ backgroundColor: 'var(--color-primary-container)', color: '#fff', border: 'none', borderRadius: '0.5rem', height: '2.5rem', padding: '0 1rem', display: 'flex', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(0.95)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Linguistic Dataset Acquisition',
    message: ''
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('http://localhost:8000/api/v1/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
          company: formData.company,
          project_type: formData.projectType,
          message: formData.message
        }),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: t('contact.form.success') });
        setFormData({ name: '', email: '', company: '', projectType: 'Linguistic Dataset Acquisition', message: '' });
      } else {
        setStatus({ type: 'error', message: t('contact.form.error') });
      }
    } catch (error) {
      console.error('Submit error:', error);
      setStatus({ type: 'error', message: t('contact.form.server_error') });
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('nav.contact')} | nyansa</title>
        <meta name="description" content="Get in touch with AgriLingua AI for custom dataset curation and AI consulting." />
      </Helmet>

      <div style={{ marginTop: '5rem' }}>
        <main className="container" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
          <div style={{ marginBottom: '4rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em' }}>{t('contact.header.badge')}</span>
            <h1 style={{ fontSize: '3.125rem', fontWeight: 900, marginTop: '1rem', lineHeight: 1, letterSpacing: '-0.025em', color: 'var(--color-on-surface)' }}>
              {t('contact.header.title')}
            </h1>
            <p style={{ marginTop: '1.5rem', maxWidth: '672px', fontSize: '1.125rem', lineHeight: 1.625, color: 'var(--color-on-surface-variant)' }}>
              {t('contact.header.desc')}
            </p>
          </div>

          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrapper" style={{ 
              backgroundColor: '#ffffff', 
              borderRadius: '12px', 
              padding: '2.5rem', 
              boxShadow: '0px 4px 20px rgba(15, 23, 42, 0.05)',
              border: '1px solid #E5E5E5',
              position: 'relative'
            }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--color-on-surface)' }}>{t('contact.form.title')}</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <div className="flex flex-col" style={{ gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-on-surface-variant)' }}>{t('contact.form.name')}</label>
                      <input 
                        type="text" name="name" value={formData.name} onChange={handleChange} required 
                        placeholder="John Doe"
                        style={{ width: '100%', boxSizing: 'border-box', backgroundColor: '#F5F5F5', border: '1px solid transparent', borderRadius: '12px', height: '3rem', padding: '0 1rem', transition: 'all 0.3s', color: 'var(--color-on-surface)', outline: 'none' }}
                        onFocus={(e) => { e.target.style.borderColor = 'var(--color-primary)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'transparent'; }}
                      />
                    </div>
                    <div className="flex flex-col" style={{ gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-on-surface-variant)' }}>{t('contact.form.email')}</label>
                      <input 
                        type="email" name="email" value={formData.email} onChange={handleChange} required 
                        placeholder="john@company.com"
                        style={{ width: '100%', boxSizing: 'border-box', backgroundColor: '#F5F5F5', border: '1px solid transparent', borderRadius: '12px', height: '3rem', padding: '0 1rem', transition: 'all 0.3s', color: 'var(--color-on-surface)', outline: 'none' }}
                        onFocus={(e) => { e.target.style.borderColor = 'var(--color-primary)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'transparent'; }}
                      />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <div className="flex flex-col" style={{ gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-on-surface-variant)' }}>{t('contact.form.company')}</label>
                      <input 
                        type="text" name="company" value={formData.company} onChange={handleChange}
                        placeholder="AgriTech Solutions"
                        style={{ width: '100%', boxSizing: 'border-box', backgroundColor: '#F5F5F5', border: '1px solid transparent', borderRadius: '12px', height: '3rem', padding: '0 1rem', transition: 'all 0.3s', color: 'var(--color-on-surface)', outline: 'none' }}
                        onFocus={(e) => { e.target.style.borderColor = 'var(--color-primary)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'transparent'; }}
                      />
                    </div>
                    <div className="flex flex-col" style={{ gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-on-surface-variant)' }}>{t('contact.form.type')}</label>
                      <select 
                        name="projectType" value={formData.projectType} onChange={handleChange}
                        style={{ width: '100%', boxSizing: 'border-box', backgroundColor: '#F5F5F5', border: '1px solid transparent', borderRadius: '12px', height: '3rem', padding: '0 1rem', transition: 'all 0.3s', appearance: 'none', color: 'var(--color-on-surface)', outline: 'none', cursor: 'pointer' }}
                        onFocus={(e) => { e.target.style.borderColor = 'var(--color-primary)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'transparent'; }}
                      >
                        <option>Linguistic Dataset Acquisition</option>
                        <option>Custom AI Model Training</option>
                        <option>Agricultural Data Science Consulting</option>
                        <option>Software Localization</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col" style={{ gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-on-surface-variant)' }}>{t('contact.form.message')}</label>
                    <textarea 
                      name="message" value={formData.message} onChange={handleChange} required 
                      placeholder="Tell us about your objectives..." rows={5}
                      style={{ width: '100%', boxSizing: 'border-box', backgroundColor: '#F5F5F5', border: '1px solid transparent', borderRadius: '12px', padding: '1rem', transition: 'all 0.3s', color: 'var(--color-on-surface)', outline: 'none', resize: 'vertical' }}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--color-primary)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'transparent'; }}
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    style={{ 
                      height: '3rem', 
                      borderRadius: '12px', 
                      width: '100%', 
                      backgroundColor: 'var(--color-primary-container)', 
                      color: 'var(--color-on-primary-container)', 
                      fontSize: '1rem', 
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    {t('contact.form.submit')}
                  </button>
                  {status.type && (
                    <div style={{ 
                      padding: '1rem', 
                      borderRadius: '0.5rem', 
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: status.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                      color: status.type === 'success' ? '#10b981' : '#ef4444',
                      border: `1px solid ${status.type === 'success' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`
                    }}>
                      <span className="material-symbols-outlined">{status.type === 'success' ? 'check_circle' : 'error'}</span>
                      {status.message}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <div style={{ backgroundColor: 'var(--color-secondary-container)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(0, 109, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '3rem', height: '3rem', backgroundColor: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                    <span className="material-symbols-outlined">chat</span>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, color: 'var(--color-on-secondary-container)' }}>{t('contact.info.whatsapp')}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-on-secondary-container)', opacity: 0.8 }}>{t('contact.info.whatsapp_d')}</p>
                  </div>
                </div>
                <button style={{ backgroundColor: 'var(--color-secondary)', color: '#fff', border: 'none', padding: '0.5rem 1.25rem', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 700 }}>Message</button>
              </div>

              <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)' }}>
                <div style={{ width: '3rem', height: '3rem', backgroundColor: 'var(--color-surface-container-low)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                  <span className="material-symbols-outlined">alternate_email</span>
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, color: 'var(--color-on-surface)' }}>{t('contact.info.email_t')}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)' }}>hello@agrilingua-ai.com</p>
                </div>
              </div>

              <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)' }}>
                <div style={{ width: '3rem', height: '3rem', backgroundColor: 'var(--color-surface-container-low)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, color: 'var(--color-on-surface)' }}>{t('contact.info.hq_t')}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)' }}>{t('contact.info.hq_desc')}</p>
                </div>
              </div>

              <div style={{ position: 'relative', height: '300px', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)' }}>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnu2s3lMc6vd849rEHptJALfY2qJ4CaUXSkIlY5a2cAY_nom0tWdPCu0TRsvuUjWL-_JE0Ja0ryGBMbgLfk6QA6kveJOnKwj7ElpNUzUlGne9QJKEj8_nFu5bJ6skGi0qzaSfOV4fhQJrkhdezfzN4TEwlgcbqLNZXmt44pBvqPpiwjfF_gEV9SZ-YeEkStFVuAUUWen1pI0gSiNkEad-ol6UQrFK85O49OT_RLRikYdKiIt9lls7pmeXQll13e6Sax25OEtDICuC2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="HQ" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}></div>
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', color: '#fff' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{ backgroundColor: 'var(--color-secondary)', fontSize: '0.625rem', padding: '0.125rem 0.5rem', borderRadius: '0.25rem', textTransform: 'uppercase', fontWeight: 800 }}>Office</span>
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 900 }}>{t('contact.info.hub_t')}</h4>
                  <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>{t('contact.info.hub_d')}</p>
                </div>
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '0.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.25rem' }}>map</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;

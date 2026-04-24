import { useTranslation } from 'react-i18next';

const ServicesHome = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: 'description',
      title: t('home.services.text.title'),
      desc: t('home.services.text.desc')
    },
    {
      icon: 'mic',
      title: t('home.services.audio.title'),
      desc: t('home.services.audio.desc')
    },
    {
      icon: 'image_search',
      title: t('home.services.image.title'),
      desc: t('home.services.image.desc')
    },
    {
      icon: 'database',
      title: t('home.services.dataset.title'),
      desc: t('home.services.dataset.desc')
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">{t('home.services.title')}</h2>
          <div className="section-underline"></div>
        </div>
        <div className="services-grid">
          {services.map((svc, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon-wrap">
                <span className="material-symbols-outlined">{svc.icon}</span>
              </div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;

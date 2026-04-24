import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DatasetsPreview: FC = () => {
  const { t } = useTranslation();

  // Load the text content from translations
  const previewsContent = t('home.datasets.previews', { returnObjects: true }) as Array<{
    title: string;
    type: string;
    desc: string;
    lang: string;
  }>;

  // Combine with hardcoded images
  const images = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCUyJoXsNBPoBOlUrVFux3JXO8-bK-g1NuT9E2TgDoDlywyVcUxbmq29N5Uu9NJ2OcYPHwSd2mt5JHReZQP0jKGn4nw9Ch3yKoJ7-0hXJ5VMpqUEobJVKs2DTzZ2VyIpo1cQceRGoi6QWaqyEw-mx8z3_eVcUckN7ufsWF6zXI7hrxsnbkVzYzvlEDuO0DX-m0h6wJl3Di7CoqzmM0RwfdIJAb2yRIMn6NDaQlIsCil7yDk9Ep23OFffkhMaNUtbiZQ7t5rb6oqMCIz',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA2KaVxEanGkZojm778QE66Vp1JKDHhpMertGmKztolnDZ_C4IR_Au43XEvuQnGF17Gu9Tb7JGZOkgxwIYKD7fmkDrANvrWWqbyH5Y_l5vVuJ1RJW4m-D6gmfZ90QmLMrjMkAwgXxrj0Okx9_D0Sz47NY9qioiUBjSe_H_NVhWDFGujpwcnmENXcO0g3KNAo2B6SIz1HRKQzlI7jfzTPUDFEyrEWOZ44IlBJ68kp8Xm3MJn7MwVhejhJWDfd8nnEktf17axZUCJvwhL',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuANNIb2akfT2OkDHIMsDijapHBT1c9mlL1HKjWKsR7JIKZF3qaWeRfY2tLM6VczGxCegoQqwsS8ixby3i99mI_BzoYaXhnpKMMaQwu62v84YnTQe4wxuXdjZRlvkDyH4Ugkkn-9hfvbWP5w_wgrroueuku_ZV2TjPySWsPEzm4brdTY-LteyI799RyPS1iHsOrmI4hwJH5g31DL2DZu-5hVBplfVJ5QFcxleKgUjUvTjmJpNAfNPQB3cYRBFbQxWKJdhQ2hzlgJYLaR'
  ];

  const previews = (Array.isArray(previewsContent) ? previewsContent : []).map((content, index) => ({
    ...content,
    image: images[index] || images[0]
  }));

  return (
    <section style={{ padding: '8rem 0', backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.025em', marginBottom: '0.5rem' }}>{t('home.datasets.title')}</h2>
            <p style={{ color: 'var(--color-on-surface-variant)', fontWeight: 600 }}>{t('home.datasets.desc')}</p>
          </div>
          <Link to="/datasets" style={{ color: 'var(--color-primary)', fontWeight: 800, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            {t('home.datasets.browse_all')} <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span>
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {previews.map((ds, i) => {
            const isAudio = ds.type && ds.type.toLowerCase().includes('audio');
            const isImage = ds.type && ds.type.toLowerCase().includes('image');
            
            return (
              <div key={i} className="dataset-card" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={ds.image} alt={ds.title} style={{ width: '100%', height: '12rem', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ 
                    backgroundColor: isAudio ? 'rgba(74, 225, 131, 0.2)' : isImage ? 'rgba(31, 122, 99, 0.1)' : 'rgba(133, 64, 54, 0.1)', 
                    color: isAudio ? 'var(--color-on-secondary-container)' : isImage ? 'var(--color-primary)' : 'var(--color-tertiary)', 
                    fontSize: '10px', fontWeight: 800, padding: '0.25rem 0.5rem', borderRadius: '0.25rem', textTransform: 'uppercase', width: 'fit-content', marginBottom: '1rem' 
                  }}>
                    {ds.type}
                  </span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.3 }}>{ds.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)', marginBottom: '1.5rem', flexGrow: 1 }}>{ds.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--color-surface-container-low)' }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-on-surface-variant)' }}>{t('home.datasets.language')}: {ds.lang}</span>
                    <button style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontWeight: 800, fontSize: '0.875rem', cursor: 'pointer', padding: 0 }}>{t('home.datasets.view_details')}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DatasetsPreview;

import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface Dataset {
  id: number;
  title: string;
  dataset_type: string;
  language: string;
  size_info: string;
  sector: string;
  icon: string;
}

const Datasets = () => {
  const { t } = useTranslation();
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for initial UI dev
  const mockDatasets: Dataset[] = [
    { id: 1, title: 'East African Maize Pest Dialogue', dataset_type: 'Text Corpus', language: 'Swahili', size_info: '4.2M Tokens', sector: 'Crop Pathology', icon: 'article' },
    { id: 2, title: 'Amharic Agronomy Extension Speech', dataset_type: 'Audio', language: 'Amharic', size_info: '850 Hours', sector: 'Extension Services', icon: 'mic' },
    { id: 3, title: 'Cassava Disease Visual Catalog', dataset_type: 'Image + Metadata', language: 'Multilingual', size_info: '12k Images', sector: 'Root Crops', icon: 'photo_library' },
    { id: 4, title: 'Hausa Soil Fertility Transactions', dataset_type: 'Text Corpus', language: 'Hausa', size_info: '1.8M Tokens', sector: 'Soil Nutrition', icon: 'history_edu' }
  ];

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/datasets/')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setDatasets(data);
        } else {
          setDatasets(mockDatasets);
        }
        setLoading(false);
      })
      .catch(() => {
        setDatasets(mockDatasets);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>African Linguistic & Agricultural Dataset Catalog | nyansa</title>
        <meta name="description" content="Browse curated datasets for African languages (Swahili, Wolof, Akan, etc.) and crop health monitoring. Ready-to-use ground truth for precision AI training." />
        <meta property="og:title" content="African Linguistic & Agricultural Dataset Catalog | nyansa" />
      </Helmet>

      <div style={{ marginTop: '5rem' }}>
        <main className="container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
          <div style={{ marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.025em', color: 'var(--color-on-surface)', marginBottom: '1rem' }}>{t('datasets.title')}</h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.625, color: 'var(--color-on-surface-variant)', maxWidth: '700px' }}>
              {t('datasets.desc')}
            </p>
          </div>

          <div className="catalog-layout">
            {/* Sidebar Filters */}
            <aside className="sidebar">
              <div className="filter-group">
                <h3 className="filter-title">{t('datasets.filters.lang')}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {['Swahili', 'Amharic', 'Hausa', 'Wolof', 'Akan', 'Dioula'].map(lang => (
                    <label key={lang} className="filter-option">
                      <input type="checkbox" defaultChecked={true} />
                      <span>{lang}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="filter-group">
                <h3 className="filter-title">{t('datasets.filters.type')}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {['Text Corpus', 'Audio', 'Image', 'Tabular'].map(type => (
                    <label key={type} className="filter-option">
                      <input type="checkbox" defaultChecked={true} />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="filter-group">
                <h3 className="filter-title">{t('datasets.filters.sector')}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {['Crop Pathology', 'Cacao Health', 'Extension Services', 'Soil Nutrition', 'Root Crops'].map(sector => (
                    <label key={sector} className="filter-option">
                      <input type="checkbox" defaultChecked={true} />
                      <span>{sector}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Grid */}
            <div style={{ flexGrow: 1 }}>
              {loading ? (
                <div style={{ textAlign: 'center', padding: '5rem', color: 'var(--color-on-surface-variant)' }}>{t('datasets.loading')}</div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                  {datasets.map(ds => (
                    <div key={ds.id} className="dataset-card">
                      <div className="flex justify-between items-start" style={{ marginBottom: '1.25rem' }}>
                        <span style={{ 
                          backgroundColor: ds.dataset_type.includes('Audio') ? 'rgba(163, 87, 76, 0.1)' : 'rgba(31, 122, 99, 0.1)', 
                          color: ds.dataset_type.includes('Audio') ? 'var(--color-tertiary)' : 'var(--color-primary)', 
                          fontSize: '0.625rem', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.05em' 
                        }}>
                          {ds.dataset_type}
                        </span>
                        <span className="material-symbols-outlined" style={{ color: 'var(--color-outline-variant)', fontSize: '1.5rem' }}>{ds.icon || 'database'}</span>
                      </div>
                      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-on-surface)' }}>{ds.title}</h2>
                      <div className="flex items-center gap-16" style={{ marginBottom: '1.5rem', color: 'var(--color-on-surface-variant)', fontSize: '0.875rem' }}>
                        <div className="flex items-center gap-4">
                          <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>language</span>
                          {ds.language}
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>{ds.dataset_type.includes('Audio') ? 'schedule' : 'database'}</span>
                          {ds.size_info}
                        </div>
                      </div>
                      <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--color-surface-container-low)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', fontStyle: 'italic', color: 'var(--color-on-surface-variant)' }}>Sector: {ds.sector}</span>
                        <Link to="/contact"><button className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>{t('datasets.card.request')}</button></Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Banner */}
              <div className="dataset-banner">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWyBdJ_bNMn_ezo1bu32GcavTPXfO5kFwZeCHJjy9Qv0kSEc4Scfgihubwvo0xUtDY2sIx3cKcUSX4eZWD5V1QL_PXQ_pj3AB3Rc3Yrk6xN4HGAqQhri2l8p_st4eIH8g3dYSXLuG-CFz1zZGETk8QfDSGFKxTCqA_VKWB8MMhvAqM7fdfSRiuImdJra8ifRqAav0ja82RtSOddOZ-aAnYCIKQYp85nEj68x3iqjuIHMR0aCRfW8JHbAv2Tlu15T6AuRVVUmq0dLF6" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Banner" />
                <div className="dataset-banner-overlay">
                  <h4 style={{ color: '#fff', fontSize: '1.75rem', fontWeight: 900, marginBottom: '0.5rem', letterSpacing: '-0.025em' }}>{t('datasets.banner.title')}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem', maxWidth: '350px', marginBottom: '1.5rem', lineHeight: 1.5 }}>{t('datasets.banner.desc')}</p>
                  <Link to="/contact"><button className="btn-primary" style={{ backgroundColor: '#fff', color: 'var(--color-primary)', width: 'fit-content', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>{t('datasets.banner.btn')}</button></Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Datasets;

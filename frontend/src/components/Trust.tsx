import { useTranslation } from 'react-i18next';

const Trust = () => {
  const { t } = useTranslation();

  return (
    <section className="trust-section">
      <div className="container">
        <p className="trust-title">{t('home.trust')}</p>
        <div className="trust-logos">
          <img alt="Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH0zYrsi6s_KSgFu5rKTDGHpMdI5H8tPh8Y_v8J5bNm34JgKDdPl0nuiTCW2RA9mrs69Fc9oeIk7_-JBr1KVmipNnq_xRQtWSt3OHDVBW9Qy6pf_LabPXfV6wEVr8PBz3vwoYheKbaY9OR0hJQ0wbVQarpgOLAzUSvxnjFYrOkHSz2vTTBqf1CvKVJ6KGSnzbNV7EOfTDHsJX0U8dub4wNu-ceSshPXk8cjpp4OWRcho6NUy3KebeqfU5KPFkZ8ZQAch9Cpfq3JG-P"/>
          <img alt="Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu1ArLhQ0nEq5FUwJ5AakOnvcGtybKg4VNZKkD8k691WW5QzcWIqeL4rrWeGS_0zARj9HKDNSfXeVglr5FCSrNGMLrV2RUoL-fE-c_Xcf-RWteCYp8ZksHElhMrWxF4U7MhpqTnB8k8_33WbSIZxzrYRqWacfGGEX-G6FI3b7Q5gk2rPHZT7HlFeEpn-rVpkWRnyZYNKT1qVe4OsdaHLBZo6WgrNNU6fn9__aq6noWCE_2fG9mECuxHkzaKrNHLTO39Bhx2za2cAJQ"/>
          <img alt="Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFE5et_ztmWvBQklxPLz8qO3xsRWEGtgXq4vZesryXkrpFvmE4VXORWwQahmtkXofIaLfu7uhXj5LWqhz9k9JI8bOfB_7jX3IFXWieYtVcuA0H3KTLS3wgmXc-0XGQmzkkJJzj-eG5-IRj8xdFjskBZ9iXGdugDA27MA4N87ltTrepqraIbDFRfulpzHJWIvmc0J1WMMn4iZVrdPNR2mdwAA0g2RNPVQrf2yDU7fmAGZj9AuMg_0OFYA77c6DupehPMogOf1DFqoAI"/>
          <img alt="Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyejkNIXB5zqsl04LXfgzcaLltX7Zpo0rBIapxk5ffEj1QI6dl-ph8ItcXOpfuMSXUrjXa2GSOADg23sG3BIkiP7noq3ES8rxFP_DoFsIB-BjpswUKfON0tSGKVIQ-y-uD9b-nzozOzdTDvpovEeKoj-iTNMF0MQpDcBGFz3m77OjQAyZ98p0_BrIXnbuzGaDfrcCi2JOfb2uHe_TLH-JjsqZ9Gt404YMAf88Y_OF3LuydaKbfRgobXBQ9lT82q9tDA8Vtn6QJm_ud"/>
          <img alt="Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlPFNsgNt7XbCf-Y5-Sm3w1mH5yM-K2zNol97-cl8SpTool6u_ikzbuXlTNKJRZokwqzcolC3pdJuXuqhgNLCM-PKxcnSJ-WUeDe-hd4AoXmofHEduByA0V5k1O-PZF4JEaW4WoKk4V2KFkZbX5MOJAWjjvkudFcy5PoRFJJLJFt_cyY9a9JTKSNG0YMX7praPWw4lyLGsVvwNNzlmb-idwt7ruwQAY0WehBLXDVLU89vwDsZtTFTgrmBUjKaotV1jqTGG5G5wGXQx"/>
        </div>
      </div>
    </section>
  );
};

export default Trust;

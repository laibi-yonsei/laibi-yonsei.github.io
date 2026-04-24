// projects_data.js
const projects = [
  {
    title: 'AI-Assisted Medical Diagnosis Platform',
    category: 'Medical AI',
    period: '2024–2026',
    funder: 'NRF',
    status: 'ongoing',
    desc: 'Developing an AI system for automated medical image diagnosis in clinical settings.',
    links: []
  },
  {
    title: 'Clinical NLP for Korean EHR Systems',
    category: 'Clinical NLP',
    period: '2025–2027',
    funder: 'IITP',
    status: 'ongoing',
    desc: 'Building NLP pipelines tailored for Korean electronic health records.',
    links: []
  },
  {
    title: 'Deep Learning for Chromosome Analysis',
    category: 'Medical AI',
    period: '2022–2025',
    funder: 'NRF',
    status: 'ongoing',
    desc: 'Automated chromosome counting and abnormality detection using deep learning algorithms.',
    links: [
      { label: 'Paper', url: 'https://doi.org/10.1016/j.bspc.2024.106283' }
    ]
  },
  {
    title: 'Nystagmus Detection & Analysis System',
    category: 'Medical AI',
    period: '2022–2025',
    funder: 'NRF',
    status: 'ongoing',
    desc: 'AI-powered eye-tracking and nystagmus extraction system for vestibular disorder diagnosis.',
    links: [
      { label: 'Paper', url: 'https://doi.org/10.1038/s41598-023-38814-4' }
    ]
  },
  {
    title: 'Acral Melanoma AI Diagnosis',
    category: 'Dermatology AI',
    period: '2019–2024',
    funder: 'NRF',
    status: 'completed',
    desc: 'Deep learning-based detection and Breslow thickness prediction for acral lentiginous melanoma from dermoscopic images.',
    links: [
      { label: 'Paper (JID)', url: 'https://doi.org/10.1016/j.jid.2021.06.039' },
      { label: 'Paper (IEEE JBHI)', url: 'https://doi.org/10.1109/JBHI.2024.3524061' }
    ]
  },
  {
    title: 'Post-Thyroidectomy Scar Assessment',
    category: 'Dermatology AI',
    period: '2022–2025',
    funder: 'Yonsei University',
    status: 'ongoing',
    desc: 'Deep learning algorithms for automated classification and assessment of post-thyroidectomy scar subtypes.',
    links: [
      { label: 'Paper', url: 'https://doi.org/10.1111/dth.15924' }
    ]
  },
  {
    title: 'ECG-based Cardiac Disease Prediction',
    category: 'Healthcare Data Science',
    period: '2021–2024',
    funder: 'NRF',
    status: 'completed',
    desc: 'CoAt-Mixer framework for left ventricular hypertrophy detection and demographic estimation from ECG signals.',
    links: [
      { label: 'Paper (PLOS ONE)', url: 'https://doi.org/10.1371/journal.pone.0286916' },
      { label: 'Paper (Sensors)', url: 'https://doi.org/10.3390/s23031292' }
    ]
  },
  {
    title: 'Wound Image Analysis & Tissue Segmentation',
    category: 'Medical AI',
    period: '2023–2026',
    funder: 'NRF',
    status: 'ongoing',
    desc: 'WISE-MTL multi-task learning framework for integrated wound detection and tissue type segmentation.',
    links: []
  },
  {
    title: 'Pancreatic Anomaly Detection in CT',
    category: 'Medical AI',
    period: '2024–2026',
    funder: 'NRF',
    status: 'ongoing',
    desc: 'Latent diffusion model approach for detection of pancreatic abnormalities in abdominal CT images of emergency patients.',
    links: []
  },
  {
    title: 'Blood Glucose Monitoring for GSD',
    category: 'Precision Medicine',
    period: '2023–2025',
    funder: 'NRF',
    status: 'ongoing',
    desc: 'Deep learning approach for continuous blood glucose monitoring and hypoglycemia prediction in glycogen storage disease.',
    links: [
      { label: 'Paper', url: 'https://doi.org/10.1038/s41598-025-93949-2' }
    ]
  },
  {
    title: 'Facial Vitiligo Area Measurement',
    category: 'Dermatology AI',
    period: '2023–2025',
    funder: 'Yonsei University',
    status: 'ongoing',
    desc: 'Framework for automated facial vitiligo area measurement using 3D face reconstruction and multi-view UV images.',
    links: [
      { label: 'Paper', url: 'https://doi.org/10.9718/JBER.2025.46.2.89' }
    ]
  },
  {
    title: 'Alopecia Areata Severity Assessment',
    category: 'Dermatology AI',
    period: '2019–2021',
    funder: 'NRF',
    status: 'completed',
    desc: 'Clinically applicable deep learning framework for automated measurement of hair loss extent (SALT score) in alopecia areata.',
    links: [
      { label: 'Paper', url: 'https://doi.org/10.1001/jamadermatol.2020.2188' }
    ]
  },
  {
    title: 'Multi-modal Biomarker Discovery',
    category: 'Precision Medicine',
    period: '2023–2025',
    funder: 'NRF',
    status: 'completed',
    desc: 'Integrating multi-modal patient data for novel biomarker identification.',
    links: []
  },
  {
    title: 'Federated Learning for Hospital Networks',
    category: 'Healthcare Data Science',
    period: '2024–2026',
    funder: 'MSIT',
    status: 'ongoing',
    desc: 'Privacy-preserving collaborative learning across multiple hospital systems.',
    links: []
  },
  {
    title: 'Endoscopic Surgical Image Enhancement',
    category: 'Medical AI',
    period: '2023–2025',
    funder: 'Yonsei University',
    status: 'ongoing',
    desc: 'AI-based integrated system for smoke removal and image enhancement in endoscopic surgery.',
    links: []
  },
  {
    title: 'Point Defect Detection in 2D Materials',
    category: 'Materials Science AI',
    period: '2021–2023',
    funder: 'NRF',
    status: 'completed',
    desc: 'Full automation of point defect detection in transition metal dichalcogenides through dual mode deep learning.',
    links: [
      { label: 'Paper', url: 'https://doi.org/10.1039/D3MH01500A' }
    ]
  }
];

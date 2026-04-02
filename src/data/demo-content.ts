/**
 * Demo content data for the B2B Manufacturing CCL starter template.
 * This provides placeholder content for components when no Sitecore
 * data source is connected. Replace with real content via XM Cloud.
 */

export const company = {
  name: 'Apex Manufacturing Solutions',
  tagline: 'Precision Engineering for Modern Manufacturing',
  description:
    'For over 25 years, Apex Manufacturing Solutions has been a trusted partner for manufacturers worldwide, delivering innovative automation, precision tooling, quality control, and material handling solutions.',
  phone: '+1 (800) 555-APEX',
  email: 'info@apexmfg.com',
  address: '1200 Industrial Parkway, Detroit, MI 48201, USA',
  founded: '2001',
};

export const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '500+', label: 'Global Clients' },
  { value: '50+', label: 'Countries Served' },
  { value: '99.7%', label: 'Uptime Guarantee' },
];

export const products = [
  {
    id: 'robotic-systems',
    name: 'Apex RoboFlex 7000',
    category: 'Industrial Automation',
    description:
      'Multi-axis robotic system designed for high-speed assembly, welding, and material handling applications with AI-driven path optimization.',
    specs: {
      'Payload Capacity': '7 kg',
      'Reach': '900 mm',
      'Repeatability': '±0.02 mm',
      'Axes': '6 + 1 (external)',
      'Controller': 'Apex SmartControl Pro',
      'Communication': 'EtherCAT, PROFINET, EtherNet/IP',
      'Protection': 'IP67',
      'Weight': '52 kg',
    },
  },
  {
    id: 'vision-system',
    name: 'Apex VisionInspect AI',
    category: 'Quality Control',
    description:
      'AI-powered machine vision system for real-time defect detection, dimensional measurement, and assembly verification.',
    specs: {
      'Resolution': '5 MP (2448 × 2048)',
      'Frame Rate': '120 fps',
      'Defect Detection': '99.98% accuracy',
      'Processing': 'Edge AI / GPU accelerated',
      'Lighting': 'Multi-spectral LED',
      'Interface': 'GigE Vision, USB3',
      'Software': 'Apex VisionStudio',
      'AI Training': 'Transfer learning with 50+ pre-trained models',
    },
  },
  {
    id: 'cnc-tools',
    name: 'Apex PrecisionMill X5',
    category: 'Precision Tooling',
    description:
      '5-axis CNC milling system with adaptive feed control and integrated tool management for complex aerospace and automotive components.',
    specs: {
      'Travel (X/Y/Z)': '800 × 600 × 500 mm',
      'Spindle Speed': '24,000 RPM',
      'Positioning Accuracy': '±0.003 mm',
      'Tool Magazine': '60 tools (ATC)',
      'Control System': 'Siemens SINUMERIK ONE',
      'Table Load': '500 kg',
      'Coolant': 'Through-spindle 70 bar',
      'Power': '30 kW',
    },
  },
  {
    id: 'agv-system',
    name: 'Apex SmartMove AGV',
    category: 'Material Handling',
    description:
      'Autonomous guided vehicle system for warehouse and production floor logistics with fleet management and collision avoidance.',
    specs: {
      'Load Capacity': '1,500 kg',
      'Speed': '2.0 m/s max',
      'Navigation': 'LiDAR + Visual SLAM',
      'Battery': '48V Li-ion, 8hr runtime',
      'Charging': 'Wireless inductive (15 min top-up)',
      'Fleet Size': 'Up to 100 units',
      'Safety': 'ISO 3691-4 compliant',
      'Integration': 'WMS, ERP, MES compatible',
    },
  },
];

export const caseStudies = [
  {
    id: 'techdrive-automotive',
    client: 'TechDrive Automotive',
    industry: 'Automotive',
    title: 'Automating Assembly Line for 40% Throughput Increase',
    challenge:
      'TechDrive needed to modernize their legacy manual assembly processes to meet growing demand for electric vehicle components.',
    solution:
      'Apex implemented a full robotic assembly cell with 12 RoboFlex 7000 units, VisionInspect AI quality stations, and SmartMove AGVs for material flow.',
    results: [
      '40% increase in production throughput',
      '99.98% quality rate (up from 97.2%)',
      '60% reduction in manual labor costs',
      'ROI achieved in 14 months',
    ],
  },
  {
    id: 'aerovault-aerospace',
    client: 'AeroVault Industries',
    industry: 'Aerospace',
    title: 'Precision Machining for Next-Gen Turbine Blades',
    challenge:
      'AeroVault required sub-micron precision machining for a new generation of jet engine turbine blades with complex geometries.',
    solution:
      'Deployed 4 PrecisionMill X5 systems with custom fixturing and adaptive machining strategies developed by our engineering team.',
    results: [
      'Achieved ±0.001mm tolerance consistently',
      '35% reduction in cycle time per blade',
      'Zero scrap rate on production runs',
      'AS9100D audit passed with zero findings',
    ],
  },
  {
    id: 'novatech-electronics',
    client: 'NovaTech Electronics',
    industry: 'Electronics',
    title: 'AI-Powered Quality Control for PCB Manufacturing',
    challenge:
      'NovaTech was experiencing high defect escape rates in their PCB assembly process, leading to costly field returns.',
    solution:
      'Installed VisionInspect AI systems across 6 inspection stations with custom-trained deep learning models for their specific component portfolio.',
    results: [
      'Defect escape rate reduced by 95%',
      'False positive rate under 0.1%',
      'Inspection speed increased 3x',
      'Annual savings of $2.4M in warranty costs',
    ],
  },
];

export const industries = [
  {
    name: 'Automotive',
    slug: 'automotive',
    description:
      'High-speed automation and precision tooling for automotive assembly, powertrain manufacturing, and quality inspection.',
  },
  {
    name: 'Aerospace & Defense',
    slug: 'aerospace',
    description:
      'Precision-critical manufacturing solutions meeting AS9100D standards for aircraft components and defense systems.',
  },
  {
    name: 'Electronics',
    slug: 'electronics',
    description:
      'Micro-precision assembly and testing solutions for PCB manufacturing, semiconductor packaging, and consumer electronics.',
  },
  {
    name: 'Food & Beverage',
    slug: 'food-beverage',
    description:
      'Hygienic processing and packaging automation meeting FDA and USDA requirements for food safety.',
  },
  {
    name: 'Pharmaceutical',
    slug: 'pharmaceutical',
    description:
      'GMP-compliant manufacturing and inspection systems for pharmaceutical production and serialization.',
  },
];

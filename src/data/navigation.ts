export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'Industrial Automation',
        href: '/products/industrial-automation',
        children: [
          { label: 'Robotic Systems', href: '/products/industrial-automation/robotic-systems' },
          { label: 'PLC Controllers', href: '/products/industrial-automation/plc-controllers' },
          { label: 'Conveyor Systems', href: '/products/industrial-automation/conveyor-systems' },
        ],
      },
      {
        label: 'Precision Tooling',
        href: '/products/precision-tooling',
        children: [
          { label: 'CNC Cutting Tools', href: '/products/precision-tooling/cnc-cutting-tools' },
          { label: 'Measuring Instruments', href: '/products/precision-tooling/measuring-instruments' },
          { label: 'Custom Fixtures', href: '/products/precision-tooling/custom-fixtures' },
        ],
      },
      {
        label: 'Quality Control',
        href: '/products/quality-control',
        children: [
          { label: 'Vision Systems', href: '/products/quality-control/vision-systems' },
          { label: 'Testing Equipment', href: '/products/quality-control/testing-equipment' },
          { label: 'Calibration Tools', href: '/products/quality-control/calibration-tools' },
        ],
      },
      {
        label: 'Material Handling',
        href: '/products/material-handling',
        children: [
          { label: 'AGV Systems', href: '/products/material-handling/agv-systems' },
          { label: 'Warehouse Automation', href: '/products/material-handling/warehouse-automation' },
          { label: 'Lifting Equipment', href: '/products/material-handling/lifting-equipment' },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Automotive Manufacturing', href: '/solutions/automotive' },
      { label: 'Aerospace & Defense', href: '/solutions/aerospace' },
      { label: 'Electronics Assembly', href: '/solutions/electronics' },
      { label: 'Food & Beverage', href: '/solutions/food-beverage' },
      { label: 'Pharmaceutical', href: '/solutions/pharmaceutical' },
    ],
  },
  {
    label: 'Case Studies',
    href: '/case-studies',
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Technical Documentation', href: '/resources/documentation' },
      { label: 'Whitepapers', href: '/resources/whitepapers' },
      { label: 'Product Catalogs', href: '/resources/catalogs' },
      { label: 'FAQ', href: '/resources/faq' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about/our-story' },
      { label: 'Leadership Team', href: '/about/team' },
      { label: 'Certifications', href: '/about/certifications' },
      { label: 'Careers', href: '/about/careers' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const footerNavigation = {
  quickLinks: [
    { label: 'Products', href: '/products' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  industries: [
    { label: 'Automotive', href: '/solutions/automotive' },
    { label: 'Aerospace', href: '/solutions/aerospace' },
    { label: 'Electronics', href: '/solutions/electronics' },
    { label: 'Food & Beverage', href: '/solutions/food-beverage' },
    { label: 'Pharmaceutical', href: '/solutions/pharmaceutical' },
  ],
  support: [
    { label: 'Technical Docs', href: '/resources/documentation' },
    { label: 'Request a Quote', href: '/contact?type=quote' },
    { label: 'FAQ', href: '/resources/faq' },
    { label: 'Service & Repairs', href: '/support/service' },
    { label: 'Training', href: '/support/training' },
  ],
};

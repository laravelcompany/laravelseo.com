// Site configuration
export const SITE = {
  title: 'LaravelSeo',
  description: 'Take control of your site’s search visibility with a fully automated optimisation suite built specifically for Laravel.',
  url: 'https://laravelseo.com',
  author: 'LaravelSeo',
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Capabilities', href: '/capabilities' },
  { name: 'Use Cases', href: '/use-cases' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Try Now', href: 'https://app.laravelseo.com' },
  { name: 'Documentation', href: '/documentation' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/laravelseo',
  twitter: 'https://twitter.com/laravelseo',
  facebook: 'https://facebook.com/laravelseo',
} as const;


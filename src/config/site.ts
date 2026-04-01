// Site configuration
export const SITE = {
  title: 'Laravel SEO Platform | Automated Search Visibility Tools',
  description: 'Take control of your site’s search visibility with a fully automated optimisation suite built specifically for Laravel.',
  url: 'https://laravelseo.com',
  author: 'laravel seo',
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Capabilities', href: '/capabilities' },
  { name: 'Use Cases', href: '/use-cases' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Buy', href: '/buy' },
  { name: 'Login', href: 'https://app.laravelseo.com/login' },

] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/laravelseo',
  twitter: 'https://twitter.com/laravelseo',
  facebook: 'https://facebook.com/laravelseo',
} as const;


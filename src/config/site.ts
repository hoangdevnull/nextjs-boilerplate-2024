export type SiteConfig = typeof siteConfig;

export const APP_URL = 'https://www.var-meta.com';

export const siteConfig = {
  name: 'VAR META',
  metaTitle: 'Bring your visions to life by innovative technologies | var-meta.com',
  description: 'Bring your visions to life by innovative technologies | var-meta.com',
  ogImage: `${APP_URL}/og-image.jpg`,
  telegram: 'https://t.me/var-meta',
  twitter: 'https://twitter.com/var-meta',
  linkedin: 'https://www.linkedin.com/showcase/var-meta',
  facebook: 'https://www.facebook.com/var-meta',
  email: 'contact@var-meta.com',
};

export const sendContactMail = () => {
  const subject = 'VAR-Meta Service Contact';
  const body = `Dear VAR-Meta Tech,

I am writing to express my interest in your service. I would be grateful for the opportunity to discuss this further.

Kind regards,
`;
  let uri = `mailto:${siteConfig.email}?subject=`;
  uri += encodeURIComponent(subject);
  uri += '&body=';
  uri += encodeURIComponent(body);
  window.open(uri);
};

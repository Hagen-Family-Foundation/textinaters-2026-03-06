const getEnvVar = (key, defaultValue = '') => {
  const value = import.meta.env[key];
  return value !== undefined ? value : defaultValue;
};

export const brands = {
  default: {
    appName: getEnvVar('VITE_NAME', 'Textinaters'),
    companyName: getEnvVar('VITE_COMPANY_NAME', 'Textinaters, Inc.'),
    domain: getEnvVar('VITE_DOMAIN', 'textinaters.com'),
    frontendUrl: getEnvVar('VITE_FRONTEND_URL', 'http://localhost:3000'),
    apiUrl: getEnvVar('VITE_API_URL', 'http://localhost:5000'),
    tagline: getEnvVar('VITE_TAGLINE', 'Stop SMS scams before they reach your phone'),

    contactEmail: getEnvVar('VITE_CONTACT_EMAIL', 'support@textinaters.com'),
    supportEmail: getEnvVar('VITE_SUPPORT_EMAIL', 'support@textinaters.com'),
    salesEmail: getEnvVar('VITE_SALES_EMAIL', 'sales@textinaters.com'),
    phone: getEnvVar('VITE_PHONE', '1-913-585-8300'),
    address: getEnvVar('VITE_ADDRESS', '8712 Mackey Street, Overland Park, KS 66212'),

    colors: {
      primary: getEnvVar('VITE_COLOR_PRIMARY', '#FFD700'),
      primaryDark: getEnvVar('VITE_COLOR_PRIMARY_DARK', '#050505'),
      primaryLight: getEnvVar('VITE_COLOR_PRIMARY_LIGHT', '#E6C200'),
      secondary: getEnvVar('VITE_COLOR_SECONDARY', '#000000'),
      secondaryDark: getEnvVar('VITE_COLOR_SECONDARY_DARK', '#0A0A0A'),
      accent: getEnvVar('VITE_COLOR_ACCENT', '#FFD700'),
      success: getEnvVar('VITE_COLOR_SUCCESS', '#10B981'),
      warning: getEnvVar('VITE_COLOR_WARNING', '#F59E0B'),
      error: getEnvVar('VITE_COLOR_ERROR', '#FF3B30'),
      background: getEnvVar('VITE_COLOR_BACKGROUND', '#050505'),
      text: getEnvVar('VITE_COLOR_TEXT', '#FFFFFF'),
      textLight: getEnvVar('VITE_COLOR_TEXT_LIGHT', '#A0A0A0'),
    },

    social: {
      facebook: getEnvVar('VITE_SOCIAL_FACEBOOK', 'https://facebook.com/textinaters'),
      twitter: getEnvVar('VITE_SOCIAL_TWITTER', 'https://twitter.com/textinaters'),
      linkedin: getEnvVar('VITE_SOCIAL_LINKEDIN', 'https://linkedin.com/company/textinaters'),
      instagram: getEnvVar('VITE_SOCIAL_INSTAGRAM', 'https://instagram.com/textinaters'),
    },

    pricing: {
      currency: 'USD',
      tiers: [
        {
          name: 'Basic',
          monthlyPrice: '15.99',
          annualPrice: '159.99',
          linesIncluded: 1,
          features: [
            'Core SMS protection',
            'Text screening',
            'Basic reporting',
            'Email support',
          ],
        },
        {
          name: 'Mid',
          monthlyPrice: '28.99',
          annualPrice: '289.99',
          linesIncluded: 3,
          features: [
            'All Basic features',
            'Advanced SMS filtering',
            'Priority support',
            'Analytics dashboard',
          ],
        },
        {
          name: 'Family',
          monthlyPrice: '47.99',
          annualPrice: '479.99',
          linesIncluded: 5,
          features: [
            'All Mid features',
            'Multiple family members',
            'Advanced AI detection',
            'Phone support',
          ],
        },
      ],
    },

    decorations: {
      spinningGlobeEnabled: false,
      flashingLightEnabled: true,
      particlesEnabled: false,
    },

    seo: {
      description: 'Protect yourself from SMS scams with advanced AI detection and real-time text screening.',
      keywords: 'sms scam, text spam, phone protection, spam detection, textinaters',
      ogTitle: 'Textinaters - AI-Powered SMS Scam Protection',
      ogDescription: 'Stop SMS scammers before they reach your phone. AI-powered text screening protects you 24/7.',
    },

    legal: {
      privacyPolicyUrl: '/privacy',
      termsUrl: '/terms',
      cookiesPolicyUrl: '/cookies',
      disclaimerUrl: '/disclaimer',
    },
  },
};

const brandKey = getEnvVar('VITE_BRAND_KEY', 'default');
const activeBrand = brands[brandKey] || brands.default;

export const brandConfig = activeBrand;
export default activeBrand;

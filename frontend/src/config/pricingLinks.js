export const PRICING_LINKS = {
  BUNDLE_BASIC_4_PILLARS: 'https://buy.stripe.com/28E7sK2JRdw60PT45o4gg0b',
  BUNDLE_MID_4_PILLARS: 'https://buy.stripe.com/8x2aEWckr77IcyB9pI4gg0e',
  BUNDLE_FAMILY_4_PILLARS: 'https://buy.stripe.com/fZuaEWacj0Jk2Y159s4gg0g',
  TEXTINATORS: 'https://buy.stripe.com/8x2aEWbgn1No1TXbxQ4gg09',
  EMAILINATORS: 'https://buy.stripe.com/aFa4gy0BJ2Rs9mp0Tc4gg08',
  WEBINATORS: 'https://buy.stripe.com/8x24gyeszdw6eGJatM4gg07',
};

export const PRICING_DATA = {
  phoneOnly: {
    basic: { price: 15.99, lines: 1 },
    mid: { price: 28.99, lines: 3 },
    family: { price: 47.99, lines: 5 },
  },
  addonPricePerLine: 12.99,
  bundles: {
    basic: { price: 33.99, lines: 1 },
    mid: { price: 81.99, lines: 3 },
    family: { price: 109.99, lines: 5 },
  },
};

export default PRICING_LINKS;

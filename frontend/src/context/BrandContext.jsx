import React, { createContext, useContext } from 'react';
import { brands } from '../config/brandConfig';

const BrandContext = createContext(null);

const getBrandKey = () => {
  const key = import.meta.env.VITE_BRAND_KEY || 'default';
  if (brands[key]) {
    return key;
  }
  if (import.meta.env.DEV) {
    console.warn(
      `[BrandContext] Invalid VITE_BRAND_KEY="${key}". ` +
      `Valid keys: ${Object.keys(brands).join(', ')}. ` +
      `Falling back to "default".`
    );
  }
  return 'default';
};

const getActiveBrand = () => {
  const brandKey = getBrandKey();
  const brand = brands[brandKey];
  if (import.meta.env.DEV) {
    console.log(`[BrandContext] Using brand: "${brandKey}" (${brand.appName})`);
  }
  return brand;
};

const activeBrand = getActiveBrand();

export function BrandProvider({ children }) {
  return (
    <BrandContext.Provider value={activeBrand}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error(
      'useBrand must be used within a <BrandProvider>. ' +
      'Make sure your component is wrapped with BrandProvider in src/main.jsx. ' +
      'Current VITE_BRAND_KEY: ' + (import.meta.env.VITE_BRAND_KEY || '(not set)')
    );
  }
  return context;
}

export { brands, activeBrand };
export const activeBrandKey = getBrandKey();
export default BrandContext;

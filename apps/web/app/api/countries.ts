import type { TCountry } from '@shared/types/country';

export const fetchCountries = async (): Promise<TCountry[]> => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION || 'v1';

  const url = `${API_BASE_URL}/api/${API_VERSION}/countries`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch global status: ${res.statusText}`);
  }
  return res.json();
};

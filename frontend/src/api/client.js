const BASE_URL = "https://api.example.com";

async function apiRequest(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      status: 'error',
      message: 'Network error, please try again.',
    };
  }
}

export async function postReportNumber(body) {
  return apiRequest('/v1/report-number', {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

export async function postCheckCall(body) {
  return apiRequest('/v1/check-call', {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

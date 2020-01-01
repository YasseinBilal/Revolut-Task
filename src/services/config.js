export default {
  baseUrl: 'https://openexchangerates.org/api',
  APP_ID: '094a9e2aa88f4ac7af447bc2ec28b3e4',
  defaultSymbols: 'USD,EUR,GBP'
};

export function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

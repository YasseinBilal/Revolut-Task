import config, { handleResponse } from './config';

export const exchangeService = {
  getLatest
};

async function getLatest() {
  const requestOptions = {
    method: 'GET'
  };
  const response = await fetch(
    `${config.baseUrl}/latest.json?app_id=${config.APP_ID}&symbols=${config.defaultSymbols}`,
    requestOptions
  );
  return handleResponse(response);
}

import param from 'query-string';

const API_ROOT = 'localhost:4000/';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;

  throw error;
}

function parseJSON(response) {
  const contentType = response.headers.get('content-type');

  return (contentType && contentType.indexOf('application/json') !== -1)
    ? response.json()
    : response;
}

const GET = (endpoint, params = {}, headers = {}) => {
  const queryString = param.stringify(params);

  return fetch(`${API_ROOT}/${endpoint}?${queryString}`, {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    method: 'GET',
  })
    .then(checkStatus)
    .then(parseJSON);
};

const POST = (endpoint, body, headers = {}) => (
  fetch(`${API_ROOT}/${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then(checkStatus)
    .then(parseJSON)
);

const PUT = (endpoint, body, headers = {}) => (
  fetch(`${API_ROOT}/${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    method: 'PUT',
    body: JSON.stringify(body),
  })
    .then(checkStatus)
    .then(parseJSON)
);

export default {
  GET,
  POST,
  PUT,
};

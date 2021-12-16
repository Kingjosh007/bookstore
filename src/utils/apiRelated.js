const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const appId = 'rQ2sGk73ALsSsV7Y7oHD';
const appsEndpoint = `${baseUrl}/apps/`;
const booksEndpoint = `${appsEndpoint}${appId}/books`;
const deleteBookEndpoint = (id) => `${booksEndpoint}/${id}`;

const postData = async (url, data, isText = false) => {
  const res = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (isText) return res.text();
  return res.json();
};

const deleteData = async (id) => {
  const res = await fetch(deleteBookEndpoint(id), {
    method: 'DELETE',
    mode: 'cors',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ item_id: id }),
  });
  return res.text();
};

const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json() || {};
  const dataArr = Object.keys(data).map((key) => ({ item_id: key, ...data[key][0] }));
  return dataArr;
};

export {
  postData,
  getData,
  deleteData,
  appsEndpoint,
  booksEndpoint,
  deleteBookEndpoint,
};

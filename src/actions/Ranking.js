import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';

const API_URL = "https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking";
const API_ID = "dj00aiZpPTVtN2VYSzBVcGRRYyZzPWNvbnN1bWVyc2VjcmV0Jng9MTQ-";

const startRequest = categoryID => ({
  type: 'START_REQUEST',
  payload: {categoryID},
});

const receiveData = (categoryID, error, response) => ({
  type: 'RECEIVE_DATA',
  payload: { categoryID, error, response },
});

const finishRequest = categoryID => ({
  type: 'FINISH_REQUEST',
  payload: {categoryID},
});

export const fetchRanking = categoryID => {
  return async dispatch => {
    dispatch(startRequest(categoryID));

    const queryString = qs.stringify({
      appid: API_ID,
      category_id: categoryID,
    });

    try {
      const response = await fetchJsonp(`${API_URL}?${queryString}`);
      const data = await response.json();
      dispatch(receiveData(categoryID, null, data));
    } catch(err) {
      dispatch(receiveData(categoryID, err));
    }

    dispatch(finishRequest(categoryID));
  }
}

import request from '../../../utils/fetcher';
import path from '../../../utils/apiUrl';

export async function handler() {
  return request({
    method: 'GET',
    url: path.catalogList
  });
}

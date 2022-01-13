import request from '../../../utils/fetcher';
import path from '../../../utils/apiUrl';

export async function handler({ query: { id } }, res) {
  return request({
    method: 'GET',
    url: `${path.article}/${id}`
  });
}

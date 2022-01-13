import request from '../../../utils/request';
import path from '../../../utils/apiUrl';

export async function handler() {
  return request({
    method: 'GET',
    url: path.catalogList
  });
}

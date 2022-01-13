import request from '../../../utils/fetcher';
import path from '../../../utils/apiUrl';

export default function handler(req, res) {
  if (req.method === 'GET') {
    return request({
      method: 'GET',
      url: path.articleList
    });
  }
}

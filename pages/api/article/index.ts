import { NextApiRequest, NextApiResponse } from 'next';
import fetcher from '../../../utils/fetcher';
import path from '../../../config/apiUrl';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return fetcher({
      method: 'GET',
      url: path.articleList,
    }).then((data) => res.json(data));
  }
}

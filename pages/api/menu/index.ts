import { NextApiRequest, NextApiResponse } from 'next';
import fetcher from '../../../utils/fetcher';
import path from '../../../config/apiUrl';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  return fetcher({
    method: 'GET',
    url: path.catalogList,
  }).then((data) => res.json(data));
}

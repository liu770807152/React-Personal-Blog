import { NextApiRequest, NextApiResponse } from 'next';
import fetcher from '../../../utils/fetcher';
import path from '../../../utils/apiUrl';

export async function handler({ query: { id } }, res: NextApiResponse) {
  return fetcher({
    method: 'GET',
    url: `${path.article}/${id}`
  }).then((data) => res.json(data));
}

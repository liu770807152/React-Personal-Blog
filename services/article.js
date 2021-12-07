import request from '../utils/request';
import path from '../utils/apiUrl';

export async function getArticleList() {
  return request({
    method: 'GET',
    url: path.articleList
  });
}

export async function getArticleById(payload) {
  console.log(`${path.article}/${payload}`);
  return request({
    method: 'GET',
    url: `${path.article}/${payload}`
  });
}

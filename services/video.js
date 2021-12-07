import request from '../utils/request';
import path from '../utils/apiUrl';

export async function getVideoList() {
  return request({
    method: 'GET',
    url: path.videoList
  });
}

export async function getVideoById(payload) {
  return request({
    method: 'GET',
    url: `${path.video}/${payload}`
  });
}

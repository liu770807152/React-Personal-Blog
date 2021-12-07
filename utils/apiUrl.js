const baseUrl = 'localhost:7001/api/';
const servicePath = {
  articleList: '/api/articleList', // interface URL to fetch article list in /list page
  article: '/api/article', // interface URL to fetch article content in /detail page
  videoList: '/api/videoList', // interface URL to fetch video list in /list page
  video: '/api/video', // interface URL to fetch video content in /detail page
  catalogList: '/api/catalogList' // interface URL to fetch menu catalog in /list page
};

export default servicePath;

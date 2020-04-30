const appUrl = process.env.NODE_ENV === 'production' ? process.env.APP_URL : '';

/* URL configuration */
export const configuration = {
  BASE_URL: process.env.BASE_URL,
  APP_URL: appUrl,
  API_URL: 'https://hn.algolia.com/api/v1/'
};

/* routes constants */
export const Path = {
  Root: '/',
  Home: '/posts',
  PostDetail: '/post-detail'
};

export const endpoint = {};

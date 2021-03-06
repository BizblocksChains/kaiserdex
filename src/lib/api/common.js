import axios from 'axios';

export const getCurrencyInfo = () => axios.get('/api/v1/common/currency-info');
export const getKrwRate = () => axios.get('/api/v1/common/krw-rate');
export const getNext = (url) => axios.get(url);
export const getTopRanking = (type) => axios.get(`/api/v1/common/ranking?type=${type ? type : ''}`);

import axios from 'axios';

export const getUserWallet = (displayName) => axios.get(`/api/v1/user/${displayName}/wallet`);
export const getUserOrders = (displayName) => axios.get(`/api/v1/user/${displayName}/orders`);
import { requestGet, requestPost } from "./request";

export const getUsers = () => { return requestGet('https://610cfee166dd8f0017b76f7a.mockapi.io/users', {method: 'GET'}) };

export const getComments = () => { return requestGet('https://610cfee166dd8f0017b76f7a.mockapi.io/comments', {method: 'GET'}) }

export const postComments = () => { return requestPost('https://610cfee166dd8f0017b76f7a.mockapi.io/comments', {method: 'POST'}) }
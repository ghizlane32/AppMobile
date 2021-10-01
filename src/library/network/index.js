import axios from 'axios';
import {API_URL} from '../../data/constants';

export const getGithubRepos = () => {
  return axios
    .get(`${API_URL}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};

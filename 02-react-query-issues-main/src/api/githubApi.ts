import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization: 'Bearer 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'
  }
});
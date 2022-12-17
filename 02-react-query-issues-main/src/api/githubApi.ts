import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization: 'Bearer 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'
  }
});
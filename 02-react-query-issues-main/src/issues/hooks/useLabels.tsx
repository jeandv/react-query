import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { Label } from '../interfaces/label';
import { sleep } from '../../helpers/sleeps';

const getLabels = async (): Promise<Label[]> => {

  await sleep(2);

  const { data } = await githubApi.get<Label[]>('/labels');

  return data;
}

export const useLabels = () => {

  const labelsQuery = useQuery(
    ['labels'],
    getLabels,
    {
      // staleTime: 1000 * 60 * 60,
      // initialData: [],
      placeholderData: [
        {
          id: 127893911,
          node_id: 'MDU6TGFiZWwxMjc4OTM5MTE=',
          url: 'https://api.github.com/repos/facebook/react/labels/Component:%20DOM',
          name: 'Component: DOM',
          color: 'fef2c0',
          default: false,
        },
        {
          id: 1109407645,
          node_id: 'MDU6TGFiZWwxMTA5NDA3NjQ1',
          url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Suspense',
          name: 'Component: Suspense',
          color: '8ffcd6',
          default: false,
        }
      ]
    }
  );


  return labelsQuery;
}
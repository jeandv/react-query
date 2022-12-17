import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { getIssueInfo, getIssueComments } from '../hooks/useIssue';
import { timeSince } from '../../helpers';
import { Issue, State } from '../interfaces';

export interface IssueItemProps {
  issues: Issue;
}

export const IssueItem: FC<IssueItemProps> = ({ issues }) => {

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const preFetchData = () => {

    queryClient.prefetchQuery(
      ['issue', issues.number],
      () => getIssueInfo(issues.number)
    );

    queryClient.prefetchQuery(
      ['issue', issues.number, 'comments'],
      () => getIssueComments(issues.number)
    );

  }

  const preSetData = () => {

    queryClient.setQueryData(
      ['issue', issues.number],
      issues,
      {
        updatedAt: new Date().getTime() + 10000
      }
    );

  }

  return (
    <div className='card mb-2 issue'
      onClick={() => navigate(`/issues/issue/${issues.number}`)}
      // onMouseEnter={preFetchData}
      onMouseEnter={preSetData}
    >
      <div className='card-body d-flex align-items-center'>
        {
          issues.state === State.Open
            ? <FiCheckCircle size={30} color='green' />
            : <FiInfo size={30} color='red' />
        }
        <div className='d-flex flex-column flex-fill px-2'>
          <span>{issues.title}</span>
          <span className='issue-subinfo'>#{issues.number} opened {timeSince(issues.created_at)} days ago by <span className='fw-bold'>{issues.user.login}</span></span>
          <div>
            {
              issues.labels.map(label => (
                <span
                  key={label.id}
                  className='badge rounded-pill m-1'
                  style={{ backgroundColor: `#${label.color}`, color: '#000' }}
                >
                  {label.name}
                </span>
              ))
            }
          </div>
        </div>

        <div className='d-flex align-items-center'>
          <img src={issues.user.avatar_url} alt='User Avatar' className='avatar' />
          <span className='px-2'>{issues.comments}</span>
          <FiMessageSquare />
        </div>

      </div>
    </div>
  )
}
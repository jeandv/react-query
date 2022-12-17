import { Link, useParams, Navigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { IssueComment } from '../components/IssueComment';
import { useIssue } from '../hooks';

export const IssueView = () => {

  const { id = '0' } = useParams();

  const { issueQuery, commentsQuery } = useIssue(+id);

  if (issueQuery.isLoading) return <FaSpinner className='loader' />;

  if (!issueQuery.data) return <Navigate to='./issues/list' />;

  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to='./issues/list'>Go Back</Link>
      </div>

      {/* Primer comentario */}
      <IssueComment issue={issueQuery.data} />

      {/* Comentario de otros */}
      {
        commentsQuery.isLoading && <FaSpinner className='loader' style={{ marginTop: '50px' }} />
      }
      {
        commentsQuery.data?.map(issue => <IssueComment key={issue.id} issue={issue} />)
      }
    </div>
  )
}
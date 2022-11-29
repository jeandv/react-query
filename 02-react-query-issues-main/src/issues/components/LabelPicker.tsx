import { FC } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useLabels } from '../hooks/useLabels';

interface LabelPickerProps {
  selectedLabels: string[];
  onChange: (labelName: string) => void;
}

export const LabelPicker: FC<LabelPickerProps> = ({ selectedLabels, onChange }) => {

  const labelsQuery = useLabels();

  if (labelsQuery.isLoading) return <FaSpinner className='loader' />;

  return (
    <div>
      {
        labelsQuery.data?.map(({ id, name, color }) => (
          <span
            className={`badge rounded-pill m-1 label-picker ${selectedLabels.includes(name) ? 'label-active' : ''}`}
            key={id}
            style={{ border: `1px solid #${color}`, color: `${color}` }}
            onClick={() => onChange(name)}
          >
            {name}
          </span>
        ))
      }
    </div>
  )
}
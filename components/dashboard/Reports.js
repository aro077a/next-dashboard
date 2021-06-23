import { BsDot } from 'react-icons/bs';

const Reports = ({ title, value, high, medium, low }) => {
  return (
    <div className='reports-items'>
      <div className='reports-items__intro'>
        <BsDot
          style={{
            fill: high
              ? '#3E82FF'
              : medium
              ? '#87B1FF'
              : low
              ? '#D7E5FF'
              : '#BDC5D1',
          }}
        />
        <span className='reports-items--title'>{title}</span>
      </div>
      <span className='reports-items--value'>{value}</span>
      <span
        className={
          high
            ? 'reports-items--percent-high'
            : medium
            ? 'reports-items--percent-medium'
            : low
            ? 'reports-items--percent-low'
            : 'reports-items--percent-high'
        }
      >
        {high || medium || low}
      </span>
    </div>
  );
};

export default Reports;

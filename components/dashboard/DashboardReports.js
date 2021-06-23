import { BiDotsVerticalRounded } from 'react-icons/bi';
import { Line } from 'rc-progress';
import Title from '../title/Title';
import { reportsData } from './dashboardInfoData';
import Reports from './Reports';

const DashboardReports = () => {
  return (
    <div className='reports'>
      <div className='reports__header'>
        <Title title='Reports overview' />
        <BiDotsVerticalRounded />
      </div>
      <div className='reports__value'>
        <p>$7,431.14 USD</p>
        <Line
          percent={10}
          strokeWidth='1'
          strokeColor='#377dff'
          trailColor='#A1A1E1'
        />
      </div>
      {reportsData.map((report) => {
        return (
          <Reports
            key={report.id}
            title={report.title}
            value={report.value}
            high={report.high}
            medium={report.medium}
            low={report.low}
          />
        );
      })}
    </div>
  );
};

export default DashboardReports;

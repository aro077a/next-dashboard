import { TiUserAdd } from 'react-icons/ti';
import Title from '../title/Title';
import Button from '../button/Button';
import { infoData } from './dashboardInfoData';
import DashboardInfo from './DashboardInfo';
import DashboardUsersImport from './DashboardUsersImport';
import DashboardReports from './DashboardReports';

const Dashboard = () => {
  return (
    <article className='dashboard'>
      <section className='dashboard__title'>
        <Title title='Dashboard' />
        <Button
          preIcon={<TiUserAdd />}
          className='dashboard'
          buttonText='Invite users'
        />
      </section>
      <section className='dashboard-info'>
        {infoData.map((info) => {
          return (
            <DashboardInfo
              key={info.id}
              title={info.title}
              total={info.total}
              high={info.high}
              low={info.low}
              from={info.from}
              initial={info.initial}
            />
          );
        })}
      </section>
      <section className='user-import'>
        <DashboardUsersImport />
        <div className='user-chart'>
          <img src='/images/chart1.png' />
        </div>
      </section>
      <section>{/* TODO table */}</section>
      <section className='user-import'>
        <div className='user-chart'>
          <img src='/images/datalabel.png' />
        </div>
        <DashboardReports />
      </section>
    </article>
  );
};

export default Dashboard;

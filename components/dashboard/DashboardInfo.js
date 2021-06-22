import { BiPulse } from 'react-icons/bi';

const DashboardInfo = ({ title, total, high, low, from, initial }) => {
  return (
    <div className='dashboard-info__container'>
      <div className='dashboard-info__content'>
        <p className='dashboard-info--title'>{title}</p>
        <p className='dashboard-info--total'>{total}</p>
        <div className='dashboard-info__values-content'>
          <div
            className={
              high
                ? 'dashboard-info__values-high'
                : low
                ? 'dashboard-info__values-low'
                : 'dashboard-info__values-initial'
            }
          >
            <span className='dashboard-info--percent'>
              <BiPulse />
              {high || low || initial}
            </span>
          </div>
          <span className='dashboard-info--from'>{from}</span>
        </div>
      </div>
      <div className='dashboard-info__chart'>
        <img src='/images/graph.png' />
      </div>
    </div>
  );
};

export default DashboardInfo;

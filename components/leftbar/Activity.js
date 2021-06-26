import { MdKeyboardArrowRight } from 'react-icons/md';

const Activity = () => {
  return (
    <div className='activity'>
      <div className='activity__container'>
        <div className='activity__box'>
          <div className='activity__user'>
            <div className='activity__image'>
              <img src='/images/img9.jpg' />
            </div>
          </div>
          <div className='activity__content'>
            <p className='activity--name'>Iana Robinson</p>
            <p className='activity--info'>
              Added 2 files to task <a href='#'> FD-7</a> <span>completed</span>
            </p>
          </div>
        </div>
        <div className='activity__line'>
          <img src='/images/file.png' />
          <p className='activity--date'>now</p>
        </div>
      </div>
      <div className='activity__container'>
        <div className='activity__box'>
          <div className='activity__user'>
            <div className='activity__image'>
              <p>B</p>
            </div>
          </div>
          <div className='activity__content'>
            <p className='activity--name'>Bob Dean</p>
            <p className='activity--info'>
              Added 2 files to task <a href='#'> FD-7</a> <span>completed</span>
            </p>
          </div>
        </div>
        <div className='activity__line'>
          <p className='activity--date'>today</p>
          <p className='activity--date'>today</p>
          <p className='activity--date'>today</p>
          <p className='activity--date'>today</p>
          <p className='activity--date'>today</p>
          <p className='activity--date'>today</p>
        </div>
      </div>
      <div className='activity__container'>
        <div className='activity__box'>
          <div className='activity__user'>
            <div className='activity__image'>
              <img src='/images/img8.jpg' />
            </div>
          </div>
          <div className='activity__content'>
            <p className='activity--name'>Iana Robinson</p>
            <p className='activity--info'>
              Added 2 files to task <a href='#'> FD-7</a> <span>completed</span>
            </p>
          </div>
        </div>
        <div className='activity__line'>
          <p className='activity--date'>now</p>
        </div>
      </div>
      <div className='activity__container'>
        <div className='activity__box'>
          <div className='activity__user'>
            <div className='activity__image'>
              <p>D</p>
            </div>
          </div>
          <div className='activity__content'>
            <p className='activity--name'>Bob Dean</p>
            <p className='activity--info'>
              Added 2 files to task <a href='#'> FD-7</a> <span>completed</span>
            </p>
          </div>
        </div>
        <div className='activity__line'>
          <p className='activity--date'>today</p>
          <p className='activity--date'>today</p>
          <p className='activity--date'>today</p>
          <p className='activity--date'>today</p>
          <p className='activity--date'>today</p>
          <p className='activity--date'>today</p>
        </div>
      </div>
      <button className='activity__button'>
        <span>View all</span>
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Activity;

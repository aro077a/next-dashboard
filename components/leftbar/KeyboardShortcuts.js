import Title from '../title/Title';

const KeyboardShortcuts = () => {
  return (
    <div className='key-short'>
      <div className='key-short__content'>
        <Title title='Formatting' />

        <ul>
          <li>
            <p className='key-short--text'>
              <b>Bold</b>
            </p>
            <p className='key-short--key'>
              <kdb>Ctrl</kdb>
              <small> + </small>
              <kdb>b</kdb>
            </p>
          </li>
          <li>
            <p className='key-short--text'>
              <i>italic</i>
            </p>
            <p className='key-short--key'>
              <kdb>Ctrl</kdb>
              <small> + </small>
              <kdb>i</kdb>
            </p>
          </li>
          <li>
            <p className='key-short--text'>
              <u>Underline</u>
            </p>
            <p className='key-short--key'>
              <kdb>Ctrl</kdb>
              <small> + </small>
              <kdb>u</kdb>
            </p>
          </li>
        </ul>
      </div>
      <div className='key-short__content'>
        <Title title='Insert' />

        <ul>
          <li>
            <p className='key-short--text'>
              Mention person
              <br />
              <a href='#'>(@Brian)</a>
            </p>
            <kdb className='key-short--keyValue'>@</kdb>
          </li>
          <li>
            <p className='key-short--text'>
              Link to doc
              <br />
              <a href='#'>(+Meeting notes)</a>
            </p>
            <kdb className='key-short--keyValue'>+</kdb>
          </li>
          <li>
            <a href='#'>#hashtag</a>
            <kdb className='key-short--keyValue'>#hashtag</kdb>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KeyboardShortcuts;

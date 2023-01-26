import PropTypes from 'prop-types';

const MsgForm = (props) => {
  const { title, result, paragraph, error } = props;
  const backgroundForm =
    'succesful flex flex-col items-center content-center gap-4 text-color_secondary_1 bg-accent_color_form px-10 py-10 rounded-b-[150px] rounded-tl-[150px]';
  return (
    <div
      className={`${backgroundForm} ${
        error ? 'bg-error_sent_form' : 'bg-accent_color_form'
      }`}
    >
      <div>
        <p className='text-lg font-bold leading-[34px] text-center'>{title}</p>
        <p className='text-lg font-bold leading-[34px] text-center'>{result}</p>
      </div>
      <p className='text-lg font-normal leading-[34px] text-center'>
        {paragraph}
      </p>
      <div className='flex'>
        <img
          src='./src/assets/img/succ_facebook-icon.png'
          alt='facebook icon'
          className='social'
        />
        <img
          src='./src/assets/img/succ_linkedin-icon.png'
          alt='linkedin icon'
          className='social'
        />
        <img
          src='./src/assets/img/succ_twitter-icon.png'
          alt='twitter icon'
          className='social'
        />
      </div>
    </div>
  );
};

export default MsgForm;

MsgForm.propTypes = {
  title: PropTypes.string,
  result: PropTypes.string,
  paragraph: PropTypes.string,
  error: PropTypes.bool,
};

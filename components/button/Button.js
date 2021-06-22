const Button = ({ preIcon, buttonText, postIcon, className }) => {
  return (
    <div className={`${className}__buttonContainer`}>
      {preIcon}
      <button className='button_Main'>{buttonText}</button>
      {postIcon}
    </div>
  );
};

export default Button;

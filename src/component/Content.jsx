import { useRef, useState } from 'react';

const Content = () => {
  const [text, setText] = useState('');
  const textRef = useRef();

  const handleClick = () => {
    setText(textRef.current.value);
  };

  return (
    <section>
      <div className="container">
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            style={{ height: 200 }}
            ref={textRef}
          ></textarea>
          <label className="fw-bold text-dark">Write here...</label>
        </div>
        <button className="btn btn-success btn-lg m-4" onClick={handleClick}>
          Update Text
        </button>
        <p className="fst-italic text-dark">Here is the final text: {text}</p>
      </div>
    </section>
  );
};

export default Content;

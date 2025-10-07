import React from "react";

import { Cursor, useTypewriter } from "react-simple-typewriter";

const TypeWriterEffect = React.memo(() => {
  const [text] = useTypewriter({
    words: ["Frontend Developer","UI/UX Enthusiast", "Self Learner"],
    loop: 0,
  });
  return (
    <div className="my__info__position">
      {text}
      <Cursor cursorColor="#d62222" />
    </div>
  );
});

export default TypeWriterEffect;

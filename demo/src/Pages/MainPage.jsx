import React, { useState } from "react";
import { SayHello } from "@manenderk/js-utils";

const MainPage = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <div className="form-group">
        <input type="text" className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      {
        text && <p>{SayHello(text)}</p>
      }
      
    </div>
  );
};

export default MainPage;

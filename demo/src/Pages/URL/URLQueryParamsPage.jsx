import React, {useState} from "react";
import { getQueryParams, getQueryParamValue } from "@manenderk/js-utils";

const URLQueryParamsPage = () => {
  const [keyName, setKeyName] = useState("");

  return (
    <>
      <p>{JSON.stringify(getQueryParams())}</p>
      <div className="form-group">
        <input type="text" className="form-control"
        
          value={keyName}
          onChange={(e) => setKeyName(e.target.value)}
        />
      </div>
      <p>{getQueryParamValue(keyName)}</p>
    </>
  );
};

export default URLQueryParamsPage;

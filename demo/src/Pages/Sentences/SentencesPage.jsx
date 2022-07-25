import React, {useState} from 'react';
import { capitalizeFirstLetter } from '@manenderk/js-utils';

const SentencesPage = () => {

  const [firstLetterCapStr, setFirstLetterCapStr] = useState('');

  return (
    <div>
      <h3>Capitalize First Letter</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input type="text" className="form-control" 
              placeholder='Type a sentence here'
              value={firstLetterCapStr}
              onChange={(e) => setFirstLetterCapStr(e.target.value)}
            />
          </div>
          
        </div>
        <div className="col-md-6">
          {capitalizeFirstLetter(firstLetterCapStr)}
        </div>
      </div>

    </div>

  )
}

export default SentencesPage
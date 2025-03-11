import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='purple f2'>
        {`${name}, your entry count is: `}
      </div>
      <div className='purple f1'>
        {entries}
      </div>

    </div>
  );
}

export default Rank;
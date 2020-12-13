import React from 'react';
import { useHistory } from 'react-router-dom';

export default function E404() {
  const history = useHistory();
  return (
    <div>
      <button
        onClick={() => {
          history.replace('/a/about-them');
        }}
      >
        go to home
      </button>
      {/* <Link to="/a/about-them" replace>
        go to home
      </Link> */}
    </div>
  );
}

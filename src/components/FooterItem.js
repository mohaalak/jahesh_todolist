import React from 'react';

export function FooterItem ({ name, value, active, changeFilter }){
  return(
    <button
      onClick={() => changeFilter(value)}
      className={active === value ? 'active' : ''}
    >
      {name}
    </button>
  )
}

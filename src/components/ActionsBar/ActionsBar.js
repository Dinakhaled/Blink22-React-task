import React from 'react';
import "./ActionsBar.scss";

/*
  Action bar is used for drawing list of actions
  @props: {title, action}
*/

const ActionsBar = ({title, actions}) => {
  return ( 
    <div className='actions-bar'>
      <h4 className="mb-0">{title}</h4>
      {actions.length > 0 && <nav className="actions-bar__items-container">
        {actions.map(item => (
          <a className="actions-bar__item" href="/" key={item.id}>{item.content}</a>
        ))}
      </nav>}
    </div>
  );
}

ActionsBar.defaultProps = {
  title: 'Actions bar',
  actions: []
};
 
export default ActionsBar;
import React from 'react';
import Avatar from '../../assets/images/avatar.png';
import checkMark from '../../assets/images/check_light.png';
import Button from '../Button/Button';
import Info from '../Info/Info';
import "./ChatBubble.scss";

const ChatBubble = ({from, who, date, action, text, children, title, textIcon, hasFooter}) => {
  console.log(hasFooter);
  
  return ( 
    <div className={`chat-bubble mb-10`}>
      <div>
        <div className={`chat-bubble__content ${from === 'them' ? 'from-them' : 'from-me'}`}>
          <h4 className="mb-15">{title}</h4>
          {children}
          <p className={`m-0 d-flex flex-center ${action ? 'mb-15' : ''}`}>{textIcon}{text}</p>
          <div className='chat-bubble__footer mt-20'>
            {action && <Button icon={<img src={checkMark} className='icon' alt='checkMark' />} theme='primary' />}
            {hasFooter && <div className="chat-bubble__footer__info">
                <div>
                  <p className='italic-font'>Derek Smith completed</p>
                  <p className='italic-font m-0'>Mar 23 3:23p</p>
                </div>
                <div className="chat-bubble__avatar ml-12" style={{backgroundImage: `url(${Avatar})`}}></div>
              </div>}
          </div>
          <p className='m-0 who'>{who}</p>
          <p className='m-0 date'>{date}</p>
        </div>
      </div>
      <div className={`chat-bubble__avatar ${from === 'them' ? 'from-them' : 'from-me'}`} style={{backgroundImage: `url(${Avatar})`}}></div>
    </div>
  );
}
 
export default ChatBubble;
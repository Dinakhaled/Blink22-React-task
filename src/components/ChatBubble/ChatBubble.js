import React from 'react';
import Avatar from '../../assets/images/avatar.png';
import checkMark from '../../assets/images/check_light.png';
import Button from '../Button/Button';
import historyIcon from "../../assets/images/history-icon.png";
import "./ChatBubble.scss";

/*
  ChatBubble component for render conversation bubble with different content
  @props: {from, who, date, action, text, children, title, textIcon, hasFooter, label, labelIcon, hasLinks}
*/

const ChatBubble = ({from, who, date, action, text, children, title, textIcon, hasFooter, label, labelIcon, hasLinks}) => {
  return ( 
    <div className={`chat-bubble mb-10`}>
      <div>
        <div className={`chat-bubble__content ${from === 'them' ? 'from-them' : 'from-me'}`} style={{backgroundColor: from === 'me' ? "#ededf8" : "#e6f2f2"}}>
          {title && <h4 className="mb-15">{title}</h4>}
          {children}
          {text && <p className={`m-0 d-flex flex-center ${action ? 'mb-15' : ''}`}>{textIcon}{text}</p>}
          {hasFooter && <div className='chat-bubble__footer mt-20'>
            {action && <Button icon={<img src={checkMark} className='icon' alt='checkMark' />} theme='primary' text="done" />}
            {label && <p className="chat-bubble__important-label"><span>{labelIcon}</span>{label}</p>}
            <div className="chat-bubble__footer__info">
                <div>
                  <p className='italic-font'>Derek Smith completed</p>
                  <p className='italic-font m-0'>Mar 23 3:23p</p>
                </div>
                <div className="chat-bubble__avatar ml-12" style={{backgroundImage: `url(${Avatar})`}}></div>
            </div>
          </div>}
          {hasLinks && <div className='d-flex flex-center space-between'>
            {label && <p className="chat-bubble__important-label"><span>{labelIcon}</span>{label}</p>}
            <div className='d-flex flex-center'>
              <img src={historyIcon} alt="history icon" className="mr-15" />
              <p className="m-0 bold">View History</p>
            </div>
            </div>}
          <p className='m-0 who'>{who}</p>
          <p className='m-0 date'>{date}</p>
        </div>
      </div>
      <div className={`chat-bubble__avatar ${from === 'them' ? 'from-them' : 'from-me'}`} style={{backgroundImage: `url(${Avatar})`}}></div>
    </div>
  );
}
 
export default ChatBubble;
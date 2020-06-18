import React from 'react';
import Avatar from '../../assets/images/avatar.png';
import checkMark from '../../assets/images/check_light.png';
import Button from '../Button/Button';
import "./ChatBubble.scss";

const ChatBubble = ({from}) => {
  return ( 
    <div className={`chat-bubble`}>
      <div className={`chat-bubble__content ${from === 'them' ? 'from-them' : 'from-me'}`}>
        Dina khaled Dina khaled Dina khaled Dina khaled Dina khaled Dina khaled Dina khaled Dina khaled Dina khaled Dina khaled Dina khaled Dina khaled Dina khaled Dina khaled Dina khaled Dina khaled Dina khaled Dina khaled Dina khaled Dina khaled 
      </div>
      <div className={`chat-bubble__avatar ${from === 'them' ? 'from-them' : 'from-me'}`} style={{backgroundImage: `url(${Avatar})`}}></div>
      <Button icon={<img src={checkMark} className='icon' alt='' />} theme='primary' />
    </div>
  );
}
 
export default ChatBubble;
import React, { Component } from 'react';
import ConversationList from '../ConversationList/ConversationList';
import "./Chat.scss";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="chat">
        <ConversationList />
        <div></div>
      </div>
    );
  }
}
 
export default Chat;
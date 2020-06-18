import React, { Component } from 'react';
import Conversation from '../Conversation/Conversation';
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
        <Conversation />
      </div>
    );
  }
}
 
export default Chat;
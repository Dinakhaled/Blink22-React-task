import React, { Component } from 'react';
import ActionsBar from '../../components/ActionsBar/ActionsBar';
import membersIcon from "../../assets/images/ico_group.png";
import filterIcon from "../../assets/images/ico_filter.png";
import searchIcon from "../../assets/images/ico_search.png";
import ChatBubble from '../../components/ChatBubble/ChatBubble';
import ConversationData from "../../FakeData/Conversation.json";
import Info from "../../components/Info/Info";
import sketchIcon from "../../assets/images/notes_26.png";
import dateIcon from "../../assets/images/time_copy.png";
import "./Conversation.scss";

class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      headerActions: [
        {id: 1, content: <img src={membersIcon} alt="members icon" />},
        {id: 2, content: <img src={filterIcon} alt="filter icon" />},
        {id: 3, content: <img src={searchIcon} alt="search icon" />}
      ]
    }
  }

  renderConversation = (ConversationData) => {
    return ConversationData.map(({from, who, date, action, text, children, title, textIcon, hasFooter, hasInfo, id}) => (
      <ChatBubble 
        from={from}
        who={who}
        date={date}
        action={action}
        text={text}
        title={title}
        key={id}
        textIcon={textIcon && <img src={sketchIcon} alt="sketch icon" className='mr-12' />}
        hasFooter={hasFooter}
      >
      {hasInfo && <div className='conversation-detailes mb-15'>
        <div>
          <img src={dateIcon} alt='icon' className='mr-12' />
        </div>
        <div>
          <p>FRI Oct 12 4:27 PM</p>
          <p className='m-0 sub-title'>kbecker@gmail.com completed - THU Oct 11 3:29 PM</p>
        </div>
        </div>}
      </ChatBubble>
    ))
  }

  render() { 
    const { headerActions } = this.state;
    return ( 
      <div>
        <ActionsBar actions={headerActions} title='Mom’s Discharge Plan' />
        <div className='p-30 conversation-container'>
          {this.renderConversation(ConversationData)}
        </div>
      </div>
    );
  }
}
 
export default Conversation;
import React, { Component } from 'react';
import Info from '../../components/Info/Info';
import conversationList from "../../FakeData/conversationList.json";
import chatIcon from "../../assets/images/new_conversation.png";
import "./ConversationList.scss";

class ConversationList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  renderConversationList = (conversationList) => {
    return conversationList.map(item => (
      <div className="conversations__list-item">
        <Info
          key={item.id}
          title={item.title}
          subTitle={item.subTitle}
          text={item.text}
          image={item.image}
          date={item.date}
          tag={item.hasNotifications}
        />
      </div>
    ))
  }

  render() { 
    return ( 
      <div className="conversations">
        <div className="conversations__header">
          <h4 className="text-white mb-0">Conversations</h4>
          <img src={chatIcon} />
        </div>
        {this.renderConversationList(conversationList)}
      </div>
    );
  }
}
 
export default ConversationList;
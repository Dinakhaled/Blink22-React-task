import React, { Component } from 'react';
import Info from '../../components/Info/Info';
import conversationList from "../../FakeData/conversationList.json";
import chatIcon from "../../assets/images/new_conversation.png";
import "./ConversationList.scss";

class ConversationList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeConversationId: 1
    }
  }

  renderConversationList = (conversationList) => {
    const { activeConversationId } = this.state;
    return conversationList.map(item => (
      <div key={item.id} className={`conversations__list-item ${item.id === activeConversationId ? "active" : ""}`}>
        <Info
          title={item.title}
          subTitle={item.subTitle}
          text={item.text}
          image={item.image}
          date={item.date}
          tag={item.hasNotifications}
          ImgSize="lg"
          alignment="flex-center"
        />
      </div>
    ))
  }

  render() { 
    return ( 
      <div className="conversations">
        <div className="conversations__header">
          <h4 className="text-white mb-0">Conversations</h4>
          <img src={chatIcon} alt="chat icon" />
        </div>
        <div className="conversations__list">
          {this.renderConversationList(conversationList)}
        </div>
      </div>
    );
  }
}
 
export default ConversationList;
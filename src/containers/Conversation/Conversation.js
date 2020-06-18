import React, { Component } from 'react';
import ActionsBar from '../../components/ActionsBar/ActionsBar';
import membersIcon from "../../assets/images/ico_group.png";
import filterIcon from "../../assets/images/ico_filter.png";
import searchIcon from "../../assets/images/ico_search.png";


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

  render() { 
    const { headerActions } = this.state;
    return ( 
      <ActionsBar actions={headerActions} title='Mom’s Discharge Plan' />
    );
  }
}
 
export default Conversation;
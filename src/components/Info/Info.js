import React from 'react';
import avatarDefault from "../../assets/images/careteam_copy.png";
import "./Info.scss";

/*
  Info component for render media design avatar/icon beside some texts
  @props: {title, subTitle, text, date, image, tag, ImgSize, alignment}
*/

const Info = ({title, subTitle, text, date, image, tag, ImgSize, alignment}) => {
  return ( 
    <div className='info'>
      <div className={`info__main-content ${alignment}`}>
        <div className={`info__avatar mr-12 ${tag ? "info__avatar--tag" : ""} ${ImgSize === 'sm' ? "info__avatar--sm" : "info__avatar--lg"}`} style={{backgroundImage: `url(${image ? image : avatarDefault})`}}></div>
        <div>
          <h4>{title}</h4>
          <h5 className='italic-font'>{subTitle}</h5>
          <p className='mb-0'>{text}</p>
        </div>
      </div>
      <div>
        <small>{date}</small>
        {tag && <div className="info__tag">{tag}</div>}
      </div>
    </div>
  );
}

Info.defaultProps = {
  title: 'Mom’s Discharge Plan',
  subTitle: 'Karen Becker',
  text: 'Sed mollis mi iaculis tincidu...',
  date: 'Oct 12',
  image: avatarDefault,
  tag: '',
  alignment: 'flex-start'
};
 
export default Info;
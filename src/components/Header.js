import React from 'react';
import screens from '../images/screen-mockups.svg';
import communities from '../images/icon-communities.svg';
import message from '../images/icon-messages.svg';


function Header() {
  return (
    <header className='header'>
      <h1 className="header__title">Build The Community Your Fans Will Love
      </h1>
      <h3 className="header__text">Huddle re-imagines the way we build communities. You have a voice, but so does
      your audience. Create connections with your users as you engage in genuine discussion.
      </h3>
      <button className="header__btn">Get Started For Free</button>
      <img className='header__screens' src={screens} alt="" />
      <div className="header__cardsWrap">
        <div className="cards">
          <img src={communities} alt="communitiesIcon" className="cards__smallIcon" />
          <h2 className="cards__stats">1.4k+</h2>
          <p className="cards__statsText">Communities Formed</p>

        </div>
        <div className="cards">
          <img src={message} alt="messageIcon" className="cards__smallIcon" />
          <h2 className="cards__stats">2.7m+</h2>
          <p className="cards__statsText">Messages Sents</p>
        </div>
      </div>

    </header>
  )
}

export default Header

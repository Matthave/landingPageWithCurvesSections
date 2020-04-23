import React from 'react';
import mobileBottom1 from '../images/bg-section-bottom-mobile-1.svg';
import mobileBottom2 from '../images/bg-section-bottom-mobile-2.svg';
import mobileTop1 from '../images/bg-section-top-mobile-1.svg';
import mobileTop2 from '../images/bg-section-top-mobile-2.svg';

import imgSectionGrow from '../images/illustration-grow-together.svg';
import imgSectionCommunities from '../images/illustration-flowing-conversation.svg';
import imgSectionUsers from '../images/illustration-your-users.svg';

const bodySectionsArr = [
  {
    id: 1,
    curvesTop: mobileTop1,
    img: imgSectionGrow,
    title: 'Grow Together',
    text: 'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.',
    curvesBottom: mobileBottom1,
  },
  {
    id: 2,
    curvesTop: null,
    img: imgSectionCommunities,
    title: 'Flowing Conversations',
    text: `You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
    just-in-time loading for a more natural flow.`,
    curvesBottom: null,
  },
  {
    id: 3,
    curvesTop: mobileTop2,
    img: imgSectionUsers,
    title: 'Your Users',
    text: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users start chatting immediately.",
    curvesBottom: mobileBottom2,
  }
]

function Main() {
  const bodySectionsMap = bodySectionsArr.map((section) => (
    <section key={section.id} className='growTogether'>
      <img src={section.curvesTop} alt="" className="curves" />
      <img src={section.img} alt="" className="growTogether__img" />
      <h2 className="growTogether__title">
        {section.title}
      </h2>
      <p className="growTogether__text">
        {section.text}
      </p>
      {section.curvesBottom !== null ? <img src={section.curvesBottom} alt="" className="curves" /> : null}
    </section>
  ))
  return (
    <main>
      {bodySectionsMap}
      <section className="getStart">
        <h2 className="getStart__title">Ready To Build Your Community?</h2>
        <button className="getStart__btn">Get Started For Free</button>
      </section>
    </main>
  )
}

export default Main
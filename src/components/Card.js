import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default class Card extends Component {
  render() {
    return (
        <div className="cards">
<div className="card">
  <div className="card-image" style={{height: '200px', width:'330px'}}>

  </div>
  <div className="card-bio">
  <div className="card-left"><p className="name">George Catstanza</p>
  </div>
  <div className="card-right">
  <p>73228</p>
  </div>

   </div>
   <div className="card-bottom">
    <p>M -</p>
    <p>3 yrs old -</p>
    <p>Short Hair -</p>
    <p>Playful</p>
  </div>
  <div className="cta">
    <a href="/adopt">Meet Me</a>
  </div>
  <div className="social">
<FontAwesomeIcon icon={['fab', 'facebook-f']} color='#93378c' className='card-link' />
<FontAwesomeIcon icon={['fab', 'instagram']} color='#93378c' className='card-link' />
<FontAwesomeIcon icon="share" color='#93378c' className='card-link' />
<FontAwesomeIcon icon="heart" color='#93378c' className='card-link' />

  </div>
</div>
<div className="card">
  <div className="card-image" style={{height: '200px', width:'330px'}}>

  </div>
  <div className="card-bio">
  <div className="card-left"><p className="name">George Catstanza</p>
  </div>
  <div className="card-right">
  <p>73228</p>
  </div>

   </div>
   <div className="card-bottom">
    <p>M -</p>
    <p>3 yrs old -</p>
    <p>Short Hair -</p>
    <p>Playful</p>
  </div>
  <div className="cta">
    <a href="/adopt">Meet Me</a>
  </div>
  <div className="social">
<FontAwesomeIcon icon={['fab', 'facebook-f']} color='#93378c' className='card-link' />
<FontAwesomeIcon icon={['fab', 'instagram']} color='#93378c' className='card-link' />
<FontAwesomeIcon icon="share" color='#93378c' className='card-link' />
<FontAwesomeIcon icon="heart" color='#93378c' className='card-link' />

  </div>
</div>
<div className="card">
  <div className="card-image" style={{height: '200px', width:'330px'}}>

  </div>
  <div className="card-bio">
  <div className="card-left"><p className="name">George Catstanza</p>
  </div>
  <div className="card-right">
  <p>73228</p>
  </div>

   </div>
   <div className="card-bottom">
    <p>M -</p>
    <p>3 yrs old -</p>
    <p>Short Hair -</p>
    <p>Playful</p>
  </div>
  <div className="cta">
    <a href="/adopt">Meet Me</a>
  </div>
  <div className="social">
<FontAwesomeIcon icon={['fab', 'facebook-f']} color='#93378c' className='card-link' />
<FontAwesomeIcon icon={['fab', 'instagram']} color='#93378c' className='card-link' />
<FontAwesomeIcon icon="share" color='#93378c' className='card-link' />
<FontAwesomeIcon icon="heart" color='#93378c' className='card-link' />

  </div>
</div>
</div>
    )
  }
}
import React, { Component } from 'react';




export default class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
      <div className='homeBanner'>
        <h1>Purrfect Match</h1>
        <p>If you’re thinking about adopting a cat or kitten, Feline Rescue is a smart choice. By adopting a Feline Rescue pet you’ll be supporting our caring, no-kill organization and making room for one more homeless cat. We’re always looking for good, safe, loving homes for our many cats and kittens.

        All of our cats receive high-quality veterinary care and exams. Prior to adoption, all of our cats and kittens are FeLV/FIV tested; spayed/neutered, treated for external and internal parasites, microchipped, and FVRCP (distemper) vaccinated. We charge an adoption fee to offset part of these costs.</p>
        </div>
        <div className="filters">
            <select name="gender" id="" className="gender">Gender
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            </select>
            
            <select name="age" id="" className="age">Age
            <option value="kitten">Kitten</option>
            <option value="adult">Adult</option>
            <option value="senior">Senior</option>
            </select>
            <select name="fur" id="" className="hair">Fur
            <option value="short">Short Hair</option>
            <option value="long">Long Hair</option>
            <option value="hairless">Hairless</option>
            </select>
            <select name="personality" id="" className="personality">
            <option value="cuddly" className="cuddle">Cuddly</option>
            <option value="loner" className="cuddle">Loner</option>
            <option value="feisty" className="cuddle">Feisty</option>
            <option value="playful">Playful</option>
            </select>
        </div>

      </div>
    )
  }
}
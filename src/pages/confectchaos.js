// import Slideshow from './slideshow';
import './index.css';

//Import Images
import CCDevshot from '../images/CC_devshot.png'

export default function ConfectioneryChaos() {
  return (
    <div className="space-container">
      <h2 className="header">Confectionery Chaos</h2>

      <p>
        <b>Developer Notes:</b> My latest project in the making, as of right now I don't have very much to provide outside of art. However, it's 
        a project I am extremely passionate on continuing, so I hope to be able to update this page with more things to share.
      </p>

      <p>
        <b>Description:</b> Ten objects find themselves suddenly thrust into a gameshow run by their host “Chef”, who promises them a grand prize. 
        With no room to question why and no room to argue against, they decide to play for the hell of it: little do they know, however, what “losing” 
        really means. There is no grand prize, there is no grace for winning: the only “winning” is survival— if they can figure out how and why they 
        ended up in this competition, and how to get back home before they end up as leftovers.
      </p>
      <p>
        <b>Status:</b> Currently in-development
      </p>

      <h2>Development Screenshots</h2>
      <p>
        If you would like to see these designs on Figma, <a className='text-highlight' href="https://www.figma.com/design/Pbtv00WvfIY93IjIvfRZLe/CCC-Screen-Test?node-id=0-1&t=9Ld2Mw1Mso8CiTQb-1"><u>please click here!</u></a>
      </p>
      <div>

      </div>
      <img src={CCDevshot} alt="UI/UX design progress for Confectionery Chaos" width={650}/>

    </div>
  )
}
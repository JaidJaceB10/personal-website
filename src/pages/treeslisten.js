import Slideshow from './slideshow';
import './index.css';

//Import Images
import TALDevshot1 from '../images/TAL_devshot1.png'
import TALDevshot2 from '../images/TAL_devshot2.png'
import TALDevshot3 from '../images/TAL_devshot3.png'
import TALDevshot4 from '../images/TAL_devshot4.png'
import TALDevshot5 from '../images/TAL_devshot5.png'


export default function TheTreesAreListening() {

  const TALImages = [TALDevshot1, TALDevshot2, TALDevshot3, TALDevshot4, TALDevshot5]

  return (
    <div className="space-container">
      <h2 className="header">The Trees Are Listening</h2>

      <p>
        <b>Developer Notes:</b> At some point during my time in SFSU, I found out the Game Dev Club held game jams for members of 
        the club to participate in and share any game work, given it followed a fairly loose theme. I think it was during one of my 
        Fall semesters when I thought I'd give it a try in-between my computer science studies, and so "The Trees Are Listening" came 
        to fruition. It was a solo development on my part, with using free resources that were credited in llines of code as I worked 
        to reach the deadline of the Game Jam. Unfortunately, due to overlap with heavy assignments and test/quizzes, I was unable to 
        publish this project in time. However, I made ample progress with "The Trees Are Listening", being one of my largest visual novel 
        projects to date with over 1.2K lines of code-- dialogue, movement, image shifting-- written in the span of a week (I think).
      </p>
      <p>
        At the moment I have my head focused on a different project entirely, but someday I hope to finish what I started with "The Trees Are Listening". 
        These characters still mean a whole lot to me, I feel in love with the world however horrific it is, and I'd love to tell the stories of 
        "Beyond the Depths" one way or another.
      </p>

      <p>
        <b>Description:</b> In the small neighborhood of Rookwall, Missouri, people have started to go missing. When Darren Baker 
        becomes one of the missing, three best friends set out to find their lost underclassman: unbeknownst to them, 
        they'll be finding out more than they bargained for.
      </p>
      <p>
        A story set within the world of "Beyond the Depths", follow along these three teenagers as they uncover the very same 
        threat decades before the disastrous events of Murkwood even began.
      </p>
      <p>
        <b>Status:</b> Halted development
      </p>

      <h2>Development Screenshots</h2>

      <Slideshow images={TALImages} />


    </div>
  )
}
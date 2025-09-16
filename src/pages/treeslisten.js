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
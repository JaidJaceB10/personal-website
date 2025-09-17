import Slideshow from './slideshow';
import './index.css';

//Import Images
import Original1 from '../images/Original1.png';
import Original2 from '../images/Original2.png';
import Original3 from '../images/Original3.png';
import Original4 from '../images/Original4.png';
import Original5 from '../images/Original5.png';
import Original6 from '../images/Original6.png';
import Original7 from '../images/Original7.png';
import Original8 from '../images/Original8.png';
import Original9 from '../images/Original9.png';
import Original10 from '../images/Original10.png';
import Original11 from '../images/Original11.png';
import Original12 from '../images/Original12.png';
import Original13 from '../images/Original13.png';
import Original14 from '../images/Original14.png';

import Fanart1 from '../images/Fanart1.png';
import Fanart2 from '../images/Fanart2.png';
import Fanart3 from '../images/Fanart3.png';
import Fanart4 from '../images/Fanart4.png';
import Fanart5 from '../images/Fanart5.png';
import Fanart6 from '../images/Fanart6.png';
import Fanart7 from '../images/Fanart7.png';
import Fanart8 from '../images/Fanart8.png';
import Fanart9 from '../images/Fanart9.png';

export default function FullPieces() {

  const OriginalImages = [Original1, Original2, Original3, Original4, Original5, Original6, Original7, Original8, Original9, Original10, Original11, Original12, Original13, Original14];
  const FanartImages = [Fanart1, Fanart2, Fanart3, Fanart4, Fanart5, Fanart6, Fanart7, Fanart8, Fanart9];


  return (
    <div className="space-container">
      <h2 className="header">Full Pieces</h2>
      <p>
        For over ten years I was able to grow and improve with my art, drawing both original 
        pieces and fan art for other medias. Below are some art pieces that I recently 
        finished <i>(the range is between early 2024 - current 2025).</i>
      </p>
      <p>
        As I maintain this website project, I plan to keep this section up-to-date
        as new pieces and projects are made.
      </p>

      <h2>Original Artwork</h2>
      <p>
        These original pieces consist of characters that are of my own creation, friends just os happened to be featured, 
        as well as pieces that are experimental in nature. My style is fairly consistent, but I often try out new things to 
        see what sticks.
      </p>

      <Slideshow images={OriginalImages} />
      <br />


      <h2>Fanart</h2>
      <p>
        This section is dedicated to fanart I've done for various media that I enjoy, ranging from video games,
        webcomics, webseries, and TV shows. Currently, however, what is showcased below are characters that are not my own 
        BUT they are personally designed as how I see fit-- as within the media itself they are not depicted as human/oid.
      </p>
      <ul> Currently featured are characters from:
        <li>"X Finds Out His Value", aka "XFOHV", which can be found <a className="text-highlight"href='https://www.youtube.com/@BFDI'><u>here.</u></a></li>
      </ul>

      <Slideshow images={FanartImages} />
      <br />
    </div>
  )
}
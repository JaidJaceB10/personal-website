import Slideshow from './slideshow';
import './index.css';

//Import Images
import RainyDay from '../images/RainyDay1.png';
import RainyDay2 from '../images/RainyDay2.png';

import FishingForCover from '../images/FishingForCover.png';
import FishingForInfo from '../images/FishingForInfo.png';
import FishingFor1 from '../images/FishingFor1.png';
import FishingFor2 from '../images/FishingFor2.png';
import FishingFor3 from '../images/FishingFor3.png';
import FishingFor4 from '../images/FishingFor4.png';
import FishingFor5 from '../images/FishingFor5.png';

export default function Storyboards() {

  const RainyDayImages = [RainyDay, RainyDay2];
  const FishingForImages = [FishingForCover, FishingForInfo, FishingFor1, FishingFor2, FishingFor3, FishingFor4, FishingFor5];

  return (
    <div className="space-container">
      <h2 className="header">Storyboards</h2>

      <p>
        While not having as much practice or standing with this particular craft, I do have 
        a growing interest in crafting storyboards for projects both big and small. I have done 
        comicwork before and have found there is a stark difference-- regardless I do intend on 
        practicing and improving my skills in this area. Below are some storyboards I've done 
        for academic purposes.
      </p>

      <h2>"Rainy Day" - Assignment for CINE440 [FA2025]</h2>

      <Slideshow images={RainyDayImages} />
      <br />

      <h2>"Fishing For...?" - Assignment for CINE440 [FA2025] </h2>

      <Slideshow images={FishingForImages} />
      <br />

    </div>
  )
}
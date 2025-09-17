import Slideshow from './slideshow';
import './index.css';

// Import Images
import BTDCover from '../images/BTD_Cover.png';
import BTDInfo from '../images/BTD_Info.png';
import Dante from '../images/DanteSeraphim.png';
import Josie from '../images/JosephineRamos.png';
import Kathy from '../images/KathleenEzekiel.png';
import Naomi from '../images/NaomiZechariah.png';
import BTDProcess from '../images/BTD_Process.png';

import Gwyneth from '../images/GwynethGallagher.png';
import GwynethHeadshot from '../images/Gwyneth_Headshot.png';
import GwynethDoodle from '../images/Gwyneth_Doodle.png';

import MLMGen from '../images/MLM_gen.png';
import MLMShapes from '../images/MLM_shapes.png';
import Miffy from '../images/MiffyMittens.png';
import Mort from '../images/MortMittens.png';
import Fionna from '../images/FionnaTrixxie.png';

import WeaverComp from '../images/PW_NeverforComp.png';
import WeaverDoodles from '../images/PW_NeverforDoodles.png';
import WeaverProcess from '../images/PW_NeverforProcess.png';
import WeaverInspo from '../images/PW_NeverforInspo.png';
import WeaverConcept from '../images/PW_NeverforConcept.png';
import WeaverConcept2 from '../images/PW_NeverforConcept2.png';

import Mallace from '../images/Mallace.png';
import Persimmon from '../images/DarlenePersimmon.png';
import Joshua from '../images/JoshuaMatthews.png';
import TLLInspo from '../images/TLL_Inspo.png';

import Salem from '../images/SalemWastelands.png';
import Salem2 from '../images/SalemWastelands2.png';
import TTBInfo from '../images/TTB_Info.png';
import TTBProcess from '../images/TTB_Process.png';

export default function CharacterDesign() {

  const BTDImages = [BTDCover, BTDInfo, Dante, Josie, Kathy, Naomi, BTDProcess];
  const GwynethImages = [Gwyneth, GwynethHeadshot, GwynethDoodle];
  const MLMImages = [MLMGen, MLMShapes, Miffy, Mort, Fionna];
  const WeaverImages = [WeaverComp, WeaverDoodles, WeaverProcess, WeaverInspo, WeaverConcept, WeaverConcept2];
  const TLLImages = [ Mallace, Persimmon, Joshua, TLLInspo];
  const TTBImages = [Salem, Salem2, TTBInfo, TTBProcess];


  return (
    <div className="space-container">
      <h2 className="header">Character Design</h2>
      <p>
          Below are some projects, big, small, and derived from both classwork and personal work,
        where I've had to design characters to suit each project's aesthetic and functionality. I've
        created characters for games, stories, and general art for years, but these are some of my 
        more recent projects.
      </p>

      <h2>Beyond the Depths</h2>
      <p>
        "Beyond the Depths" is a personal passion project of mine, centered around combatting against the horrors 
        of the unknown, as well as preventing our own insecurities from eating us alive. It follows a 
        group of friends who uncover mysterious and abandoned computer files which take them on a journey to 
        confront (and defeat) an ancient evil that's been burdening their town-- and others like it-- for many years.
      </p>

      <Slideshow images={BTDImages} />

      <h2>Dungeons and Dragons - SFSU Campaign SP2025</h2>
      <p>
        During my final semester at SFSU, I participated in a "Dungeons and Dragons" class in which myself and a handful 
        of other students were given the task to create and play characters that would fall under the storytelling of our 
        professor/Dungeon-Master. Below, are drawings/visual aid of a character I played: a half-elf ex-criminal bard, 
        forced back into a life of crime when a loved one goes missing.
      </p>

      <Slideshow images={GwynethImages} />

      <h2>Miffy's Little Moments</h2>
      <p>
        "Miffy's Little Moments" is a small project created for CINE440, one that follows the daily life of the cartoonisly 
        bubbly Miffy Mittens, her mousy younger sibling Mortimer "Mort" Mittens, and their spunky best friend Fionna Trixxie. 
        While not an inherently serious comic project, I hope to one day delve into the sibling relationship between Miffy and 
        Mort, as well as explore themes of family and friendship.
      </p>

      <Slideshow images={MLMImages} />

      <h2>Project Wanderlust</h2>
      <p>
        "Project Wanderlust" is another smaller project created for CINE440, where an unwilling adventurer finds themselves 
        lost and at the mercy of a fairy-tale land called "The Bramble". Pictured below are one of the colorful characters 
        I designed for this project, "The Weaver of Neverfor": a charismatic but bitter merchant/storyteller with a disdain 
        for the human travellers that get lost within these woods.
      </p>

      <Slideshow images={WeaverImages} />

      <h2>The Tales from Lotus Labs</h2>
      <p>
        "The Tales from Lotus Labs" is an old personal passion project heavily inspired by various sci-fi elements, meant to be 
        an anthology of stories centered around one nefarious company: The Lotus Laboratories. In this first story, the company 
        finds themselves with a dangerous zombie-like outbreak contained within their iron-cladded walls. Following along the 
        alien captive/test subject MALLACE (Malice) and two staff members of Lotus Labs (Dr. Darlene Persimmon and Joshua Matthews, 
        a body guard) as they try to escape the facility with their lives on the line.
      </p>

      <Slideshow images={TLLImages} />

      <h2>The Ties That Bind</h2>
      <p>
        "The Ties That Bind" is another personal passion project of mine. Mixing a bit of sci-fi and fantasy, the story follows 
        a lone bandit living at the edge of The Outskirts (Salem "Wastelands") and a girl who fell from the sky (Jaye Barnes). 
        Tasked with the mission to help Jaye find her sister-- and to aid them both on their journey home, Salem must put their 
        survival skills to the test in order to protect Jaye from the dangers of The Outskirts.
      </p>

      <Slideshow images={TTBImages} />
      

    </div>
  )
}
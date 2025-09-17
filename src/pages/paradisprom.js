// import Slideshow from './slideshow';
import PDFViewer from './pdfviewer';
import './index.css';

export default function ParadisoPromenade() {
  return (
    <div className="space-container">
      <h2 className="header">Paradiso Promenade</h2>

      <p>
        <b>Developer Notes:</b> Based off a couple characters I've developed for years, the project itself is fairly new. "Paradiso Promenade" is 
        a game-development project I used as a means to re-purpose my old characters and tell their story in a different fashion than what I 
        could've done with their original source material. In this page, you will find the original development document I crafted specifically 
        for the class' Midterm Project. <i>(The class being CWL180, Introduction to Video Game Studies)</i>
      </p>

      <p>
        <b>Description:</b> A new angel is welcomed into the heavenly realm of Paradise, but she has a strange unsettling 
        feeling that she doesn't truly belong amongst the angels, despite her being told otherwise. Warped memories, odd 
        happenings, and suspicious activity at every turn, follow Ray-- the new angel-- as she delves deeper into the secrets 
        of Paradise. Is what she's feeling the truth of her situation, or is it all in her head?
      </p>
      <p>
        <b>Status:</b> Conceptualized, not in development(?)
      </p>

      <PDFViewer file={process.env.PUBLIC_URL + "/ParadisoPromenade.pdf"}/>
    </div>
  )
}
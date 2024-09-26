import './Navbar.css';

import foto1 from './images/foto1.jpg'; 
import foto2 from './images/foto2.jpg'; 
import foto3 from './images/foto3.jpg'; 
import foto4 from './images/foto4.jpg'; 
import foto5 from './images/foto5.jpg'; 

function Navbar () {
    return(
     <>
        <header> 
        <h1 className='title-animated-border'>Londra Vittoriana</h1> 
        <h2>prova</h2>
    </header> 
    <div className="container"> 
 
        <h2 id='intro'>Introduzione</h2> 
        <p>La Londra Vittoriana, che prende il nome dalla regina Vittoria, è un periodo storico che va dal 1837 al 1901. Durante questo periodo, Londra divenne la città più grande del mondo e il cuore dell'Impero Britannico.  La città era un centro di innovazione, cultura e progresso, ma anche di contrasti sociali. La rivoluzione industriale portò a un rapido sviluppo economico e tecnologico, trasformando Londra in una metropoli moderna. Tuttavia, questo progresso portò anche a problemi come l’inquinamento e le disuguaglianze sociali, che caratterizzarono la vita quotidiana di molti londinesi.</p> 
        <img src={foto1} alt="Descrizione della foto" className="responsive-image"/> 
 
 
        <h2 id='crescita'>Espansione e Crescita</h2> 
        <p>Nel XIX secolo, Londra crebbe enormemente, sia in termini di popolazione che di estensione territoriale. La città si espanse rapidamente, con la costruzione di nuove strade, ferrovie e un moderno sistema fognario. Questo sviluppo infrastrutturale fu accompagnato da un boom edilizio, con la costruzione di numerosi edifici pubblici e residenziali. La crescita della città fu alimentata anche dall’immigrazione, con persone provenienti da diverse parti del Regno Unito e dell’Impero che si stabilirono a Londra in cerca di opportunità. Questo periodo vide anche la nascita di nuovi quartieri e sobborghi, che cambiarono il volto della città.</p> 
        <img src={foto2} alt="Descrizione della foto" className="responsive-image"/>  
 
 
        <h2 id='condizioni di vita '>Condizioni di Vita</h2> 
        <p>Nonostante la ricchezza e il progresso, la Londra Vittoriana era anche una città di povertà estrema. Milioni di persone vivevano in quartieri sovraffollati e insalubri, immortalati nelle opere di Charles Dickens. Le condizioni igieniche erano spesso precarie, con malattie come il colera che si diffondevano rapidamente. La vita nelle classi lavoratrici era dura, con lunghe ore di lavoro e salari bassi. Tuttavia, questo periodo vide anche l’inizio di riforme sociali e sanitarie, con l’introduzione di leggi per migliorare le condizioni di vita e di lavoro. Organizzazioni filantropiche e movimenti sociali iniziarono a emergere, cercando di affrontare le disuguaglianze e migliorare la vita dei più poveri.</p> 
        <img src={foto3} alt="Descrizione della foto" className="responsive-image"/> 
 
 
        <h2 id='innovazioni'>Innovazioni e Progresso</h2> 
        <p>Durante questo periodo, Londra fu testimone di numerose innovazioni tecnologiche e scientifiche. La Grande Esposizione del 1851, tenutasi al Crystal Palace, mostrò al mondo le conquiste dell'Impero Britannico. Fu un’epoca di grandi scoperte e invenzioni, come il telegrafo, la fotografia e l’illuminazione a gas. La città divenne un centro di ricerca e sviluppo, attirando scienziati e inventori da tutto il mondo. Le innovazioni non si limitarono alla tecnologia; anche l’arte, la letteratura e la cultura fiorirono, con figure come Charles Dickens, Thomas Hardy e i Preraffaelliti che lasciarono un’impronta duratura.</p> 
        <img src={foto4} alt="Descrizione della foto" className="responsive-image"/> 
 
        <h2 id='immigrazione'>Immigrazione</h2> 
        <p>Come capitale di un vasto impero, Londra attirò immigrati da tutto il mondo. Una grande popolazione irlandese si stabilì in città durante l'era vittoriana, molti dei quali erano rifugiati dalla Grande Carestia. Oltre agli irlandesi, Londra vide l’arrivo di comunità provenienti dall’Europa continentale, dall’Asia e dalle colonie britanniche. Questi immigrati
          portarono con sé le loro culture, tradizioni e competenze, arricchendo il tessuto sociale della città. La diversità culturale di Londra contribuì a renderla una metropoli cosmopolita e vibrante, con una varietà di influenze che si riflettevano nella cucina, nella moda e nelle arti.</p> 
        <img src={foto5} alt="Descrizione della foto" className="responsive-image"/> 
   
    </div> 
 
       <footer> 
        <p>created by Alessandro Di Silvestre web deveoper front end</p> 
        <p>© 2024 London. Tutti i diritti riservati.</p> 
       </footer> 
     </>
    )
}

export default Navbar;
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import transition from './transition';
import boutUs from '../../public/images/boutUs.jpg'
import boutUs1 from '../../public/images/boutUs1.jpg'
import boutUs2 from '../../public/images/boutUs2.jpg'
import boutUs3 from '../../public/images/boutUs3.jpg'
import boutUs4 from '../../public/images/boutUs4.jpg'
import { Link } from 'react-router-dom';
import { useLang } from './langContext';

const AboutUs = () => {

  const [isInView, setIsInView] = useState(false);

  const { ref: topRef, inView: topInView } = useInView({ threshold: 0.1, triggerOnce: false });

  const { lang } = useLang();

  useEffect(() => {
    setIsInView(topInView);
    if (topInView) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [topInView]);

  return (
    <div className='flex flex-col items-center pt-[15vh] lg:pt-[25vh]'>
      <div className='flex flex-col items-center font-[Italiana] font-bold px-5 lg:px-0 text-[2.5rem] lg:text-[4rem] h-[50vh]'>
        <p className='text-center'>{ lang ? 'Savor the flavors amidst' : 'Ndjej shijet midis'}</p>
        <p className='text-center'> { lang ? 'natures untouched beauty.' : 'bukurise se paprekur te natyres'} </p>
      </div>
      <div className=' h-[80vh] lg:h-[150vh]'>
        <motion.img
          initial={{ scale: 0.5 ,y:-200}}
          whileInView={{ scale: 1 ,y: 0 }}
          viewport={{once: true , amount:0.9 }} 
          transition={{ease: 'easeInOut', duration: 1.5}}
          className=' h-[60vh] lg:h-auto w-[85vw] rounded-3xl object-cover' src={boutUs} 
        />
      </div>
      <div className=' w-full h-screen flex flex-col gap-20 px-10 lg:px-20'>
        <motion.p 
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 0.8}}
          className='font-bold text-2xl w-[100%] lg:w-[50%]'> { lang ? 'Discover our charming restaurant in the Albanian Riviera, surrounded by scenic hills and palm trees. Indulge in delightful dishes with breathtaking views, a perfect blend of nature and gastronomy. Experience the magic of the Mediterranean amidst captivating greenery.' : 'Zbuloni restorantin tonë të sjellshëm në Rivierrën Shqiptare, e rrethuar nga kodrat piktoreske dhe palmat. Shijoni pjatat e këndshme me pamje frymëmarrëse, një përqafim perfekt i natyrës dhe gastronomisë. Përjetoni magjinë e Mesdheut ndër gjelbërimin kapës tërheqës.'} </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 0.8}}
          className=' w-[100%] lg:w-[50%] text-lg self-end'> { lang ? 'At our restaurant, we pride ourselves on creating an exceptional dining experience. We offer delectable dishes and a welcoming ambiance that captivates your senses. Our culinary delights are served with a touch of artistry, making every visit a memorable journey. ' : 'Në restorantin tonë, ne krenohemi për të krijuar një përvojë të jashtëzakonshme ngrenie. Ne ofrojmë pjatat të shijshme dhe një ambient mikpritës që kapërcen ndjenjat tuaja. Delikatesat tona kulinarie serviren me një prekje artistike, duke bërë çdo vizitë një udhëtim të paharrueshëm.'}</motion.p>
      </div>
      <div className='flex flex-col items-center font-[Italiana] font-bold text-[2.5rem] lg:text-[4rem] h-[50vh] lg:h-[70vh] px-5 lg:px-0'>
        <p className='text-center'> { lang ? 'One of the best reviewed' : 'Me nder vleresimet me te mira'}</p>
        <p className='text-center'> { lang ? 'in the Western Balkans' : 'ne Ballkanin Perendimor'}</p>
      </div>
      <div className='h-[80vh] lg:h-[130vh]'>
        <motion.img
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 0.8}}
          className='h-[60vh] lg:h-auto w-[85vw] rounded-3xl object-cover' src={boutUs1} 
        />
      </div>
      <div className=' w-full h-[150vh] lg:h-[110vh] flex flex-col gap-20 px-10 lg:px-20'>
        <motion.p 
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 0.8}}
          className='font-bold text-2xl w-[100%] lg:w-[70%] self-end'> { lang ? 'Nestled within the embrace of a surrounding lagoon, Shëngjin boasts its natural beauty and local legends. The name Shëngjin is believed to be connected to the enchanting Forest of the Fairies, an area of magic and wonder between Shëngjin and Velipoja. This region was once known as Medea, reminiscent of the famous Medea from the Argonauts tales. While not as renowned as the southern Riviera, Shëngjins small harbor and beach have earned recognition both locally and internationally.' : 'Shëngjini krenohet me bukurinë natyrore dhe legjendat vendore. Emri Shëngjin besohet të jetë i lidhur me "Pyllin e Zanave," një zonë magjike dhe çudibërëse midis Shëngjinit dhe Velipojës. Ky rajon njëherë quhej Medea, që kujton figurën e famshme të Medeas nga tregimet e Argonautëve. Ndërsa nuk është aq i njohur si Riviera jugore, porti dhe plazhi i vogël i Shëngjinit kanë fituar njohje lokalisht dhe ndërkombëtarisht.'}</motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 0.8}}
          className=' w-[100%] lg:w-[50%] text-lg '> { lang ? 'The beach holds a unique charm and exclusivity that sets it apart. Embraced by lush pine forests and picturesque hills, the beachs proximity to the national road makes it easily accessible to all. Comfortable and affordable accommodations welcome visitors to relish the splendors of Shëngjins natural surroundings. Local favorites include charming restaurants and stylish pubs that enliven the delightful summer nights.' : 'Plazhi mban një ndjesi të veçantë dhe ekskluzive që e dallon atë. Mbështetur nga pyje të gjelbra me pisha dhe kodra piktoreske, afërsia e plazhit me rrugën kombëtare e bën atë të lehtësisht të arritshëm për të gjithë. Akomodimet komode dhe të arsyeshme për çmim, presin vizitorët të shijojnë mrekullitë e mjedisit natyror të Shëngjinit. Të preferuarit lokal përfshijnë restorante të sharmantshme dhe lokale elegante që e gjallërojnë netët e mrekullueshme të verës.'} </motion.p>
      </div>
      <div className=' h-[50vh] lg:h-[100vh] w-full flex justify-center gap-5 lg:gap-10'>
        <motion.img 
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 0.8}}
          className='h-[60%] lg:h-[90%] w-[40%] lg:w-auto rounded-2xl mt-20 object-cover' src={boutUs2} />
        <motion.img 
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 0.8}}
          className='h-[60%] lg:h-[90%] w-[40%] lg:w-auto  rounded-2xl object-cover' src={boutUs3} />
      </div>
      <div className=' w-full h-[120vh] lg:h-[100vh]  flex flex-col gap-20 px-10 lg:px-20 pt-32 '>
        <motion.p 
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 0.8}}
          className='font-bold text-2xl w-[100%] lg:w-[60%] '> { lang ? 'Step into a world of boundless adventure at our seaside restaurant in Shëngjin, Lezhë. Beyond savoring our delectable cuisine, immerse yourself in the wonders of nature with an array of thrilling activities that will leave you with lasting memories.' : 'Hyni në një botë aventuresh pa fund në restorantin tonë pranë bregdetit në Shëngjin, Lezhë. Përveç shijimit të kuzhinës sonë të shijshme, zhyteni në mrekullitë e natyrës me një gamë aktivitetesh emocionuese që do ju lënë me kujtime të përhershme.'} </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 0.8}}
          className=' w-[100%] lg:w-[60%] text-lg '> { lang ? 'For those yearning for excitement on the mainland, we invite you to explore the enchanting trails, perfect for walking and hiking. Traverse through the lush landscapes and witness the mesmerizing views of the Albanian Riviera. And right here in Shëngjin, experience the thrill of renting kayaks, jetskis, and ATVs to conquer the pristine waters and coastal terrain.' : 'Për ata që kërkojnë emocion në tokë, ju ftojmë të eksploroni rrugët magjepsëse, të përsosura për ecje dhe udhëtime në këmbë. Kalojeni përmes peizazheve të gjelbra dhe vështroni pamjet e magjepsura të Rivierës Shqiptare. Dhe këtu, në Shëngjin, përjetoni kënaqësinë e qirasë së kayakeve, jetskive dhe ATVs për të pushtuar ujërat e pastra dhe terrenin bregdetar.'} </motion.p>
      </div>
      <div className='  bg-cover bg-center gap-5 lg:gap-0 flex flex-col lg:flex-row items-center lg:items-end justify-end lg:justify-evenly w-screen h-screen pb-14' style={{ backgroundImage: `url(${boutUs4})`}}>
        <Link to='/menu'>
          <motion.button 
            initial={{ opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true , amount:0.2 }} 
            transition={{type: 'spring', duration: 0.8}}
            className=' bg-[#434b34] text-[#f7f7ee] px-5 py-10 lg:px-20 lg:py-20 font-[Italiana] text-[1.3rem] lg:text-4xl font-bold rounded-3xl hover:bg-[#f7f7ee] hover:text-[#434b34] duration-200'>
              { lang ? 'Check out our amazing Restaurant' : 'Hidhi nje sy Restorantit tone'} 
          </motion.button>
        </Link>
        <Link to='/contact'>
          <motion.button 
            initial={{ opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true , amount:0.2 }} 
            transition={{type: 'spring', duration: 0.8}}
            className=' bg-[#434b34] text-[#f7f7ee] px-5 py-10 lg:px-20 lg:py-20 font-[Italiana] text-[1.5rem] lg:text-4xl font-bold rounded-3xl hover:bg-[#f7f7ee] hover:text-[#434b34] duration-200'>
              { lang ? 'Book your stay' : 'Prenoto tavolinen tende'} 
          </motion.button>
        </Link>
      </div>
    </div>
  )
}

const WrappedAboutUs = transition(AboutUs)
export default WrappedAboutUs

import Hero from './components/Hero'
import Welcome from './components/Welcome';
import BluePrint from './components/BluePrint';
import Ministry from './components/Ministry';
import News from './components/News';
import PageLinks from './components/PageLinks';
import Agencies from './components/Agencies';
import Follow from './components/Follow';
import SideBySideWButton from './components/reusable/SideBySideWButton';

type Props = {}

const Landing = (props: Props) => {
  return (<>
    <Hero/>
    <Welcome/>
    <BluePrint/>

    <div id="ministry-section" className="container-fluid">
        <SideBySideWButton 
            title='About the Ministry'
            text={
                [
                    'The Federal Ministry of Communications, Innovation, and Digital Economy was created in 2011. Formerly known as The Federal Ministry of Communications Technology, it was created to foster a knowledge-based economy and information society in Nigeria.'
                    ,'The Ministry was created to facilitate ICT as a key tool in the transformation agenda for Nigeria in the areas of job creation, economic growth, and transparency of governance.'
                ]}
            btn={{
                text: 'Read More',
                iconSrc: '/assets/icons/right-arrow.svg',
                iconAxis: 'X',
            }}
            img={{
                imgSrc:'/assets/icons/emblem-opq.svg', 
                width: 386, 
                height: 431
            }}
            className=""
        />
    </div>
    
    <News/>
    <PageLinks/>
    <Agencies/>
    <Follow/>
  </>
  )
}

export default Landing
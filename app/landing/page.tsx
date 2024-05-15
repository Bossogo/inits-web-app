import Hero from '../components/Hero'
import Welcome from '../components/Welcome';
import BluePrint from '../components/BluePrint';
import Ministry from '../components/Ministry';
import News from '../components/News';
import PageLinks from '../components/PageLinks';
import Agencies from '../components/Agencies';
import Follow from '../components/Follow';
import Footer from '../components/Footer';
type Props = {}

const Landing = (props: Props) => {
  return (<>
        <Hero/>
        <Welcome/>
        <BluePrint/>
        <Ministry/>
        <News/>
        <PageLinks/>
        <Agencies/>
        <Follow/>
        <Footer/>
    </>
  )
}

export default Landing
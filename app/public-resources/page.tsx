import DualSection from '../components/DualSection'
import "./index.scss"
import ColouredContainer from '../components/layouts/ColouredContainer'
import Button from '../components/Button'
import DataBox from '../components/public-resources/DataBox'

type Props = {}

const Initiatives = async (props: Props) => {
    //const data = await fetch('')
  return (<>
    <ColouredContainer>
        <DualSection 
            title={{
                text: "Resources", 
                className: 'title__big title__big-primary mb-2'
            }}
            paragraph={{
                    text:
                        [
                            'Federal Ministry of Communications, Innovation & Digital Economy will regularly make useful information available to the public.'
                        ],
                    className: 'text__big'
            }}
            className="col-10 ms-5"
        >
            
            <Button mx={0} variant='outline-black' href="/public-resources#reports" className='py-2'>Reports</Button>
            <Button mx={2} variant='outline-black' href="/public-resources#policies" className='py-2'>Policies</Button>
            <Button mx={2} variant='outline-black' href="/public-resources#forms" className='py-2'>Forms</Button>
            <Button mx={2} variant='outline-black' href="/public-resources#whitepapers" className='py-2'>Whitepapers</Button>
            <Button mx={2} variant='outline-black' href="/public-resources#media-kits" className='py-2'>Media Kits</Button>
        </DualSection>
    </ColouredContainer>

    <div className='px-5'>
        <DataBox title="Reports" data="reports"/>
        
        <DataBox title="Policies" data="policies" className="bg-grey px-4 py-4"/>

        <DataBox title="Forms" data="forms" className="px-4 py-4"/>
       
        <DataBox title="Whitepapers" data="whitepapers" className="bg-grey px-4 py-4"/>

        <DataBox title="Media Kits" data="media-kits" className="px-4 py-4"/>
    </div>
  </>
    
  )
}
export default Initiatives
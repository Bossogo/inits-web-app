import DualSection from '../components/DualSection'
import "./index.scss"
import ColouredContainer from '../components/layouts/ColouredContainer'
import Button from '../components/Button'
import ContainerLayout from '../components/layouts/ContainerLayout'

import DataBox from '../components/public-resources/DataBox'

type Props = {}

const Initiatives = async (props: Props) => {
    const data = await fetch('')
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
            
            <Button mx={0} variant='outline-black' href="/#reports" className='py-2'>Reports</Button>
            <Button mx={2} variant='outline-black' href="/#policies" className='py-2'>Policies</Button>
            <Button mx={2} variant='outline-black' href="/#forms" className='py-2'>Forms</Button>
            <Button mx={2} variant='outline-black' href="/#links" className='py-2'>Whitepapers</Button>
            <Button mx={2} variant='outline-black' href="/#media-kits" className='py-2'>Media Kits</Button>
        </DualSection>
    </ColouredContainer>

    <ContainerLayout>
        <DataBox title="Reports" 
        content={{name:"The Nigeria E-Government Master Plan",
        link:"https://fmcide.gov.ng/wp-content/uploads/2023/11/NgeGovMP.pdf"}}
        />
        
    </ContainerLayout>
  </>
    
  )
}
export default Initiatives
import Link from 'next/link'
import Image from 'next/image'

type DataBoxProps = {
    title: string,
    content: content,
}
type IconBoxProps = {
    title: string,
    content: string,
}
type content = {
    name: string,
    link: string,
}

    
const DataBox = ({title, content}: DataBoxProps) => {
  return (<>
    <div className="data-box p-5 d-flex flex-column">
            <h2 className="data-box__header text-green fw-semibold mb-4">{title}</h2>
            
            <div className='icon-box border-bottom pt-3 pb-3'>
                <div className="icon-box-wrapper d-flex flex-row-reverse">
                    <Link href="https://fmcide.gov.ng/wp-content/uploads/2023/11/NgeGovMP.pdf">
                        <Image src="/assets/images/wht-dwnload-grey.svg"
                            alt="Reports" 
                            className="icon-box-image icon-download" 
                            width={28}
                            height={28}
                         />
                    </Link>
                    <span className=" flex-grow-1 d-flex align-items-center">
                        {content.name}
                    </span>
                </div>
            </div>
            <div className='icon-box border-bottom pt-3 pb-3'>
                <div className="icon-box-wrapper d-flex flex-row-reverse">
                    <Link href={`${content.link}`}>
                        <Image src="/assets/images/wht-dwnload-grey.svg"
                            alt="Reports" 
                            className="icon-box-image icon-download" 
                            width={28}
                            height={28}
                         />
                    </Link>
                    <span className="flex-grow-1 d-flex align-items-center">
                        The Nigeria E-Government Master Plan
                    </span>
                </div>
            </div>
            <div className='icon-box border-bottom pt-3 pb-3'>
                <div className="icon-box-wrapper d-flex flex-row-reverse">
                    <Link href="https://fmcide.gov.ng/wp-content/uploads/2023/11/NgeGovMP.pdf">
                        <Image src="/assets/icons/emblem.png"
                            alt="Reports"
                            className="icon-box-image icon-download" 
                            width={28}
                            height={28}
                         />
                    </Link>
                    <span className="flex-grow-1 d-flex align-items-center">
                        The Nigeria E-Government Master Plan
                    </span>
                </div>
            </div>
        </div>
</>)
}
export default DataBox
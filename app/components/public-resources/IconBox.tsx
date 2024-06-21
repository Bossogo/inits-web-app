import Link from 'next/link'
import Image from 'next/image'

type IconBoxProps = {
    content: ContentType,
}
const icons = {
    download: '/assets/images/wht-dwnload-grey.svg',
    error: '/assets/icons/emblem.png'
}
const IconBox = ({content}: IconBoxProps) => {
  return (<>
    <div className="icon-box border-bottom pt-3 pb-3">
        <div className="icon-box-wrapper d-flex flex-row-reverse">
            <Link href={`${content.url}`}>
                <Image src={/\.(pdf|docx?|xlsx?|zip|rar|png|jpe?g|gif)$/i.test(content.url) || content.url.includes("file") ? icons.download : icons.error}
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
  </>)
}
export default IconBox
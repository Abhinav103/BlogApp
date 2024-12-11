import { IKImage } from "imagekitio-react"

const Image = ({src,alt,w,h,className}) => {
    return (
        <IKImage 
        urlEndpoint={import.meta.env.VITE_URL_ENDPOINT} 
        path={src} 
        alt={alt}
        width={w} 
        height={h}
        className={className}
        lqip={{ active: true, quality: 20 }}    
        />
    )
   
};

export default Image;

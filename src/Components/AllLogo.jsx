import React, {useState, useEffect} from 'react'
import { BiLogoAmazon, BiLogoDigitalocean, BiLogoDigg, BiLogoDeviantart, BiLogoDevTo, BiLogoDeezer, BiLogoDailymotion, BiLogoCss3, BiLogoCreativeCommons, BiLogoCPlusPlus, BiLogoCodepen, BiLogoBootstrap, BiLogoChrome, BiLogoBlender, BiLogoBlogger, BiLogoBitcoin, BiLogoBing, BiLogoBehance, BiLogoAudible, BiLogoAws, BiLogoBaidu, BiLogoAirbnb, BiLogoAndroid, BiLogoAngular, BiLogoApple } from 'react-icons/bi'

function Shopify() {

  const logo = [ <BiLogoAmazon size={100} />, <BiLogoDigitalocean size={100} />, <BiLogoAirbnb size={100} />, <BiLogoDigg size={100} />, <BiLogoDeviantart size={100} />, <BiLogoDevTo size={100} />, <BiLogoDeezer size={100} />, <BiLogoDailymotion size={100} />, <BiLogoCss3 size={100} />, <BiLogoCreativeCommons size={100} />, <BiLogoCPlusPlus size={100} />, <BiLogoCodepen size={100} />, <BiLogoBootstrap size={100} />, <BiLogoChrome size={100} />, <BiLogoBlender size={100} />, <BiLogoBlogger size={100} />, <BiLogoBitcoin size={100} />, <BiLogoBing size={100} />, <BiLogoBehance size={100} />, <BiLogoAudible size={100} />, <BiLogoAws size={100} />, <BiLogoBaidu size={100} />, <BiLogoAirbnb size={100} />, <BiLogoAndroid size={100} />, <BiLogoAngular size={100} />, <BiLogoApple size={100} /> ]
    const [num, setNum ] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setNum((count) => {return count === 25 ? 0 : count+1 })
        }, 1000);
    },[]);

     return (
      <div>
        {logo[num]}
      </div>
    )
}

export default Shopify

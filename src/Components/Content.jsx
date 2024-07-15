import React from 'react'
import { DiReact } from 'react-icons/di'
import { BiLogoAmazon, BiLogoDigitalocean, BiLogoDigg, BiLogoDeviantart, BiLogoDevTo, BiLogoDeezer, BiLogoDailymotion, BiLogoCss3, BiLogoCreativeCommons, BiLogoCPlusPlus, BiLogoCodepen, BiLogoBootstrap, BiLogoChrome, BiLogoBlender, BiLogoBlogger, BiLogoBitcoin, BiLogoBing, BiLogoBehance, BiLogoAudible, BiLogoAws, BiLogoBaidu, BiLogoAirbnb, BiLogoAndroid, BiLogoAngular, BiLogoApple } from 'react-icons/bi'


function Content() {
  return (
    <div>
      <div className=' mt-44 ml-24'>
        <h1 className=' text-7xl flex'> <DiReact color='aqua'/>React-icons</h1>
        <p className=' ml-20 text-1xl'> All type logo and emojis</p>
        <div className=' flex mt-9 gap-1'>
        <BiLogoAndroid  />
        <BiLogoAmazon/>
        <BiLogoAngular  />
        <BiLogoApple  />
        <BiLogoAudible   />
        <BiLogoAws  />
        <BiLogoBaidu  />
        <BiLogoBehance  />
        <BiLogoBing  />
        <BiLogoBitcoin  />
        <BiLogoBlender  />
        <BiLogoBlogger  />
        <BiLogoBootstrap  />
        <BiLogoChrome  />
        <BiLogoCodepen  />
        <BiLogoCPlusPlus  />
        <BiLogoCreativeCommons  />
        <BiLogoCss3  />
        <BiLogoDailymotion  />
        <BiLogoDeezer  />
        <BiLogoDevTo  />
        <BiLogoDeviantart  />
        <BiLogoDigg  />
        <BiLogoDigitalocean  />
        </div>
      </div>
    </div>
  )
}

export default Content


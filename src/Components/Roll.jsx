import AllLogo from './AllLogo'
import Logo1 from './Logo1.jsx'
import Logo2 from './Logo2.jsx'
import Logo3 from './Logo3.jsx'
import Logo4 from './Logo4.jsx'

function Roll(Shopify) {

  return (
    <div className=' ml-[50%] absolute line-clamp-4 '>

      <div className=' flex mb-5 gap-10'>
        <div className=' overflow-hidden h-28'>
          <AllLogo />
        </div>
        <div className=' overflow-hidden h-28'>
          <Logo1 />
        </div>
        <div className=' overflow-hidden h-28'>
          <Logo2 />
        </div>
        <div className=' overflow-hidden h-28'>
          <Logo3 />
        </div>
        <div className=' overflow-hidden h-28'>
          <Logo4 />
        </div>
      </div>

      <div className=' flex mb-5 gap-10'>
        <div className=' overflow-hidden h-28'>
          <Logo3 />
        </div>
        <div className=' overflow-hidden h-28'>
          <Logo4 />
        </div>
        <div className=' overflow-hidden h-28'>
          <Logo1 />
        </div>
        <div className=' overflow-hidden h-28'>
          <Logo2 />
        </div>
        <div className=' overflow-hidden h-28'>
          <AllLogo />
        </div>
      </div>

      <div className=' flex mb-5 gap-10'>
        <div className=' overflow-hidden h-28'>
          <Logo2 />
        </div>
        <div className=' overflow-hidden h-28'>
          <Logo1 />
        </div>
        <div className=' overflow-hidden h-28'>
          <Logo4 />
        </div>
        <div className=' overflow-hidden h-28'>
          <Logo1 />
        </div>
        <div className=' overflow-hidden h-28'>
          <AllLogo />
        </div>
      </div>

      <div className=' flex mb-5 gap-10'>
        <div className=' overflow-hidden h-28'>
          <Logo2 />
        </div>
        <div className=' overflow-hidden h-28'>
          <Logo3 />
        </div>
        <div className=' overflow-hidden h-28'>
          <AllLogo />
        </div>
        <div className=' overflow-hidden h-28'>
          <Logo1 />
        </div>
        <div className=' overflow-hidden h-28'>
          <Logo4 />
        </div>
      </div>


      <div className=' flex mb-5 gap-10'>
        <div className=' overflow-hidden h-28'>
          <Logo3 />
        </div>
        <div className=' overflow-hidden h-28'>
          <Logo4 />
        </div>
        <div className=' overflow-hidden h-28'>
          <Logo1 />
        </div>
        <div className=' overflow-hidden h-28'>
          <AllLogo />
        </div>
        <div className=' overflow-hidden h-28'>
          <Logo2 />
        </div>
      </div> 

    </div>
  )
}

export default Roll

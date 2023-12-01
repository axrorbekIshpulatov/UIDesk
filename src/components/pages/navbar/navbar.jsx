import { CiSearch } from 'react-icons/ci'
import { PiShoppingCartLight } from 'react-icons/pi'
import { Button } from '../../common/Button'

export const Navbar = () => {
  return (
    <nav className='flex py-[48px] items-center justify-between'>
      <div className='text-[#333] text-3xl'>UI.desk</div>
      <ul className='flex gap-[40px]'>
        <li className='text-[#5FB848] opacity-80 hover:text-[#5FB848] cursor-pointer text-[20px] font-["Sharp Sans"]' >Home</li>
        <li className='text-[#2C3847] opacity-80 hover:text-[#5FB848] cursor-pointer text-[20px] font-["Sharp Sans"]' >About</li>
        <li className='text-[#2C3847] opacity-80 hover:text-[#5FB848] cursor-pointer text-[20px] font-["Sharp Sans"]' >Contact</li>
        <li className='text-[#2C3847] opacity-80 hover:text-[#5FB848] cursor-pointer text-[20px] font-["Sharp Sans"]' >Testimonials</li>
      </ul>
      <div className='flex items-center justify-end gap-[30px]'>
        <CiSearch  size="26px"/>
        <div>
          <PiShoppingCartLight size="26px"/>
          <span></span>
        </div>
        <Button style={'bg-slate-700'}>Order Now</Button>
      </div>
    </nav>
  )
}

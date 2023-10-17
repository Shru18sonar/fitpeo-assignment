import React,{useId} from 'react'
import { NavLink } from 'react-router-dom';
import {BiLeftArrowCircle,BiSolidChevronRight,BiSolidColor,BiLogoProductHunt, BiSolidUserRectangle,BiSolidChat} from 'react-icons/bi'
import {BsChevronDown} from 'react-icons/bs';
import {TbHexagonLetterO, TbDevicesDollar,TbLayoutDashboard} from 'react-icons/tb';


const imageUrl = './src/assets/women_648907024.jpg';
const menuItem=(menu,key)=>{
    return <li key={key} className='relative  text-gray-200 text-sm rounded-md pl-2 py-2 my-1.5 transition-all duration-200 hover:bg-blue-900 cursor-pointer'>
        <NavLink to="#" className="flex justify-start items-center">
            <span className='mr-4'>{menu.icon}</span>
            {menu.title}
            <span className="absolute right-5">
                <BiSolidChevronRight />
            </span>
        </NavLink>
    </li>
}

const Sidebar = ({isOpen,setIsOpen}) => {
    const uid=useId();
    const menuList=[
        {
            title:'Dashboard',
            path:'',
            icon:<TbLayoutDashboard />
        },
        {
            title:'Products',
            path:'',
            icon:<BiLogoProductHunt />
        },
        {
            title:'Customers',
            path:'',
            icon:<BiSolidUserRectangle />
        },
        {
            title:'Income',
            path:'',
            icon:<TbDevicesDollar />
        },
        {
            title:'Promote',
            path:'',
            icon:<BiSolidColor />
        },
        {
            title:'Help',
            path:'',
            icon:<BiSolidChat />
        },
    ];

  return (
    <>
    

<aside className={isOpen?`fixed lg:static z-[100] flex flex-col translate-x-0 transition-all duration-300 w-[250px] bg-blue-950 shadow-xl h-screen lg:block`:`fixed lg:static flex flex-col translate-x-[-250px] w-[250px] bg-blue-950 shadow-xl h-screen hidden`}>
<div className='flex flex-col h-[90vh]'>
    <h4 className='flex justify-start items-center text-gray-200 text-md font-semibold px-2 py-6 mx-3'>
        <span className='mr-2 p-1 border-2 rounded'><TbHexagonLetterO /></span>
        Dashboard

        <span className='block lg:hidden absolute right-3 text-3xl cursor-pointer' onClick={()=>setIsOpen(false)}>
            <BiLeftArrowCircle />
        </span>
    </h4>
    <ul className='mx-3'>
        {menuList.map((menu)=>menuItem(menu,uid))}
    </ul>
</div>
<div className='flex justify-between items-center rounded-md hover:bg-blue-900 px-2 mb-8 mx-2'>
    <div className='flex items-center justify-between gap-2 px-2 py-2 cursor-pointer'>
        <img 
        className='h-[35px] w-[35px] rounded-full'
        src={imageUrl}
        alt="user-pic"
        />
        <div className=''>
        <p className='text-gray-200 text-xs text-left'>Fitpeo</p>
        <p className='text-gray-100 opacity-40 text-[0.6rem]'>Project Manager</p>
        </div>
    </div>
    
    <span className='text-gray-200 cursor-pointer'>
        <BsChevronDown />
    </span>
</div>
</aside>
    
</>
  )
}

export default Sidebar
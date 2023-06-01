
import Menu from './Menu';
import logo from '/Assets_ChasChallenge/Icons/Logo/Property 1=greenblack, Property 2=landscape.svg'


const Header = () => {
   //

   return (
      <header className='bg-purpleHeader flex items-center justify-between h-[55px]'>
         <div className='w-1/2 ml-[19px]'>
            <img src={logo} alt="Green Hero logo" />
         </div>
         <div className='w-1/2 flex justify-end'>
            <Menu />   
         </div>
          
      </header>
   );
};

export default Header;

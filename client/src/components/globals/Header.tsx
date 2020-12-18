import { Link } from 'react-router-dom'

type Props = {};

export const Header = (props: Props) => {
  return (
    <header className='flex justify-between bg-gray-800 h-60px'>
      <div className='flex items-center ml-2vw'>
        <Link to='/' className='text-white text-2xl'>
          シフトボード
        </Link>
      </div>
    </header>
  );
};

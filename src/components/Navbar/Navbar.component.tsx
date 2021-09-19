import { useMemo } from 'react';
import clsx from 'clsx';
import useScrollTop from 'src/hooks/useScrollTop';
const Navbar: React.FC = () => {
  const scrollTop = useScrollTop();
  const showBackground = useMemo(() => {
    if (scrollTop > 10) return true;
    return false;
  }, [scrollTop]);
  return (
    <div
      className={clsx(
        'sticky top-0 left-0 w-full h-20 sm:mb-10 px-3 sm:px-10 lg:px-14 xl:px-52 flex justify-between items-center transition-all duration-500',
        showBackground && 'bg-white shadow-lg z-10'
      )}
    >
      <div className="flex items-center">
        <img
          src="/assets/icons/Vector.png"
          className="w-6 h-auto mr-3 sm:mr-6 sm:w-30"
          alt="logo"
        />
        <img
          src="/assets/icons/Logohere.png"
          className="w-24 h-auto sm:w-30"
          alt="logo"
        />
      </div>
      <p className="text-sm font-bold sm:text-base md:text-xl text-primary">
        Resourceful Indonesia
      </p>
    </div>
  );
};
export default Navbar;

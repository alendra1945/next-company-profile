import { useMemo } from 'react';
import clsx from 'clsx';
import defaultLayoutStyles from 'src/styles/defaultLayout.module.scss';
import IconSmile from 'src/components/IconSmile';
import IconPen from 'src/components/IconPen';
import IconPhone from 'src/components/IconPhone';
import { useRouter } from 'next/router';
import pathConfig from 'src/config/routes/path.config';
import Link from 'next/link';
import Ripple from 'material-ripple-effects';
const Navigation: React.FC = () => {
  const rippleEffect = new Ripple();
  const Router = useRouter();
  const listNavigation = useMemo(
    () => [
      {
        id: 1,
        title: 'About Us',
        path: pathConfig.ABOUT,
        icon: (
          <IconSmile
            className={clsx(
              'stroke-current',
              Router.pathname !== pathConfig.ABOUT
                ? 'text-primary'
                : 'text-white'
            )}
          />
        ),
      },
      {
        id: 2,
        title: 'Vision Mission',
        path: pathConfig.VISI_MISI,
        icon: (
          <IconPen
            className={clsx(
              'stroke-current',
              Router.pathname !== pathConfig.VISI_MISI
                ? 'text-primary'
                : 'text-white'
            )}
          />
        ),
      },
      {
        id: 3,
        title: 'Contact',
        path: pathConfig.CONTACT,
        icon: (
          <IconPhone
            className={clsx(
              'stroke-current',
              Router.pathname !== pathConfig.CONTACT
                ? 'text-primary'
                : 'text-white'
            )}
          />
        ),
      },
    ],
    [Router.pathname]
  );
  return (
    <div
      className={clsx(
        defaultLayoutStyles.containerNavigation,
        'flex sm:flex-col justify-center items-end'
      )}
    >
      {listNavigation.map((v) => (
        <Link key={v.id} href={v.path} passHref={true}>
          <div
            className={clsx(
              'p-2 py-5 shadow-2xl rounded-lg flex flex-col justify-center items-center mx-1 sm:mx-0 w-32 xs:w-28 sm:w-4/5 md:w-3/5 my-3 cursor-pointer transition-all duration-700',
              Router.pathname === v.path ? 'bg-primary' : 'bg-white'
            )}
            onClick={(e) => rippleEffect.create(e, 'dark')}
          >
            <div className="mb-3">{v.icon}</div>
            <p
              className={clsx(
                'text-xs font-bold',
                Router.pathname === v.path ? 'text-white' : 'text-primary'
              )}
            >
              {v.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Navigation;

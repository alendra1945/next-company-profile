import { Navbar } from 'src/components/Navbar';
import clsx from 'clsx';
import defaultLayoutStyles from 'src/styles/defaultLayout.module.scss';
import { Navigation } from 'src/components/Navigation';
const DefaultLayout: React.FC = (props) => {
  return (
    <div className={clsx('relative w-full', defaultLayoutStyles.container)}>
      <Navbar />
      <div className="relative w-full px-3 pb-52 sm:pb-10 sm:px-10 lg:px-14 xl:px-52 ">
        <div className={clsx('relative w-full flex sm:mb-10 pt-5')}>
          <main className={clsx('sm:my-10', defaultLayoutStyles.mainContent)}>
            {props?.children}
          </main>
          <Navigation />
        </div>
        <p className="mt-10 text-sm text-center sm:mt-14 text-secondary">
          Copyright 2021 62Trade.com PT. Enam Dua Niaga
        </p>
      </div>
      <div className={defaultLayoutStyles.bgCustom}>
        <img src="/assets/icons/bg.svg" alt="bg-img" />
      </div>
    </div>
  );
};
export default DefaultLayout;

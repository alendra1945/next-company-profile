import { Navbar } from 'src/components/Navbar';
import clsx from 'clsx';
import defaultLayoutStyles from 'src/styles/defaultLayout.module.scss';
import { Navigation } from 'src/components/Navigation';
import { toast, ToastContainer } from 'react-toastify';
const DefaultLayout: React.FC = (props) => {
  return (
    <>
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
      <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </>
  );
};
export default DefaultLayout;

export const showToastSuccess = (message, caption = null) => {
  toast(
    <div className="relative z-50 flex items-center">
      <div className="-mt-1">
        <p className={`text-md ${caption ? 'font-medium' : 'font-normal'}`}>
          {message}
        </p>
        {caption && <p className="text-sm font-normal">{caption}</p>}
      </div>
    </div>,
    {
      className: 'text-green100  bg-green10',
    }
  );
};
export const showToastError = (message, caption = null) => {
  toast(
    <div className="relative z-50 flex items-start">
      <div className="-mt-1">
        <p className={`text-md ${caption ? 'font-medium' : 'font-normal'}`}>
          {message}
        </p>
        {caption && <p className="text-sm font-normal">{caption}</p>}
      </div>
    </div>,
    {
      className: 'text-red100 bg-red10',
    }
  );
};

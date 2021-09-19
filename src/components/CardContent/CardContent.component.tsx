import { FC } from 'react';
import clsx from 'clsx';
import pageStyles from 'src/styles/pages.styles.module.scss';
import { CardContentInterface } from './CardContent.entity';
const CardContent: FC<CardContentInterface> = ({ children, image, title }) => {
  return (
    <div className="flex flex-wrap justify-between w-full">
      <div
        className={clsx(
          'relative flex items-start justify-center w-full py-5 bg-white shadow-2xl rounded-2xl sm:w-4/12 order-2 sm:order-1',
          pageStyles.hFitContent,
          pageStyles.rounded30
        )}
      >
        <img
          src={image}
          className="w-full h-auto"
          alt="card-image"
          layout="fill"
        />
      </div>
      <div className="order-1 w-full mb-10 sm:px-5 xl:pl-14 sm:w-8/12 sm:order-2 sm:mb-0">
        <p className={clsx('font-bold text-primary mb-4', pageStyles.title)}>
          {title}
        </p>
        {children}
      </div>
    </div>
  );
};
export default CardContent;

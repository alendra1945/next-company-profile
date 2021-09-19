import clsx from 'clsx';
import pageStyles from 'src/styles/pages.styles.module.scss';
import { CardContent } from 'src/components/CardContent';

const VisimisiScreen = () => {
  return (
    <CardContent
      image="/assets/images/img-visi-misi.png"
      title="Vision Mission"
    >
      <p className={clsx('text-primary mb-2 font-bold')}>Our Vision</p>
      <p className={clsx('text-secondary mb-5', pageStyles.contentParagraph)}>
        Becoming number one preferred digital platform of international trades
        for Indonesia and the world.
      </p>
      <p className={clsx('text-primary mb-2 font-bold')}>Our Mission</p>
      <p className={clsx('text-secondary mb-5', pageStyles.contentParagraph)}>
        Empowering Indonesia’s MSME nationwide to go international,
        collaboration with all supporting function such as financial, supply
        chain and logistic, and expanding international network by building
        partnership with overseas well known digital platform.
      </p>
      <p className={clsx('text-primary mb-2 font-bold')}>Values</p>
      <ol className="px-5 mb-5 list-decimal text-secondary">
        <li>
          <p
            className={clsx('text-secondary mb-1', pageStyles.contentParagraph)}
          >
            Simple
          </p>
        </li>
        <li>
          <p
            className={clsx('text-secondary mb-1', pageStyles.contentParagraph)}
          >
            Trustworthy
          </p>
        </li>
        <li>
          <p className={clsx('text-secondary', pageStyles.contentParagraph)}>
            Problem Solver
          </p>
        </li>
      </ol>
      <div className="w-full">
        <img
          src="/assets/images/indo-map.png"
          className="w-full h-auto"
          alt="map-indonesia"
        />
      </div>
    </CardContent>
  );
};
export default VisimisiScreen;

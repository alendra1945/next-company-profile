import clsx from 'clsx';
import pageStyles from 'src/styles/pages.styles.module.scss';
import { CardContent } from 'src/components/CardContent';
const AboutScreen = () => {
  return (
    <CardContent image="/assets/images/img-about.png" title="About Us">
      <p className={clsx('text-secondary mb-4', pageStyles.contentParagraph)}>
        Spanning from East to West. With 54,000 km Coastline and 17,500 Islands.
      </p>
      <p
        className={clsx(
          'font-bold text-primary mb-4',
          pageStyles.contentParagraph
        )}
      >
        INDONESIA, a resourceful land. Rich of flavors, natural beauties, and
        biodiversity.
      </p>
      <p className={clsx('text-secondary mb-4', pageStyles.contentParagraph)}>
        62trade.com ready to take important role to empower international trades
        between Indonesia and the rest of the world.
      </p>
      <p className={clsx('text-secondary mb-4', pageStyles.contentParagraph)}>
        Ready to be a digital gateway for everyone, at any level of business
      </p>
      <p className={clsx('text-secondary', pageStyles.contentParagraph)}>
        Let us walk together, hand in hand for a better future.
      </p>
    </CardContent>
  );
};
export default AboutScreen;

import { Link } from 'react-router-dom';

import clsx from 'clsx';
import styles from './Welcome.module.scss';

function Welcome() {
  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles.infor)}>
        <h1 className={clsx(styles.title)}>Chào mừng bạn đến với PET SHOP.</h1>
        <div className={clsx(styles.img_infor)}>
          <img
            src="https://i.ibb.co/Q6v08xN/hero-animal.png   "
            alt=" Chào mừng bạn đến với PET SHOP."
          />
        </div>
      </div>
      <div className={clsx(styles.list_content_hero)}>
        {/* Item 1 */}
        <div className={clsx(styles.item_hero)}>
          <Link to={''}>
            <picture className={clsx(styles.img_hero)}>
              <img
                src="https://i.ibb.co/DKtj0Vd/img-hero-dog.webp"
                alt="img-hero-dog"
              />
            </picture>
          </Link>
          <h2 className={clsx(styles.title_item_hero)}>
            <Link to={''}>Dành cho chó</Link>
          </h2>
          <p className={clsx(styles.desc_hero, 'line-clamp-3')}>
            Chó cưng, đồ chơi cho chó và các sản phẩm chuyên dành cho chó cưng.
          </p>
        </div>
        {/* Item 2 */}
        <div className={clsx(styles.item_hero)}>
          <Link to={''}>
            <picture className={clsx(styles.img_hero)}>
              <img
                src="https://i.ibb.co/5YM8d0K/img-hero-cat.webp"
                alt="img-hero-cat"
              />
            </picture>
          </Link>
          <h2 className={clsx(styles.title_item_hero)}>
            <Link to={''}>Dành cho Mèo</Link>
          </h2>
          <p className={clsx(styles.desc_hero, 'line-clamp-3')}>
            Mèo cưng, đồ chơi cho mèo và các sản phẩm chuyên dành cho mèo cưng.
          </p>
        </div>
        {/* Item 3 */}
        <div className={clsx(styles.item_hero)}>
          <Link to={''}>
            <picture className={clsx(styles.img_hero)}>
              <img
                src="https://i.ibb.co/JjMTWTx/img-hero-hamter.webp"
                alt="img-bird"
              />
            </picture>
          </Link>
          <h2 className={clsx(styles.title_item_hero)}>
            <Link to={''}>Dành cho Hamster</Link>
          </h2>
          <p className={clsx(styles.desc_hero, 'line-clamp-3')}>
            Hamster cưng, đồ chơi cho Hamster và các sản phẩm chuyên dành cho
            Hamster.
          </p>
        </div>
        {/* Item 4 */}
        <div className={clsx(styles.item_hero)}>
          <Link to={''}>
            <picture className={clsx(styles.img_hero)}>
              <img src="https://i.ibb.co/VSghysn/img-hero-bird.webp" alt="img-bird" />
            </picture>
          </Link>
          <h2 className={clsx(styles.title_item_hero)}>
            <Link to={''}>Dành cho Chim</Link>
          </h2>
          <p className={clsx(styles.desc_hero, 'line-clamp-3')}>
            Chim cưng, đồ chơi cho chim và các sản phẩm chuyên dành cho chim
            cưng.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

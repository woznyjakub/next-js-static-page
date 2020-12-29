import { Page } from '@components/common/Page';
import { MainHeader } from '@components/MainHeader';
import { Tabs } from '@components/Tabs';
import { Section } from '@components/common/Section';
import { Gallery } from '@components/Gallery/';
import { FeaturedTiles } from '@components/FeaturedTiles';

const Home: React.FC = () => {
  return (
    <Page Header={MainHeader} title="Main page">
      <Tabs />
      <Section bgImageUrl="/assets/images/abstract-bg-1.jpg">
        <Gallery className="pb-3 pb-md-4 pb-lg-5" />
        <FeaturedTiles />
      </Section>
    </Page>
  );
};

export default Home;

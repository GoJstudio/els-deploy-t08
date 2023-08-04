import { dataAbout } from './dataAbout';

import {Title, Welcome, Team, Partners} from './sections';

import styles from './about.module.scss';

export const metadata = {
  title: 'ELS Power About page',
  description: 'This is the introduction page about ELS Power',
}

const About = () => {
  const dataItems = dataAbout;

  return (
    <div className={styles.about}>
      <Title
        title={dataItems.sectionTitle.title}
        alt={dataItems.sectionTitle.alt}
        imgSrc={dataItems.sectionTitle.image}
      />
      <Welcome
        title={dataItems.welcome.title}
        desc={dataItems.welcome.desc}
        imgSrc={dataItems.welcome.image}
      />

      <Team
        textColor='#1A1A1A'
        bgColor='#EBEBEC'
        headline={true}
        title='Our Teams & Experts'
        subtitle={dataItems.team[0].subtitle}
        desc={dataItems.team[0].desc}
        imgSrc={dataItems.team[0].image}
      />
      <Team
        textColor='#F6F6F6' 
        bgColor='#5D6168'
        headline={false}
        order={2}
        subtitle={dataItems.team[1].subtitle}
        desc={dataItems.team[1].desc}
        imgSrc={dataItems.team[1].image}
      />
      <Team
        textColor='#F6F6F6' 
        bgColor='#1C4F95'
        headline={false}
        subtitle={dataItems.team[2].subtitle}
        desc={dataItems.team[2].desc}
        imgSrc={dataItems.team[2].image}
      />

      <Partners
        title={dataItems.partners.title}
        logos={dataItems.partners.logos}
        desc={dataItems.partners.desc}
      />
    </div>
  )
}
export default About
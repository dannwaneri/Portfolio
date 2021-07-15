import { Layout } from '../Layout';
import Greeting from '../Pages/Greeting'
import Intro from '../Pages/Intro'
import { IntroWrapper } from './introwrapper'
import Skills from '../Skills'




const About = () => (
  <Layout>
    <main>
    <IntroWrapper>
      <Greeting/>
      <Intro/>
      <Skills/>
        </IntroWrapper>
        
    </main>
    
  </Layout>
);

export default About;

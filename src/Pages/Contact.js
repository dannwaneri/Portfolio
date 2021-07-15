import { Layout } from '../Layout';
import Greeting from '../Pages/Greeting'
import Intro from '../Pages/Intro'
import { IntroWrapper } from '../Pages/introwrapper'

const Contact = () => (
  <Layout>
    <main>
    <IntroWrapper>
        <Greeting/>
        <Intro/>
        </IntroWrapper> 
    </main>
  </Layout>
);

export default Contact;
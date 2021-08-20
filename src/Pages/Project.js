import styled from 'styled-components';
import { Layout } from '../Layout';
import { IntroWrapper } from './introwrapper'
import Counter from './counter'


const pageIntro = "I like to stay busy and always have a project in the works.The projects below show the breadth of things I've done, from building an interface in an embedded device to web sites .Take a look at some of the applications, I've dedicated my time to."

const pageHeader = "What I've been working on!"

const PageHeader = styled.h2`
color: var(--text-color);
  margin: 0rem 0rem 2rem;
  line-height: 1.25;
  font-size: 2rem;
  text-align: center;
  font-family: var(--ff-primary);

`

const Project = () => (
  <Layout>
    <main>
    <IntroWrapper>
      <PageHeader>{pageHeader}</PageHeader>
      <p>{pageIntro}</p>
        <Counter/>
        </IntroWrapper>
    </main>
    
  </Layout>
);

export default Project;
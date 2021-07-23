import styled from 'styled-components'


export const ParagraphWrapper = styled.div`
max-width: 35rem;
  color: var(--text-color);
  width: 100%;
  position: relative;
  z-index: 1;
  margin: 0 auto;
p{
  margin: 0rem 0rem 1rem;
  font-size: 1.3rem;
  line-height: 1.5;
  color:var(--text-color);
  font-family: 'Quicksand', sans-serif;
  &:last-child{
    margin-bottom: 2rem;
  }
  @media (max-width:40rem){
    font-size:1.1rem;
  }
}
`;


const intro = "I am Penuel Nwaneri. I am a self-taught software developer.I love experimenting with React,Node, and typescript to create new exciting web applications."

const intro2 = "I studied Geology and Geophysics in school, but I transitioned into tech in 2018.Entering the tech field excites me, as it's an industry that fosters lifelong learning,as well as personal and professional growth!"

/**const intro3 = "From the online courses and meetup with experienced developers , I learned how to code; how to store, manipulate, analyze, and interpret data; and how to use mathematical concepts like big O notation and algorithms. With this knowledge, I know what to look for in a job."**/

const Intro = () => {
    return (
        <ParagraphWrapper>
        <p data-aos="fade-up"
      data-aos-delay="300" >{intro}</p>
        <p data-aos="fade-up"
        data-aos-delay="500">{intro2}</p>
        {/**<p>{intro3}</p>**/}
        </ParagraphWrapper>
      );
}
 
export default Intro;

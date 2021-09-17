import Aboutt from '../components/About/About';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="About" description="About" />}>
    <h1>
      <Aboutt />
    </h1>
  </Main>
);

export default About;

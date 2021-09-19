import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { Home } from '@/components/Home/Home';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Home></Home>
    </Main>
  );
};

export default Index;

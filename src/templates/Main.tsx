import { ReactNode } from 'react';

import { Home } from '@/components/Home/Home';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (_props: IMainProps) => (
  <>
    <Home />
  </>
);

export { Main };

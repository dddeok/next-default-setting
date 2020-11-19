import * as React from 'react';
import { NextPage } from 'next';

import Search from '../src/features/search/template/Search';
const Index: NextPage = () => <Search />;

Index.getInitialProps = async () => {
  const title = 'welcome!';
  return { title };
};

export default Index;

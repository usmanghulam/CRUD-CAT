import React, { FC } from 'react';
import Todos from './Todos/containers/todos';
import { Context } from './ContextApi/StoreContext';
import { useStore } from './Store/store';
import Layout from './Layouts/layout';
import { Store } from './Todos/interfaces';

const App: FC = () => {
  const store: Store = useStore();
  return (
    <Context.Provider value={store}>
      <Layout>
        <Todos />
      </Layout>
    </Context.Provider>
  );
};

export default App;
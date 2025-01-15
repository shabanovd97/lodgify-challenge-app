// importing feature related Context Provider
import TaskWidgetContextProvider from '@/layouts/TaskWidget/context/TaskWidgetContextProvider';

import Header from './Header/Header';
import Content from './Content/Content';

import { Layout } from './styles';

export default function TaskWidget() {
  /*   if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  } */

  return (
    <Layout>
      {/* actually, we don't need to use Context during this challenge but for more convenient state management and better extensibility in the future I've used Context here */}
      <TaskWidgetContextProvider>
        <Header />
        <Content />
      </TaskWidgetContextProvider>
    </Layout>
  );
}

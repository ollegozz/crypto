import { Layout } from 'antd';
import AppContent from './AppContent';
import AppHeaader from './components/layout/AppHeaader';
import AppSider from './components/layout/AppSider';

function App() {
  return (
    <Layout>
      <AppHeaader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  )
}

export default App

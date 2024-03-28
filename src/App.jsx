import { Layout } from 'antd';
import AppContent from './AppContent';
import AppHeaader from './components/layout/AppHeaader';
import AppSider from './components/layout/AppSider';
import CryptoContextProvider from './context/crypto-context';

function App() {
  return (
    <CryptoContextProvider>
      <Layout>
        <AppHeaader />
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
      </Layout>
    </CryptoContextProvider>
    
  )
}

export default App

import { Layout } from 'antd';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import AppContent from './AppContent';

export default function AppLayout() {
    
    <Layout>
        <AppHeader />
        <Layout>
            <AppSider />
            <AppContent />
        </Layout>
    </Layout>
}
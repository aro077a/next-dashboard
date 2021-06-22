import MainLayout from '../../components/layout/MainLayout';
import Dashboard from '../../components/dashboard/Dashboard';

export default function Index() {
  return (
    <MainLayout title='Index Page'>
      <Dashboard />
    </MainLayout>
  );
}

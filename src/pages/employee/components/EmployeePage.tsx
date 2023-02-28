import EmployeesPageHeader from './EmployeesHeader/EmployeesPageHeader';
import EmployeesTabs from './EmployeesTabs/EmployeesTabs';

const EmployeePage = () => {
  return (
    <div style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
      <EmployeesPageHeader />
      <EmployeesTabs />
    </div>
  );
};

export default EmployeePage;

import { useEffect, useState } from 'react';
import { Header } from './components/globals/Header'
import { StaffTable } from './components/parts/StaffTable';
import { api } from './api';
import { Staff } from './types';

function App() {
  const [staffs, setStaffs] = useState<Staff[] | undefined>();
  useEffect(() => {
    const request = async () => {
      const res =  await api.staffs.getAll()
        .catch((err: Error) => {
          console.error(err);
          return undefined;
        });
      // TODO
      setStaffs(res?.staffs);
    };
    request();
  });

  return (
    <div>
      <Header />
      {staffs && <StaffTable staffs={staffs} />}
    </div>
  );
}

export default App;

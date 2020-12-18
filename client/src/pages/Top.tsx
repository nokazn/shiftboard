import { useEffect, useState } from 'react';
import { classnames } from 'tailwindcss-classnames';
import { StaffTable } from '../components/parts/StaffTable';
import { api } from '../api';
import { Staff } from '../types';

export const Top = () => {
  const [staffs, setStaffs] = useState<Staff[]>();

  useEffect(() => {
    const request = async () => {
      const res = await api.staffs.getAll().catch((err: Error) => {
        console.error(err);
        return undefined;
      });
      setStaffs(res?.staffs);
    };
    request();
  }, []);

  return <div>
    <h1 className={classnames('text-3xl', 'mb-6')}>
      スタッフ一覧
    </h1>
    <div className={classnames('flex', 'justify-center')}>
      <StaffTable staffs={staffs} />
    </div>
  </div>;
};

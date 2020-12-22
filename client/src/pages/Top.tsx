import { useState, Suspense } from 'react';
import { classnames } from 'tailwindcss-classnames';
import { StaffTable } from '../components/parts/StaffTable';
import { api } from '../api';

const fetcher = api.staffs.getAll();

export const Top = () => {
  const [resource] = useState(fetcher);

  return (
    <div>
      <h1 className={classnames('text-3xl', 'mb-6')}>スタッフ一覧</h1>
      <div className={classnames('flex', 'justify-center')}>
        <Suspense fallback={<div>loading...</div>}>
          <StaffTable resource={resource} />
        </Suspense>
      </div>
    </div>
  );
};

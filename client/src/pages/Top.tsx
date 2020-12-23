import { useState, Suspense } from 'react';
import { classnames } from 'tailwindcss-classnames';
import { StaffTable } from '../components/parts/StaffTable';
import { Button } from '../components/parts/Button';
import { api } from '../api';

let fetcher = api.staffs.getAll();

const addStaff = async (nickname: string) => api.staffs.add({ nickname });

export const Top = () => {
  const [resource, setResource] = useState(fetcher);

  return (
    <div>
      <h1 className={classnames('text-3xl', 'mb-6')}>スタッフ一覧</h1>
      <div className={classnames('mb-3')}>
        <Button
          color="blue"
          // TODO: nickname
          onClick={() => addStaff('hoge')
            .then(() => {
              setResource(api.staffs.getAll());
            })
          }
        >
          追加
        </Button>
      </div>
      <div className={classnames('flex', 'justify-center')}>
        <Suspense fallback={<div>loading...</div>}>
          <StaffTable resource={resource} />
        </Suspense>
      </div>
    </div>
  );
};

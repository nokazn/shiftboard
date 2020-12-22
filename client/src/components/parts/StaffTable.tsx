import { classnames } from 'tailwindcss-classnames';
import { StaffTableTh } from './StaffTableTh';
import { StaffTableTd } from './StaffTableTd';
import { Button } from './Button';
import type { Staff } from '../../types';
import type { Suspender } from '../../api/utils';

type Props = {
  resource: Suspender<Record<'staffs', Staff[] | undefined>>;
};

export const StaffTable = (props: Props) => {
  const deleteStaff = (id: string) => {
    console.log(id);
  };

  return (
    <table
      className={classnames(
        'table-fixed',
        'w-full',
        'border-collapse',
        'border-gray-700',
      )}
    >
      <thead className={classnames('bg-blue-100')}>
        <tr>
          <StaffTableTh w="w-2/5">
            職員ID
          </StaffTableTh>
          <StaffTableTh w="w-2/5">
            ニックネーム
          </StaffTableTh>
          <StaffTableTh w="w-1/5">
            操作
          </StaffTableTh>
        </tr>
      </thead>
      <tbody className="">
        {props.resource.read().staffs?.map((staff) => (
          <tr key={staff.staff_id} className="hover:bg-blue-50">
            <StaffTableTd>
              {staff.staff_id}
            </StaffTableTd>
            <StaffTableTd>
              {staff.nickname}
            </StaffTableTd>
            <StaffTableTd>
              <Button
                color="red"
                onClick={() => deleteStaff(staff.staff_id)}
              >
                削除
              </Button>
            </StaffTableTd>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

import type { Staff } from '../../types';

type Props = {
  staffs: Staff[] | undefined;
};

export const StaffTable = (props: Props) => {
  const deleteStaff = (id: string) => {
    console.log(id);
  };

  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th scope='col' className='w-2/5'>
            職員ID
          </th>
          <th scope='col' className='w-2/5'>
            ニックネーム
          </th>
          <th scope='col' className='w-1/5'>
            操作
          </th>
        </tr>
      </thead>
      <tbody>
        {props.staffs?.map((staff) => (
          <tr key={staff.staff_id}>
            <td>{staff.staff_id}</td>
            <td>{staff.nickname}</td>
            <td>
              <button type='button' onClick={() => deleteStaff(staff.staff_id)} className='btn btn-danger'>
                削除
              </button>
              <input type='hidden' name='staff_id' value='{staff.staff_id}' />
            </td>
          </tr>
        )) ?? <div>データが取得できませんでした。</div>}
      </tbody>
    </table>
  );
};

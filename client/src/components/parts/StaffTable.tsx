import type { Staff } from '../../types';

type Props = {
  staffs: Staff[];
}

export const StaffTable = (props: Props) => {
  const deleteStaff = (e: EventTarget) => {}

  return (
    <table className="table table-bordered">
      <tr>
        <th scope="col" className="w-2/5">職員ID</th>
        <th scope="col" className="w-2/5">ニックネーム</th>
        <th scope="col" className="w-1/5">操作</th>
      </tr>
      {props.staffs.map((staff) => (
        <tr>
          <td>{staff.staff_id}</td>
          <td>{staff.nickname}</td>
          <td>
            <button
              type="button"
              onClick={(e) => deleteStaff(e.target)}
              className="btn btn-danger">削除</button>
            <input type="hidden" name="staff_id" value="{staff.staff_id}" />
          </td>
        </tr>
      ))}
    </table>
  )
}
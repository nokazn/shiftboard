import { FC } from 'react'
import { classnames } from 'tailwindcss-classnames';

export const StaffTableTd: FC = (props) => {
  return (
    <td
      className={classnames(
        'border',
        'border-gray-200',
        'px-2',
        'py-1',
      )}
    >
      {props.children}
    </td>
  )
};
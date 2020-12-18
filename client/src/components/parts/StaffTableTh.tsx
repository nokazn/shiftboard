import { FC } from 'react'
import { classnames } from 'tailwindcss-classnames';

type Props = {
  w: 'w-1/5' | 'w-2/5';
}

export const StaffTableTh: FC<Props> = (props) => {
  return (
    <th
      scope="column"
      className={classnames(
        props.w,
        'border',
        'border-gray-300',
        'py-2',
      )}
    >
      {props.children}
    </th>
  )
};
import { FC, MouseEventHandler } from 'react';
import { classnames, TBackgroundColor } from 'tailwindcss-classnames';

type Props = {
  onClick: MouseEventHandler;
  color?: 'red' | 'green' | 'blue';
}

export const Button: FC<Props> = (props) => {
  const colors = (): TBackgroundColor[] => {
    const color = props.color ?? 'gray';
    return [
      `bg-${color}-500`,
      `active:bg-${color}-600`,
    ] as TBackgroundColor[];
  };

  return (
    <button
      type="button"
      className={classnames(
        ...colors(),
        'font-bold',
        'text-white',
        'text-xs',
        'px-3',
        'py-2',
        'rounded',
        'hover:shadow-md',
        'outline-none',
        'focus:outline-none',
      )}
      onClick={props.onClick}
      style={{ transition: "all .15s ease" }}
    >
      {props.children}
    </button>
  )
};
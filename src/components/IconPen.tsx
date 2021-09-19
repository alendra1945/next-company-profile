import { FC } from 'react';

const IconPen: FC<{ className: string }> = (props) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 19.3162L19 12.3162L22 15.3162L15 22.3162L12 19.3162Z"
        stroke="current"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 13.3162L16.5 5.81624L2 2.31624L5.5 16.8162L13 18.3162L18 13.3162Z"
        stroke="current"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 2.31624L9.58579 9.90202" stroke="current" strokeWidth="1.6" />
      <circle cx="11" cy="11.3162" r="2" stroke="current" strokeWidth="1.6" />
    </svg>
  );
};

export default IconPen;

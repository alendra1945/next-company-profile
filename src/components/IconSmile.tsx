import { FC } from 'react';

const IconSmile: FC<{ className: string }> = (props) => {
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
        d="M12 22.3162C17.5228 22.3162 22 17.8391 22 12.3162C22 6.79339 17.5228 2.31624 12 2.31624C6.47715 2.31624 2 6.79339 2 12.3162C2 17.8391 6.47715 22.3162 12 22.3162Z"
        stroke="current"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14.3162C8 14.3162 9.5 16.3162 12 16.3162C14.5 16.3162 16 14.3162 16 14.3162"
        stroke="current"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9.31624H9.01"
        stroke="current"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 9.31624H15.01"
        stroke="current"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconSmile;

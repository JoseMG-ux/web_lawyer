import * as React from 'react';

import { IconSvgProps } from '@/types';

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill='none'
    height={size || height}
    viewBox='0 0 32 32'
    width={size || width}
    {...props}
  >
    <path
      clipRule='evenodd'
      d='M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z'
      fill='currentColor'
      fillRule='evenodd'
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height='1em'
    role='presentation'
    viewBox='0 0 24 24'
    width='1em'
    {...props}
  >
    <path
      d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    />
    <path
      d='M22 22L20 20'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    />
  </svg>
);

export const SecurityIcon: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox='0 -960 960 960'
    width={size || height}
    fill='#1f1f1f'
    {...props}
  >
    <path d='m438-338 226-226-57-57-169 169-84-84-57 57 141 141Zm42 258q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z' />
  </svg>
);

export const ExperienceIcon: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox='0 -960 960 960'
    width={size || height}
    fill='#1f1f1f'
    {...props}
  >
    <path d='M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Zm-54 80h80l6-50q8-3 14.5-7t11.5-9l46 20 40-68-40-30q2-8 2-16t-2-16l40-30-40-68-46 20q-5-5-11.5-9t-14.5-7l-6-50h-80l-6 50q-8 3-14.5 7t-11.5 9l-46-20-40 68 40 30q-2 8-2 16t2 16l-40 30 40 68 46-20q5 5 11.5 9t14.5 7l6 50Zm-2.5-117.5Q420-495 420-520t17.5-42.5Q455-580 480-580t42.5 17.5Q540-545 540-520t-17.5 42.5Q505-460 480-460t-42.5-17.5Z' />
  </svg>
);

export const EthicIcon: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox='0 -960 960 960'
    width={size || height}
    fill='#1f1f1f'
    {...props}
  >
    <path d='M160-120v-80h480v80H160Zm226-194L160-540l84-86 228 226-86 86Zm254-254L414-796l86-84 226 226-86 86Zm184 408L302-682l56-56 522 522-56 56Z' />
  </svg>
);

export const DilegenceIcon: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox='0 -960 960 960'
    width={size || height}
    fill='#1f1f1f'
    {...props}
  >
    <path d='M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z' />
  </svg>
);

export const HomeIcon: React.FC<IconSvgProps> = ({
  size = 30,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox='0 -960 960 960'
    width={size || height}
    fill='currentColor'
    {...props}
    //className='hover:fill-white'
  >
    <path d='M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z' />
  </svg>
);

export const PolicyIcon: React.FC<IconSvgProps> = ({
  size = 30,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={size || height}
    viewBox='0 -960 960 960'
    width={size || height}
    fill='currentColor'
    {...props}
  >
    <path d='M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 85-29 163.5T688-214L560-342q-18 11-38.5 16.5T480-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 22-5.5 42.5T618-398l60 60q20-41 31-86t11-92v-189l-240-90-240 90v189q0 121 68 220t172 132q26-8 49.5-20.5T576-214l56 56q-33 27-71.5 47T480-80Zm56.5-343.5Q560-447 560-480t-23.5-56.5Q513-560 480-560t-56.5 23.5Q400-513 400-480t23.5 56.5Q447-400 480-400t56.5-23.5ZM488-477Z' />
  </svg>
);

export const WorkIcon: React.FC<IconSvgProps> = ({
  size = 30,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={size || height}
    viewBox='0 -960 960 960'
    width={size || height}
    fill='currentColor'
    {...props}
  >
    <path d='M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z' />
  </svg>
);

export const FamilyIcon: React.FC<IconSvgProps> = ({
  size = 30,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={size || height}
    viewBox='0 -960 960 960'
    width={size || height}
    fill='currentColor'
    {...props}
  >
    <path d='M720-720q-33 0-56.5-23.5T640-800q0-33 23.5-56.5T720-880q33 0 56.5 23.5T800-800q0 33-23.5 56.5T720-720ZM680-80v-320q0-40-20.5-72T607-522l35-103q8-25 29.5-40t48.5-15q27 0 48.5 15t29.5 40l102 305H800v240H680ZM457.5-517.5Q440-535 440-560t17.5-42.5Q475-620 500-620t42.5 17.5Q560-585 560-560t-17.5 42.5Q525-500 500-500t-42.5-17.5ZM220-720q-33 0-56.5-23.5T140-800q0-33 23.5-56.5T220-880q33 0 56.5 23.5T300-800q0 33-23.5 56.5T220-720ZM140-80v-280H80v-240q0-33 23.5-56.5T160-680h120q33 0 56.5 23.5T360-600v240h-60v280H140Zm300 0v-160h-40v-160q0-25 17.5-42.5T460-460h80q25 0 42.5 17.5T600-400v160h-40v160H440Z' />
  </svg>
);

export const BusinessIcon: React.FC<IconSvgProps> = ({
  size = 30,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={size || height}
    viewBox='0 -960 960 960'
    width={size || height}
    fill='currentColor'
    {...props}
  >
    <path d='M80-120v-720h400v160h400v560H80Zm80-80h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm320 480h320v-400H480v400Zm80-240v-80h160v80H560Zm0 160v-80h160v80H560Z' />
  </svg>
);

export const AdminIcon: React.FC<IconSvgProps> = ({
  size = 30,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={size || height}
    viewBox='0 -960 960 960'
    width={size || height}
    fill='currentColor'
    {...props}
  >
    <path d='M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z' />
  </svg>
);

export const MailIcon: React.FC<IconSvgProps> = ({
  size = 20,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={size || height}
    viewBox='0 -960 960 960'
    width={size || height}
    fill='#1f1f1f'
    {...props}
  >
    <path d='M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z' />
  </svg>
);

export const PhoneIcon: React.FC<IconSvgProps> = ({
  size = 20,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={size || height}
    viewBox='0 -960 960 960'
    width={size || height}
    fill='#1f1f1f'
    {...props}
  >
    <path d='M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z' />
  </svg>
);

export const UbicationIcon: React.FC<IconSvgProps> = ({
  size = 20,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={size || height}
    viewBox='0 -960 960 960'
    width={size || height}
    fill='#1f1f1f'
    {...props}
  >
    <path d='M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z' />
  </svg>
);

export const LogoIcon: React.FC<IconSvgProps> = ({
  size = 30,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={size || height}
    viewBox='0 -960 960 960'
    width={size || height}
    fill='#1f1f1f'
    {...props}
  >
    <path d='M80-120v-80h360v-447q-26-9-45-28t-28-45H240l120 280q0 50-41 85t-99 35q-58 0-99-35t-41-85l120-280h-80v-80h247q12-35 43-57.5t70-22.5q39 0 70 22.5t43 57.5h247v80h-80l120 280q0 50-41 85t-99 35q-58 0-99-35t-41-85l120-280H593q-9 26-28 45t-45 28v447h360v80H80Zm585-320h150l-75-174-75 174Zm-520 0h150l-75-174-75 174Zm335-280q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z' />
  </svg>
);

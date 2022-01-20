import React from 'react';
import { Svg, Path } from 'react-native-svg';

type IconProps = {
  size: number;
  color: string;
};

export const AllCatsIcon: React.FC<IconProps> = ({ size, color }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M26.37 19.812L26.422 19.552L23.666 19.058C24.576 17.758 25.304 16.172 25.382 14.378C25.434 13 25.096 11.596 24.472 10.296C25.148 8.97002 26.058 6.60402 25.772 3.69202C25.642 2.41802 25.33 1.35202 24.992 0.52002C23.9 0.72802 22.314 1.17002 20.65 2.10602C19.454 2.75602 18.518 3.51002 17.842 4.16002C16.49 3.61402 15.034 3.30202 13.552 3.30202C12.044 3.30202 10.588 3.61402 9.262 4.16002C8.56 3.51002 7.624 2.78202 6.454 2.10602C4.686 1.17002 3.126 0.75402 2.034 0.52002C1.696 1.35202 1.358 2.41802 1.254 3.69202C0.968003 6.60402 1.878 8.97002 2.554 10.296C1.93 11.622 1.592 13.026 1.644 14.378C1.722 16.172 2.424 17.758 3.36 19.058L0.578003 19.578L0.630003 19.838L3.516 19.318C3.802 19.708 4.114 20.072 4.426 20.436L1.982 21.554L2.086 21.788L4.608 20.618C4.92 20.93 5.232 21.242 5.518 21.502L2.684 23.842L2.84 24.024L5.726 21.658C6.532 22.36 7.234 22.854 7.572 23.088C8.794 23.946 10.822 25.35 13.5 25.454C16.178 25.324 18.206 23.946 19.428 23.088C19.766 22.854 20.468 22.36 21.274 21.658L24.16 24.024L24.316 23.816L21.482 21.476C21.768 21.216 22.08 20.904 22.392 20.592L24.914 21.762L25.018 21.528L22.574 20.41C22.886 20.072 23.198 19.708 23.484 19.292L26.37 19.812ZM21.066 3.71802C22.106 3.17202 23.042 2.91202 23.718 2.80802C23.926 3.27602 24.134 3.90002 24.212 4.65402C24.394 6.37002 23.822 7.74802 23.406 8.50202C22.366 7.07202 20.988 5.82402 19.376 4.91402C19.792 4.52402 20.338 4.10802 21.066 3.71802ZM2.788 4.65402C2.866 3.92602 3.074 3.30202 3.282 2.80802C3.958 2.93802 4.92 3.17202 5.934 3.71802C6.662 4.10802 7.208 4.52402 7.624 4.88802C6.012 5.79802 4.634 7.07202 3.594 8.47602C3.178 7.74802 2.632 6.34402 2.788 4.65402ZM8.144 14.378C6.22 13.78 5.44 12.168 5.31 11.908C5.7 11.596 6.532 11.05 7.624 11.024C9.288 10.998 10.9 12.142 11.706 13.936C11.472 14.092 9.964 14.924 8.144 14.378ZM14.228 18.59C13.968 18.928 13.708 19.188 13.5 19.37C13.292 19.24 12.98 18.98 12.72 18.59C12.512 18.278 12.382 17.992 12.33 17.784C12.642 17.706 13.032 17.628 13.526 17.628C13.838 17.628 14.254 17.654 14.722 17.784C14.592 18.018 14.462 18.304 14.228 18.59ZM19.376 11.05C20.494 11.076 21.3 11.622 21.69 11.934C21.586 12.194 20.78 13.806 18.856 14.378C17.01 14.924 15.528 14.118 15.268 13.962C16.1 12.142 17.712 10.998 19.376 11.05Z"
        fill={color}
      />
    </Svg>
  );
};

export const LikedCatsIcon: React.FC<IconProps> = ({ size, color }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M22.0767 2.99419C21.5234 2.44061 20.8664 2.00147 20.1433 1.70187C19.4202 1.40226 18.6452 1.24805 17.8625 1.24805C17.0798 1.24805 16.3048 1.40226 15.5817 1.70187C14.8586 2.00147 14.2017 2.44061 13.6484 2.99419L12.5 4.14252L11.3517 2.99419C10.234 1.87652 8.71815 1.24863 7.13753 1.24863C5.55691 1.24863 4.04103 1.87652 2.92336 2.99419C1.80569 4.11186 1.1778 5.62774 1.1778 7.20836C1.1778 8.78898 1.80569 10.3049 2.92336 11.4225L4.07169 12.5709L12.5 20.9992L20.9284 12.5709L22.0767 11.4225C22.6303 10.8692 23.0694 10.2122 23.369 9.48916C23.6686 8.76608 23.8228 7.99105 23.8228 7.20836C23.8228 6.42566 23.6686 5.65064 23.369 4.92756C23.0694 4.20448 22.6303 3.54751 22.0767 2.99419V2.99419Z"
        fill={color}
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

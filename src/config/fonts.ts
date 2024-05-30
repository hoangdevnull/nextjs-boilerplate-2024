import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const fontMono = localFont({
  style: 'normal',
  variable: '--font-mono',
  src: '../assets/fonts/SPACEEXPLORERRegular.woff2',
});

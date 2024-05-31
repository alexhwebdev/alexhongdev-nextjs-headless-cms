import { 
  Montserrat, 
  Raleway, 
  Sulphur_Point,
  Inter
} from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  variants: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 700,
  }
});

export const raleway = Raleway({
  subsets: ['latin'],
  variants: {
    regular: 400,
    bold: 800,
  }
});

export const inter = Inter({
  subsets: ['latin'],
  variants: {
    regular: 400,
    medium: 500,
    bold: 800,
  }
});

// export const sulphurPoint = Sulphur_Point({
//   subsets: ['latin'],
//   variants: {
//     regular: 300,
//     italic: 300,
//     bold: 700,
//     boldItalic: 700,
//   }
// });



// font-family: 'Montserrat', sans-serif !important;
// font-family: 'Sulphur Point', sans-serif !important;

// Works Page :
// IBD provides financial news, analysis, and research data for investors.
// font-family: 'Nanum Myeongjo', sans-serif;
import { darken, lighten } from 'polished'
const spacingBase = 1
const spacingUnit = 'rem'

const colorPrimary = '#0277bd'
const colorSecondary = '#ffffff'
const colorText = '#ffffff'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};



export default {
  spacing: {
    xs: `${spacingBase * 0.5}${spacingUnit}`,
    s: `${spacingBase * 0.75}${spacingUnit}`,
    m: `${spacingBase}${spacingUnit}`,
    l: `${spacingBase * 1.25}${spacingUnit}`,
    xl: `${spacingBase * 1.5}${spacingUnit}`,
  },
  color: {
    text: colorText,
    primary: colorPrimary,
    primaryDark: darken(0.3, colorPrimary),
    primaryLight: lighten(0.3, colorPrimary),
    secondary: colorSecondary,
    secondaryDark: darken(0.3, colorSecondary),
    secondaryLight: lighten(0.3, colorSecondary),
  }
}


const sizes = {
  mobile: {
    min: '0px',
    max: '767px'
  },
  tablet: {
    min: '768px',
    max: '1023px'
  },
  desktop: {
    min: '1024px',
    max: '1279px'
  },
  large: {
    min: '1280px',
  }
}

export const mq = {
  // is
  is: {
    mobile: `@media (max-width: ${sizes.mobile.max})`,
    tablet: `@media (min-width: ${sizes.tablet.min}) and (max-width: ${sizes.tablet.max})`,
    desktop: `@media (min-width: ${sizes.desktop.min}) and (max-width: ${sizes.desktop.max})`,
    large: `@media (min-width: ${sizes.large.min})`,
  },
  // atLeast
  atLeast: {
    tablet: `@media (min-width: ${sizes.tablet.min})`,
    desktop: `@media (min-width: ${sizes.desktop.min})`,
    large: `@media (min-width: ${sizes.large.min})`,
  }
}
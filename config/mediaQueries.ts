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
  isMobile: `@media (max-width: ${sizes.mobile.max})`,
  isTablet: `@media (min-width: ${sizes.tablet.min}) and (max-width: ${sizes.tablet.max})`,
  isDesktop: `@media (min-width: ${sizes.desktop.min}) and (max-width: ${sizes.desktop.max})`,
  isLarge: `@media (min-width: ${sizes.large.min})`,
  // smaller
  smallerTablet: `@media (max-width: ${sizes.tablet.min})`,
  smallerDesktop: `@media (max-width: ${sizes.desktop.min})`,
  smallerLarge: `@media (max-width: ${sizes.large.min})`,
  // bigger
  biggerMobile: `@media (min-width: ${sizes.tablet.min})`,
  biggerTablet: `@media (min-width: ${sizes.desktop.min})`,
  biggerDesktop: `@media (min-width: ${sizes.large.min})`
}
import { css } from '@emotion/css'
import SolvingProblemsSvg from '@svgs/solving-problems-is-my-passion.svg'
import { mq } from 'config/mediaQueries'

const style = css`
  --max-grid-rows: 7;
  grid-template-rows: auto;
  padding-bottom: 32px;
  /* ====================================
    Info Boxes
  ==================================== */
  .Header--intro__info {
    --fadeSlideIn-translateY: 10%;
    opacity: 0;
    position: relative;
    z-index: 2;
    grid-column: columns;
    grid-row: 1;
    max-width: 360px;
    &.Header--intro__info--1 {
      animation: 1.25s var(--easeOutQuint) 1s forwards fadeSlideIn;
      grid-row: 2;
    }
    &.Header--intro__info--2 {
      animation: 1.25s var(--easeOutQuint) 1.25s forwards fadeSlideIn;
      grid-row: 3;
    }
    &.Header--intro__info--3 {
      animation: 1.25s var(--easeOutQuint) 1.5s forwards fadeSlideIn;
      grid-row: 4;
    }
    ${mq.atLeast.tablet} {
      grid-column-end: span 4;
      &.Header--intro__info--1 {
        grid-row: 1;
        grid-column-start: columns;
      }
      &.Header--intro__info--2 {
        grid-row: 1;
        grid-column-start: column 5;
      }
      &.Header--intro__info--3 {
        grid-row: 1;
        grid-column-start: column 9;
      }
    }
    ${mq.atLeast.desktop} {
      grid-column-end: span 4;
      &.Header--intro__info--2 {
        grid-column-start: column 5;
      }
      &.Header--intro__info--3 {
        grid-column-start: column 9;
      }
    }
    ${mq.atLeast.large} {
      grid-column-end: span 3;
      &.Header--intro__info--2 {
        grid-column-start: column 4;
      }
      &.Header--intro__info--3 {
        grid-column-start: column 7;
      }
    }
    h3 {
      margin-top: 32px;
      color: var(--on-background__high-emphasis);
      font: var(--typestyle__h6);
      ${mq.atLeast.desktop} {
        margin-top: 40px;
      }
      text-transform: uppercase;
    }
    p {
      margin-top: 8px;
      font: var(--typestyle__body--small);
      color: var(--on-background__low-emphasis);
    }
  }

  /* ====================================
    Background
  ==================================== */
  .Header__background {
    grid-row: 1 / var(--max-grid-rows);
    grid-column: columns;
    width: calc(100% + var(--grid-column-gap) * 2);
    height: calc(100% + 32px);
    margin-left: calc(-1 * var(--grid-column-gap));
    background-color: var(--intro__background);
    --origin-start: right;
    animation: .75s var(--easeInOutQuint) forwards .5s blockFill;
    transform: scaleX(0);
    z-index: 0;
  }

  /* ====================================
    Headline (svg)
  ==================================== */
  .Header--intro__headline {
    order: 2;
    --fadeSlideIn-translateY: 0%;
    --fadeSlideIn-translateX: 5%;
    opacity: 0;
    animation: 1.5s var(--easeOutQuint) 1s forwards fadeSlideIn;
    display: flex;
    position: relative;
    z-index: 10;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    grid-row: 1;
    grid-column: columns;
    margin-top: 32px;
    padding-bottom: 40px;
    &::before {
      position: absolute;
      content: "";
      width: 80px;
      bottom: 0;
      background-color: var(--accent);
      height: 8px;
    }
    ${mq.atLeast.tablet} {
      &::before {
        display: none;
      }
      grid-row: 4;
      margin-top: 64px;
    }
    ${mq.atLeast.desktop} {
      grid-row: 2;
      grid-column: columns / span 9;
      margin-top: 96px;
    }
    svg {
      height: 100%;
      width: 100%;
      path {
        fill: var(--on-surface__high-emphasis);
      }
    }
  }

  /* ====================================
    Bottom Info
  ==================================== */
  .Header--intro__slogan {
    display: block;
    position: relative;
    opacity: 0;
    animation: 1.5s var(--easeOutQuint) 1.5s forwards fadeSlideIn;
    z-index: 10;
    font-style: italic;
    font-size: 2rem;
    padding-top: 16px;
    margin-top: 48px;
    color: var(--on-surface__high-emphasis);
    grid-column: columns;
    grid-row: 5;
    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      background-color: rgba(var(--black-rgba-15));
      top: 0;
    }
    ${mq.atLeast.tablet} {
      max-width: 360px;
      font-size: 2.4rem;
    }
    ${mq.atLeast.desktop} {
      &::before {
        width: 112px;
        top: -8px;
        background-color: var(--accent);
        height: 12px;
      }
      border-top: none;
      grid-column: columns / span 4;
      margin-bottom: 32px;
      margin-top: 32px;
    }
    ${mq.atLeast.large} {
      grid-row: 3;
      grid-column: columns / span 4;
    }
  }
  .Header--intro__roles {
    opacity: 0;
    animation: 1.5s var(--easeOutQuint) 1.75s forwards fadeSlideIn;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 10;
    padding-top: 16px;
    max-width: 100%;
    font-weight: var(--font-weight--regular);
    font-size: 2rem;
    color: var(--on-surface__high-emphasis);
    line-height: 130%;
    grid-column: columns;
    grid-row: 6;
    ${mq.atLeast.tablet} {
      font-size: 2.4rem;
    }
    ${mq.atLeast.desktop} {
      grid-column: column 5 / span 4;
      grid-row: 5;
      margin-bottom: 32px;
      margin-top: 32px;
    }
    ${mq.atLeast.large} {
      grid-row: 3;
      grid-column: column 5 / span 4;
    }
  }
`

export default function Intro () {

  return (
    <section className={`${style} Grid`}>
      <h1 className="Header--intro__roles">
        Design Lead UI / UX &<br />
        Creative Direction
      </h1>
      <h2 className="Header--intro__slogan">Designing experiences with a focus on usability</h2>
      <div className="Header--intro__info Header--intro__info--1">
        <h3 aria-hidden>Design</h3>
        <p aria-hidden>— a toolkit of methods to explore and address user needs & problems.</p>
      </div>
      <div className="Header--intro__info Header--intro__info--2">
        <h3 aria-hidden>Technology</h3>
        <p aria-hidden>— the constraints but also the material from which to build an exciting solution.</p>
      </div>
      <div className="Header--intro__info Header--intro__info--3">
        <h3 aria-hidden>Product Thinking</h3>
        <p aria-hidden>— my approach of building products based on user needs & measured impact.</p>
      </div>
      <figure className="Header--intro__headline">
        <SolvingProblemsSvg />
      </figure>
      <div className="Header__background"></div>
    </section>
  )
}
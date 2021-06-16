import { css } from '@emotion/css'
import { mq } from 'config/mediaQueries'
import { Headline } from '@components/Headline'
import { DateTime } from '@components/DateTime'
import { Paragraph } from '@components/Paragraph'
import { Link } from '@components/Link'

const style = css`
  align-items: start;
  position: relative;
  margin-bottom: 80px;
  margin-top: 32px;
  &::after {
    position: absolute;
    content: "";
    position: relative;
    grid-column: columns;
    height: 1px;
    background-color: var(--ui--fair-contrast);
    order: 10;
    margin-top: 32px;
  }
  // -----------------------------
  // Inner Blocks
  // -----
  &> div {
    grid-column: columns;
    margin-top: 32px;
    position: relative;
    ${mq.atLeast.tablet} {
      &:nth-child(1) {
        grid-column-end: span 8;
        margin-bottom: 40px;
      }
      &:nth-child(n+2) {
        grid-row: 2;
        grid-column-end: span 4;
      }
      &:nth-child(3) {
        grid-column-start: column 5;
      }
      &:nth-child(4) {
        grid-column-start: column 9;
      }
    }
    ${mq.atLeast.large} {
      &:nth-child(n) {
        grid-row: 1;
        grid-column-end: span 3;
      }
      &:nth-child(2) {
        grid-column-start: column 4;
      }
      &:nth-child(3) {
        grid-column-start: column 7;
      }
      &:nth-child(4) {
        grid-column-start: column 10;
      }
    }
    // -----------------------------
    // Border left
    // -----
    ${mq.atLeast.large} {
      &:nth-child(2)::before {
        position: absolute;
        content: "";
        width: 1px;
        height: calc(100% + 16px);
        background-color: var(--ui--medium-contrast);
        top: 0;
        left: -16px;
      }
    }
    /* -----------------------------
    // Block content
    // ----- */
    * {
      order: 0;
    }
    h6 {
      display: none;
      ${mq.atLeast.tablet} {
        position: absolute;
        display: block;
        margin-top: -32px;
      }
    }
    &:nth-child(4) {
      h4::before {
        position: absolute;
        content: "";
        width: 2px;
        height: 40px;
        background-color: var(--accent);
        top: 0;
        left: -12px;
      }
    }
    a {
      margin-top: 16px;
    }
  }
`

export default function Intro () {

  return (
    <section className={`${style} Grid`}>
      <div>
        <Headline level="4" margin="none">Hello — I’m Lukas</Headline>
        <Headline level="5">Design Lead from Berlin</Headline>
        <Paragraph>I love solving problems by combining technology with the aesthetics &amp; human-centered psychology that is UI/UX design.</Paragraph>
      </div>
      <div>
        <Headline level="6" >Resumé / recent</Headline>
        <Headline level="4" margin="none">veare</Headline>
        <Headline level="5"><DateTime from="2005" to="2017" /></Headline>
        <Paragraph>Building products for startups, agencies &amp; businesses focusing on product thinking to merge user experience &amp; business needs.</Paragraph>
      </div>
      <div>
        <Headline level="4" margin="none">Bosch eBike</Headline>
        <Headline level="5"><DateTime from="2015" to="2017" /></Headline>
        <Paragraph>Leading the evolution of the eBike eco-system including design system, platform, mobile apps, web apps &amp; HMI.</Paragraph>
      </div>
      <div>
        <Headline level="4" margin="none">Daimler innovation lab</Headline>
        <Headline level="5"><DateTime from="2017" to="2020" /></Headline>
        <Paragraph>Building out major innovation topics for the future of mobility for Daimler AG. Helping the design team grow &amp; develop.</Paragraph>
        <Link href="https://drive.google.com/file/d/10K9F9o0hokq4iPAbF5mseKJn_yflt19k/view" rel="noopener noreferrer nofollow" target="_blank">Download resumé (PDF)</Link>
      </div>
    </section>
  )
}
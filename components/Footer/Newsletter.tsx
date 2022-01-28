import { Button } from '@components/Button'
import { Headline } from '@components/Headline'
import { Icon } from '@components/Icon'
import { Link } from '@components/Link'
import { Paragraph } from '@components/Paragraph'
import { css } from '@emotion/css'
import { mq } from 'config/mediaQueries'

const style = css`
  margin-bottom: 96px;
  .title {
    position: relative;
    grid-column: columns;
    ${mq.atLeast.tablet} {
      grid-row: 1;
      grid-column: column 1 / span 4;
    }
    & > :first-child {
      margin-bottom: 0;
    }
    &::before {
      position: absolute;
      content: "";
      width: 2px;
      height: 52px;
      background-color: var(--accent);
      top: 0;
      left: -12px;
    }
  }
  .legal-text {
    grid-row: 3;
    grid-column: columns;
    margin-top: 32px;
    ${mq.atLeast.tablet} {
      margin-top: 0;
      grid-row: 2;
      grid-column: column 1 / span 4;
    }
  }
  form {
    grid-row: 2;
    grid-column: columns;
    ${mq.atLeast.tablet} {
      grid-column: column 6 / span 7;
    }
    ${mq.atLeast.desktop} {
      grid-column: column 6 / span 5;
    }
  }
  .input-container {
    width: 100%;
    position: relative;
    margin-right: 16px;
    display: flex;
    align-items: center;
    input {
      width: calc(100% - 176px);
      position: relative;
      font: var(--typestyle__body);
      background: transparent;
      color: var(--on-background__high-emphasis);
      border: 0 solid var(--ui--medium-contrast);
      border-bottom-width: 1px;
      padding: 8px 140px 8px 36px;
      margin-bottom: 1px;
    }
    input::placeholder {
      color: var(--on-background__medium-emphasis);
    }
    input:focus {
      outline: none;
      border: 0 solid var(--accent);
      padding-bottom: 7px;
      border-bottom-width: 2px;
    }
    label {
      margin-right: 12px;
      position: absolute;
      left: 0;
      color: var(--on-background__medium-emphasis);
      transition: color 1.25s var(--easeOutQuint);
    }
    button {
      position: absolute;
      right: 0;
      z-index: 100;
    }
    &:hover {
      label {
        color: var(--on-background__high-emphasis);
      }
    }
  }
`

const Newsletter = () => {
  return (
    <div className={`${style} Newsletter Grid`}>
      <div className="title">
        <Headline level="4" style="5">Newsletter</Headline>
        <Headline style="4">Stay in the loop</Headline>
      </div>
      <form action="https://www.getrevue.co/profile/lukasoppermann/add_subscriber" method="post" id="revue-form" name="revue-form" target="_blank">
        <div className="input-container">
          <label htmlFor="member_email"><Icon type="mail" /></label>
          <Button type="submit" style="ghost" icon>Subscribe</Button>
          <input className="revue-form-field" placeholder="your@email.com" type="email" name="member[email]" id="member_email" />
        </div>
      </form>
      <Paragraph className="legal-text" type="small">By subscribing, you agree with Revue’s <Link target="_blank" href="https://www.getrevue.co/terms">Terms of Service</Link> and <Link target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</Link>.</Paragraph>
    </div>
  )
}

export default Newsletter 
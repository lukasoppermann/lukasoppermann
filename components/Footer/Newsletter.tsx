import { Link } from '@components/Link'
import { Paragraph } from '@components/Paragraph'

const Newsletter = () => {
  return (
    <div id="revue-embed">
      <form action="https://www.getrevue.co/profile/lukasoppermann/add_subscriber" method="post" id="revue-form" name="revue-form" target="_blank">
        <div className="revue-form-group">
          <label htmlFor="member_email">Email address</label>
          <input className="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email" />
        </div>
        <div className="revue-form-actions">
          <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" />
        </div>
        <Paragraph type="small">By subscribing, you agree with Revue’s <Link target="_blank" href="https://www.getrevue.co/terms">Terms of Service</Link> and <Link target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</Link>.</Paragraph>
      </form>
    </div>
  )
}

export default Newsletter 
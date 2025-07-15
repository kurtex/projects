import { useContext } from 'react'
import { AppStylesContext } from '../DropableLink/contexts/AppStylesContext'

const NewsletterChallenge: React.FC = () => {
  const { setBackground } = useContext(AppStylesContext)
  setBackground('bg-[#242742]')
  return (
    <div className='bg-white w-[1440px]'>
      <div id='newsletter-image' />
      <article id='newsletter-content'>
        <title>Stay updated!</title>
        <div>
          <span>Join 60,000+ product managers receiving monthly updates on:</span>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <label htmlFor='newsletterEmail'>Email address</label>
          <input id='newsletterEmail' type='email' placeholder='email@company.com' />
          <button>Subscribe to monthly newsletter</button>
        </div>
      </article>
    </div>
  )
}

export default NewsletterChallenge


import footerStyles from './footer.module.css';
import Image from 'next/image';
import List from '../../common/list/list';
import {shoppingLinks, footerLinks, categoryLinksOne, categoryLinksTwo, categoryLinksThree } from './footer-data';
export default function Footer() {

return (      
          <footer>
        <div className={footerStyles.footerMid}>
           
          <div className={footerStyles.footermidRow1}>
         
            <div className={footerStyles.footermidRow1Left}>
                <div className={footerStyles.h3}>Useful Links</div>
                <div className={footerStyles.usefulLinks}>
                    <List  linksData={footerLinks}/>
                     <List  linksData={footerLinks}/>
                      <List  linksData={footerLinks}/>
             
            </div>
            </div>
            <div className={footerStyles.footermidRow1Right}>
                
                <div  className={footerStyles.categoryLinks}>
                    <h3  className={footerStyles.categoryHeading}>Categories</h3>
                    <button className={footerStyles.categoryHeadingSeeAll}>See All</button>
                </div>
                <div className={footerStyles.categoryLinksItems}>
                     
                      <List  linksData={categoryLinksOne}/>
                       <List  linksData={categoryLinksTwo}/>
                        <List  linksData={categoryLinksThree}/>
                </div>
            </div>
          </div>
          <div  className={footerStyles.footerMidRow2}>
            <hr/>
          <div className={footerStyles.shipingHeading}> Shopping Links</div>
          <List linksData={shoppingLinks}/>
          </div>
          <hr/>
          <div className={footerStyles.footerMidRow3}>
            
            <p  className={footerStyles.para}>© Blink Commerce Private Limited, 2016-2025</p>
            <div className={footerStyles.footerLinks}>
                <h5>Download App </h5>
               
                <Image src={`/images/and.webp`}  alt="android-logo" width={100}  height={100} quality={75}    />
                <Image src={`/images/apple.webp`}  alt="apple-logo" width={100}  height={100} quality={75}    />

            </div>
            <div className={footerStyles.socialLinks}>
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="50" fill="white"></rect><path fillRule="evenodd" clipRule="evenodd" d="M42.9417 77.2H54.1817V49.9967H61.68L62.6733 40.6233H54.1817L54.1933 35.93C54.1933 33.4867 54.4267 32.175 57.9333 32.175H62.62V22.8H55.12C46.1117 22.8 42.9417 27.3483 42.9417 34.995V40.6233H37.3267V49.9983H42.9417V77.2V77.2ZM50 100C22.3867 100 0 77.6133 0 50C0 22.385 22.3867 0 50 0C77.6133 0 100 22.385 100 50C100 77.6133 77.6133 100 50 100Z" fill="#1F1F1F"></path></svg>
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="50" fill="white"></rect><path fillRule="evenodd" clipRule="evenodd" d="M42.9417 77.2H54.1817V49.9967H61.68L62.6733 40.6233H54.1817L54.1933 35.93C54.1933 33.4867 54.4267 32.175 57.9333 32.175H62.62V22.8H55.12C46.1117 22.8 42.9417 27.3483 42.9417 34.995V40.6233H37.3267V49.9983H42.9417V77.2V77.2ZM50 100C22.3867 100 0 77.6133 0 50C0 22.385 22.3867 0 50 0C77.6133 0 100 22.385 100 50C100 77.6133 77.6133 100 50 100Z" fill="#1F1F1F"></path></svg>
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="50" fill="white"></rect><path fillRule="evenodd" clipRule="evenodd" d="M42.9417 77.2H54.1817V49.9967H61.68L62.6733 40.6233H54.1817L54.1933 35.93C54.1933 33.4867 54.4267 32.175 57.9333 32.175H62.62V22.8H55.12C46.1117 22.8 42.9417 27.3483 42.9417 34.995V40.6233H37.3267V49.9983H42.9417V77.2V77.2ZM50 100C22.3867 100 0 77.6133 0 50C0 22.385 22.3867 0 50 0C77.6133 0 100 22.385 100 50C100 77.6133 77.6133 100 50 100Z" fill="#1F1F1F"></path></svg>
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="50" fill="white"></rect><path fillRule="evenodd" clipRule="evenodd" d="M42.9417 77.2H54.1817V49.9967H61.68L62.6733 40.6233H54.1817L54.1933 35.93C54.1933 33.4867 54.4267 32.175 57.9333 32.175H62.62V22.8H55.12C46.1117 22.8 42.9417 27.3483 42.9417 34.995V40.6233H37.3267V49.9983H42.9417V77.2V77.2ZM50 100C22.3867 100 0 77.6133 0 50C0 22.385 22.3867 0 50 0C77.6133 0 100 22.385 100 50C100 77.6133 77.6133 100 50 100Z" fill="#1F1F1F"></path></svg>
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="50" fill="white"></rect><path fillRule="evenodd" clipRule="evenodd" d="M42.9417 77.2H54.1817V49.9967H61.68L62.6733 40.6233H54.1817L54.1933 35.93C54.1933 33.4867 54.4267 32.175 57.9333 32.175H62.62V22.8H55.12C46.1117 22.8 42.9417 27.3483 42.9417 34.995V40.6233H37.3267V49.9983H42.9417V77.2V77.2ZM50 100C22.3867 100 0 77.6133 0 50C0 22.385 22.3867 0 50 0C77.6133 0 100 22.385 100 50C100 77.6133 77.6133 100 50 100Z" fill="#1F1F1F"></path></svg>

            </div>
            
          </div>
          <div className={footerStyles.footerMidRow4}>
            <p className={footerStyles.footerMidRow4}>Blinkit is owned & managed by Blink Commerce Private Limited and is not related, linked or interconnected in whatsoever manner or nature, to GROFFR.COM which is a real estate services business operated by Redstone Consultancy Services Private Limited.</p>
          </div>
        </div>
    </footer>

)
}
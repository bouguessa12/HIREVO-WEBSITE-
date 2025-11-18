import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark-bg py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Product */}
          <div>
            <h3 className="text-white font-manrope font-extrabold text-sm mb-6">
              Product
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/75 font-sans text-sm hover:text-white">
                  Landingpage
                </a>
              </li>
              <li>
                <a href="#features" className="text-white/75 font-sans text-sm hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-white/75 font-sans text-sm hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/75 font-sans text-sm hover:text-white">
                  Referral Program
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/75 font-sans text-sm hover:text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-manrope font-extrabold text-sm mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/75 font-sans text-sm hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/75 font-sans text-sm hover:text-white">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="text-white/75 font-sans text-sm hover:text-white">
                  Themes
                </a>
              </li>
              <li>
                <a href="#" className="text-white/75 font-sans text-sm hover:text-white">
                  Illustrations
                </a>
              </li>
              <li>
                <a href="#" className="text-white/75 font-sans text-sm hover:text-white">
                  UI Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-manrope font-extrabold text-sm mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/75 font-sans text-sm hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white/75 font-sans text-sm hover:text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-white/75 font-sans text-sm hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/75 font-sans text-sm hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="text-white font-manrope font-extrabold text-sm mb-6">
              More
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/75 font-sans text-sm hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/75 font-sans text-sm hover:text-white">
                  License
                </a>
              </li>
              <li>
                <a href="#" className="text-white/75 font-sans text-sm hover:text-white">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c37addd26b77fa4b10537e8af4a8dd3e1531c0ca?width=182" 
                alt="HIREVO Logo" 
                className="h-14 w-14"
              />
              <span className="text-white font-inter font-extrabold text-3xl tracking-tight">
                HireEvo AI
              </span>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-white hover:text-primary-purple transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z"/>
                  <path d="M17.4972 7.40944C17.1585 7.62639 16.3808 7.94165 15.9973 7.94165V7.9423C15.5594 7.48482 14.9428 7.19922 14.2591 7.19922C12.9311 7.19922 11.8542 8.27608 11.8542 9.60357C11.8542 9.78801 11.8756 9.96792 11.9151 10.1404H11.9147C10.1133 10.0932 8.1431 9.19026 6.95705 7.64491C6.22783 8.90712 6.85887 10.3109 7.6864 10.8224C7.40313 10.8438 6.88167 10.7897 6.63622 10.5503C6.61977 11.388 7.02259 12.498 8.49139 12.9007C8.20851 13.0529 7.70777 13.0093 7.49004 12.9769C7.56646 13.6841 8.5568 14.6086 9.63975 14.6086C9.25376 15.0551 7.80154 15.8649 6.17188 15.6073C7.27866 16.2807 8.56858 16.6706 9.93389 16.6706C13.8138 16.6706 16.8269 13.5262 16.6647 9.64709C16.6641 9.64281 16.6641 9.63854 16.6637 9.63388C16.6641 9.6239 16.6647 9.61393 16.6647 9.60357C16.6647 9.59152 16.6637 9.58013 16.6633 9.56847C17.0165 9.32691 17.4904 8.89961 17.829 8.33721C17.6327 8.44537 17.0436 8.66193 16.4954 8.71568C16.8472 8.5258 17.3684 7.90396 17.4972 7.40944" fill="white"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-primary-purple transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.351 17.8405H12.5367V11.8373H14.1763L14.5006 9.96146H12.5367V8.60219C12.5367 8.164 12.8201 7.70393 13.225 7.70393H14.3411V5.82812H12.9733V5.83653C10.833 5.91421 10.3933 7.15376 10.3551 8.45577H10.3511V9.96146H9.2578V11.8373H10.3511V17.8405H10.351Z" fill="white"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-primary-purple transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.3248 8.90336C8.1509 8.90336 8.8207 8.2926 8.8207 7.53835C8.8207 6.78344 8.1509 6.17188 7.3248 6.17188C6.4979 6.17188 5.8281 6.78344 5.8281 7.53835C5.8281 8.2926 6.4979 8.90336 7.3248 8.90336" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.1719 17.6843H8.8559V9.94336H6.1719V17.6843Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.621 13.378C12.621 12.4903 13.041 11.6222 14.0453 11.6222C15.0495 11.6222 15.2965 12.4903 15.2965 13.3568V17.5845H17.9685V13.184C17.9685 10.1267 16.1613 9.59961 15.0495 9.59961C13.9387 9.59961 13.3261 9.97533 12.621 10.8857V9.84359H9.9414V17.5845H12.621V13.378Z" fill="white"/>
                </svg>
              </a>
            </div>

            <p className="text-white/75 font-sans text-xs">
              © 2025 HireEvo AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

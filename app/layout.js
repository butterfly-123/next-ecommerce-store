import {
  faEnvelope,
  faLocation,
  faLocationDot,
  faMugSaucer,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import styles from './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <div>
              <Link
                href="/"
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  fontSize: '1.5rem',
                }}
              >
                Cofeez
              </Link>
            </div>
            <ul>
              <li>
                <Link
                  href="/"
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                  }}
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/card"
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                  }}
                >
                  Card
                </Link>
              </li>
              <li>
                <Link
                  href="/checkout"
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                  }}
                >
                  Checkout
                </Link>
              </li>
              <li>
                <Link
                  href="/thanks"
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                  }}
                >
                  Thanks
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer>
          <div>
            <h5>Contact Us</h5>
            <div>
              <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
              <p>Lorem ipsum viverra feugiat tesque libero ut</p>
            </div>
            <div>
              <FontAwesomeIcon className={styles.icon} icon={faPhone} />
              <p>+ 48 5854995838</p>
            </div>
            <div>
              <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
              <p>cofee@gmail.com</p>
            </div>
          </div>

          <div>
            <h5>FEATURES</h5>
            <a href="/#">Rewards</a>
            <a href="/#">Giveaways</a>
            <a href="/#">Referral Hub</a>
            <a href="/#">Analytics</a>
            <a href="/#">Integrations</a>
          </div>
          <div>
            <h5>FEATURES</h5>
            <a href="/#">Rewards</a>
            <a href="/#">Giveaways</a>
            <a href="/#">Referral Hub</a>
            <a href="/#">Analytics</a>
            <a href="/#">Integrations</a>
          </div>
        </footer>
      </body>
    </html>
  );
}

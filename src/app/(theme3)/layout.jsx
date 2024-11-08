import Header from '@/app/ui/Header';
import logoUrl from '../../../public/images/logo-dark.png';
import darkLogoUrl from '../../../public/images/logo-white.png';
import FooterStyle3 from '../ui/Footer/FooterStyle3';
import './../css/style-s3.css';
import './../css/custom.css';

export default function Theme3Layout({ children }) {
  return (
    <div className="nk-app-root">
      <Header
        darkMode={true}
        varient="has-border"
        logoUrl={logoUrl}
        darkLogoUrl={darkLogoUrl}
        actionBtnText="Get Started"
        actionBtnClass="btn btn-primary"
        actionBtnUrl="/"
        menuPosition="mx-auto"
        language
      />
      <main className="nk-pages">{children}</main>
      <FooterStyle3 />
    </div>
  );
}

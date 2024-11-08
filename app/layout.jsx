import Header from '/app/ui/Header';
import logoUrl from '/public/images/logo-dark.png';
import darkLogoUrl from '/public/images/logo-white.png';
import FooterStyle3 from '/app/ui/Footer/FooterStyle3';
import '/app/css/style-s3.css';
import '/app/css/custom.css';

export default function Theme3Layout({ children }) {
  return (
    <div className="nk-app-root">
      <Header
        darkMode={false}
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

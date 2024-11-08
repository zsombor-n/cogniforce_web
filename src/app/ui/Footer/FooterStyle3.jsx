import TextWidget from '../Widget/TextWidget';
import Copyright from '../Widget/Copyright';
import MenuWidgetStyle2 from '../Widget/MenuWidgetStyle2';
import MenuWidget from '../Widget/MenuWidget';
import ContactInfoList from '../Widget/ContactInfoList';
import logoUrl from '../../../../public/images/logo-dark.png';
import darkLogoUrl from '../../../../public/images/logo-white.png';

const companyMenu = [
  { href: '/', title: 'About Us' },
];
const bottomMenu = [
  { href: '/', title: 'Terms' },
  { href: '/', title: 'Privacy Policy' },
];
const contactInfoList = [
  { iconClass: 'mail-fill', info: 'hello@cogniforce.io' },
  { iconClass: 'call-alt-fill', info: '+36 30 420 3201' },
  {
    iconClass: 'map-pin-fill',
    info: 'Budapest, Hungary',
  },
];

export default function FooterStyle3() {
  return (
    <footer className="nk-footer">
      <div className="section section-sm section-top-0">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-4 col-lg-7 col-md-9 me-auto">
              <TextWidget
                logoUrl={logoUrl}
                darkLogoUrl={darkLogoUrl}
                subTitle="Cogniforce is an advanced AI solution designed to automate essential customer service tasks, such as answering inquiries, managing support tickets, and enhancing customer satisfaction around the clock."
                variant="pe-xxl-5"
              />
            </div>
            <div className="col-xl">
              <div className="row g-gs">
                <div className="col-lg-3 col-md-5 col-sm-6">
                  <ContactInfoList
                    title="Get In Touch"
                    menuItems={contactInfoList}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-0">
        <hr className="border-opacity-25 border-primary m-0" />
        <div className="container">
          <div className="py-4">
            <div className="row">
              <div className="col-md">
                <Copyright
                  copyrightText="Copyright © 2024. "
                  copyrightLink="https://cogniforce.io"
                  copyrightLinkText="Cogniforce"
                  variant="mb-2 mb-md-0"
                  linkClasses="fw-bold text-base"
                />
              </div>
              <div className="col-md">
                <MenuWidgetStyle2 menuItems={bottomMenu} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

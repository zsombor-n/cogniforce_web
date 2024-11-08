import CtaStyle3 from '/app/ui/Cta/CtaStyle3';
import SectionHeadingStyle2 from '/app/ui/SectionHeading/SectionHeadingStyle2';
import IconBoxStyle4 from '/app/ui/IconBox/IconBoxStyle4';
import IconBoxStyle5 from '/app/ui/IconBox/IconBoxStyle5';
import TestimonialSlider from '/app/ui/TestimonialSlider';
import FeatureCardStyle3 from '/app/ui/FeatureCard/FeatureCardStyle3';
import FeatureCardStyle4 from '/app/ui/FeatureCard/FeatureCardStyle4';
import HeroStyle3 from '/app/ui/Hero/HeroStyle3';
import heroBanner from '/public/images/gfx/banner/f.png';
import featuredImg1 from '/public/images/gfx/process/a.jpg';
import featuredImg2 from '/public/images/gfx/process/b.png';
import featuredImg3 from '/public/images/gfx/process/c.jpg';

export const metadata = {
  title: 'Cogniforce',
};

export default function HomeS3() {
  return (
    <>
      <HeroStyle3
        title="Your next colleagues on <span className='text-gradient-primary'>AI</span>."
        subTitle="AI-powered customer service assistant, delivering high-quality, accurate responses in seconds, enhancing support quality while reducing operational costs!"
        bnt1Text="Sign up with Google"
        btn1Url="/not-found"
        btn2Text="Sign up with email"
        btn2Url="/not-found"
        alertMessage="<span className='text-primary'>*100% free </span> to get started. No credit card required."
        thumbImg={heroBanner}
      />
      <section className="section section-0 has-shape">
        <div className="nk-shape bg-shape-blur-d start-50 bottom-0" />
        <div className="nk-shape bg-shape-blur-e mt-n12 me-n10 end-50" />
        <div className="container">
          <div className="section-content">
            <div className="row text-center g-gs justify-content-center">
              <div className="col-md-6 col-xl-4">
                <IconBoxStyle5
                  variant="text-bg-primary-soft-outline"
                  iconClass="speed"
                  title="Real-Time Customer Engagement"
                  subTitle="Deliver fast, professional responses to customer inquiries at any time, ensuring no question goes unanswered."
                  btnText="See Instant AI Responses"
                  btnUrl="/"
                />
              </div>
              <div className="col-md-6 col-xl-4">
                <IconBoxStyle5
                  variant="text-bg-info-soft-outline"
                  iconClass="edit"
                  title="Precision-Driven Assistance"
                  subTitle="Provide accurate, detail-oriented support that reduces response times and keeps customers informed and satisfied."
                  btnText="Experience AI-Powered Support"
                  btnUrl="/"
                />
              </div>
              <div className="col-md-6 col-xl-4">
                <IconBoxStyle5
                  variant="text-bg-blue-soft-outline"
                  iconClass="chat-msg"
                  title="Elevate Customer Satisfaction"
                  subTitle="Create lasting positive experiences by using AI to respond quickly and effectively, leaving customers delighted with every interaction."
                  btnText="Learn About Customer Success AI"
                  btnUrl="/"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-lg section-bottom-0 has-shape">
        <div className="nk-shape bg-shape-blur-g mt-n20p start-50" />
        <div className="nk-shape bg-shape-blur-h translate-middle-y top-50 end-50" />
        <div className="nk-shape bg-shape-blur-i mb-n30p bottom-0 start-50" />
        <div className="container">
          <SectionHeadingStyle2 title="How it Works" variant="h1" />
          <FeatureCardStyle3
            number="01"
            title="Choose Your AI Assistant Role"
            subtitle="Select from a range of customer service roles to best support your needs, whether handling inquiries, resolving issues, or providing 24/7 assistance."
            imgUrl={featuredImg1}
            svgBgUrl="/images/svgbg/1.svg"
            svgBgUrlClass="position-absolute top-0 start-0 mt-n5 ms-n3 me-6 z-index-n1"
          />
          <FeatureCardStyle4
            number="02"
            title="Customize to Fit Your Brand"
            subtitle="Provide details to the AI to ensure responses align with your brand's tone, values, and customer service standards."
            featureList={[
              'Tailor responses to common queries',
              'Customize the AI’s tone and approach',
            ]}
            imgUrl={featuredImg2}
            imgclass
            svgBgUrl="/images/svgbg/2.svg"
            svgBgUrlClass="position-absolute top-0 start-0 mt-n5 mt-lg-n6 mt-xl-n7 ms-2 ms-sm-3 ms-md-0 ms-lg-1 me-5 me-sm-6 me-md-2 me-lg-0 me-xl-2 z-index-n1"
          />
          <FeatureCardStyle3
            number="03"
            title="Deploy and Monitor in Real-Time"
            subtitle="Your AI assistant is ready to engage with customers instantly, providing reliable, accurate, and human-like interactions, enhancing satisfaction and support."
            imgUrl={featuredImg3}
            svgBgUrl="/images/svgbg/3.svg"
            svgBgUrlClass="position-absolute top-0 start-0 mt-n5 ms-n5 z-index-n1"
          />
        </div>
      </section>
      <section className="section section-lg section-bottom-0">
        <div className="container">
          <SectionHeadingStyle2
            title="What can our AI Employees accomplish for you?"
            variant="h1"
          />
          <div className="section-content">
            <div className="row g-gs">
              <div className="col-md-6 col-xl-4">
                <IconBoxStyle4
                  iconBoxBgClass="bg-primary"
                  iconClass="globe"
                  title="24/7 Customer Assistance"
                  subTitle="Provide instant, around-the-clock support to your customers without breaks or delays."
                  variant="h-100"
                />
              </div>
              <div className="col-md-6 col-xl-4">
                <IconBoxStyle4
                  iconBoxBgClass="bg-info"
                  iconClass="flag"
                  title="Accurate Information Delivery"
                  subTitle="Ensure customers receive precise, consistent answers to their inquiries, improving satisfaction."
                  variant="h-100"
                />
              </div>
              <div className="col-md-6 col-xl-4">
                <IconBoxStyle4
                  iconBoxBgClass="bg-purple"
                  iconClass="edit"
                  title="Personalized Customer Interactions"
                  subTitle="Tailor responses and recommendations based on customer profiles and previous interactions."
                  variant="h-100"
                />
              </div>
              <div className="col-md-6 col-xl-4">
                <IconBoxStyle4
                  iconBoxBgClass="bg-warning"
                  iconClass="signal"
                  title="Seamless Multi-Channel Support"
                  subTitle="Engage with customers across various platforms, from chat to email, ensuring consistency."
                  variant="h-100"
                />
              </div>
              <div className="col-md-6 col-xl-4">
                <IconBoxStyle4
                  iconBoxBgClass="bg-danger"
                  iconClass="briefcase"
                  title="Proactive Issue Resolution"
                  subTitle="Identify and resolve common issues before they escalate, enhancing customer retention."
                  variant="h-100"
                />
              </div>
              <div className="col-md-6 col-xl-4">
                <IconBoxStyle4
                  iconBoxBgClass="bg-success"
                  iconClass="chat-msg"
                  title="Scalable to Meet Demand"
                  subTitle="Scale effortlessly with AI employees who adapt to peaks in customer queries."
                  variant="h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaStyle3
        title="Ready to get started?"
        subTitle="It's like having access to a team of copywriting experts writing powerful copy for you in 1-click."
        btnText="Get Started For Free"
        btnLink="/login"
      />
    </>
  );
}

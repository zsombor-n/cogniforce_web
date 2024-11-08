import Image from 'next/image';

export default function FeaturedCardStyle16({ imgUrl, imgAlt, featureList }) {
  return (
    <div className="section-content">
      <div className="row gx-gs gy-6 align-items-xl-center">
        <div className="col-xl-7 col-lg-7">
          <div className="block-gfx pe-xl-4">
            <Image
              className="rounded-4"
              src={imgUrl}
              alt={imgAlt}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="col-xl-5 col-lg-5">
          <ul className="gap gy-gs">
            {featureList?.map((item, index) => (
              <li key={index}>
                <h6 className="overline-title text-tertiary">
                  Step {index + 1}
                </h6>
                <h3 className="title">{item.title}</h3>
                <p>{item.subTitle}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

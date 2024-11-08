import Image from 'next/image';
import Icon from '../Icon';

export default function FeaturedCardStyle11({
  imgUrl,
  imgAlt,
  iconUrl,
  title,
  subTitle,
  featureList,
  iconBoxClass,
}) {
  return (
    <div className="p-5 p-lg-6 rounded-4 shadow-sm">
      <div className="row g-gs justify-content-between align-items-center">
        <div className="col-lg-6 col-xl-5">
          <div className="ps-4">
            <div className="rounded-4 bg-warning bg-opacity-40 p-5 ps-0">
              <div className="block-gfx ms-n4">
                <Image
                  className="w-100 rounded-3 shadow-sm"
                  src={imgUrl}
                  alt={imgAlt}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xxl-5">
          <div className="block-text pe-xl-5">
            <div
              className={`media media-2xl media-middle border ${iconBoxClass} border-opacity-25 rounded-2 mb-4`}
            >
              <div className="h-2rem d-inline-flex">
                <Image src={iconUrl} alt="Icon" height={32} width={32} />
              </div>
            </div>
            <h3 className="title">{title}</h3>
            <p>{subTitle}</p>
            <ul className="list gy-3">
              {featureList?.map((item, index) => (
                <li key={index}>
                  <Icon
                    icon="check-circle-fill"
                    className="icon text-info fs-5"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';
import Image from 'next/image';
import Button from '../Button';
import parse from 'html-react-parser';

export default function HeroStyle9({
  title,
  subTitle,
  href,
  btnText,
  alertText,
  thumbImg,
  brandTitle,
  brandSrcList,
  videoUrl = '/',
  videoIcon,
}) {
  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);
  const handelClick = () => {
    setIframeSrc(videoUrl);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };
  return (
    <>
      <section className="has-mask nk-header">
        <div className="nk-mask bg-line-b" />
        <div className="nk-hero pt-6 pt-lg-8 pt-xl-12">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-xxl-9 col-xl-10">
                <div className="px-xl-4 pb-5">
                  <h1 className="title mb-3 display-6 mb-lg-4">
                    {parse(title)}
                  </h1>
                  <p className="lead">{subTitle}</p>
                </div>
                <ul className="btn-list btn-list-inline">
                  <li>
                    <Button
                      href={href}
                      btnClass="btn btn-primary btn-lg rounded-pill"
                      btnText={btnText}
                    />
                  </li>
                </ul>
                <p className="sub-text mt-3">{alertText}</p>
              </div>
            </div>
            <div className="py-10">
              <div className="row justify-content-center">
                <div className="col-xxl-10">
                  <div className="block-gfx rounded-4 overflow-hidden p-1 bg-gradient-primary">
                    <Image
                      className="rounded-4"
                      src={thumbImg}
                      alt="Thumbnail"
                      placeholder="blur"
                    />
                    <span
                      className="glightbox position-absolute w-4rem h-4rem w-lg-6rem h-lg-6rem start-50 top-50 translate-middle cursor-pointer"
                      onClick={handelClick}
                    >
                      <img className="h-100 w-100" src={videoIcon} alt="Icon" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center text-center g-gs">
              <div className="col-xxl-10">
                <p className="fs-4 pb-4">{brandTitle}</p>
                <ul className="d-flex flex-wrap justify-content-center has-gap gy-3">
                  {brandSrcList?.map((item, index) => (
                    <li className="px-3 px-xl-5" key={index}>
                      <img
                        className="h-2rem visible-on-dark-mode"
                        src={item.lightLogoUrl}
                        alt="Brand"
                      />
                      <img
                        className="h-2rem visible-on-light-mode"
                        src={item.darkLogoUrl}
                        alt="Brand"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={toggle ? 'cs-video_popup active' : 'cs-video_popup'}>
        <div className="cs-video_popup_overlay" />
        <div className="cs-video_popup_content">
          <div className="cs-video_popup_layer" />
          <div className="cs-video_popup_container">
            <div className="cs-video_popup_align">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={iframeSrc}
                  title="video modal"
                />
              </div>
            </div>
            <div className="cs-video_popup_close" onClick={handelClose} />
          </div>
        </div>
      </div>
    </>
  );
}

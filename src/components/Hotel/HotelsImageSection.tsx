import Slider from "react-slick";
import CustomImage from "../../utils/CustomImage";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Href, ImagePath } from "../../utils/Constant";
import { dashboardSlider } from "@/data/SliderData";

const HotelsImageSection = () => {
  const data = [11, 10, 11, 9, 11, 12, 12, 9, 12];
  return (
    <div className="row">
      <div className="col-12">
        <Slider
          {...dashboardSlider}
          className="responsive arrow-dark zoom-gallery ratio2_3 "
        >
          {/* {data.map((data, index) => {
            return (
              <div key={index}>
                <a href={Href} className="bg-size blur-up lazyload">
                  <CustomImage
                    src={`${ImagePath}/hotel/room/${data}.jpg`}
                    className="img-fluid blur-up lazyload bg-img w-100"
                    alt=""
                  />
                </a>
              </div>
            );
          })} */}
          error
          {/* <Gallery>
            {data.map((data, index) => {
              return (
                <Item
                  original={`${ImagePath}/hotel/room/${data}.jpg`}
                  width="1024"
                  height="768"
                  key={index}
                >
                  {({ ref, open }) => (
                    <div
                      onClick={open}
                      ref={ref as React.MutableRefObject<HTMLImageElement>}
                    >
                      <a href={Href} className="bg-size blur-up lazyload">
                        <CustomImage
                          src={`${ImagePath}/hotel/room/${data}.jpg`}
                          className="img-fluid blur-up lazyload bg-img w-100"
                          alt=""
                        />
                      </a>
                    </div>
                  )}
                </Item>
              );
            })}
          </Gallery> */}
        </Slider>
      </div>
    </div>
  );
};

export default HotelsImageSection;

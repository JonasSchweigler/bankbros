import React, { useEffect, useState } from "react";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  BtnWrap,
  Img,
  ImgWrap,
  Heading,
  TextWrapper,
  TopLine,
  Subtitle,
} from "./ProfitElemenst";

import img_1 from "../../images/img_1.png";
import img_2 from "../../images/img_2.png";
import img_3 from "../../images/img_3.png";
import img_4 from "../../images/img_4.png";
import img_5 from "../../images/img_5.png";

const ProfitsSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  primary,
  dark,
  dark2,
}) => {
  const imgMap = [img_1, img_2, img_3, img_4, img_5];
  const [image, setImage] = useState([0]);
  console.log();
  useEffect(() => {
    let newImage;
    if (image === 4) {
      newImage = 0;
    } else newImage = Number(image) + 1;
    setTimeout(() => {
      setImage(newImage);
    }, 3000);
  }, [image]);

  let sectionStyle = {
    backgroundImage: `url("${imgMap[image]}")`,
  };

  return (
    <div>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img style={sectionStyle} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </div>
  );
};

export default ProfitsSection;

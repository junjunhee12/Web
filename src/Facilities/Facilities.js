import { GlampingroomContainer, SlideImg } from "../Room/Glamping"
import styled, {button} from "styled-components"
import 이미지 from "../assets/이미지.jpg"
import 카페아라미스 from "../assets/카페아라미스.jpg"
import 카페아라미스2 from "../assets/카페아라미스2.jpg"
import { Glampingroomtopwrap } from "../Room/Glamping"
import 파스타1 from "../assets/파스타1.jpg"
import 파스타2 from "../assets/파스타2.jpg"
import 샌드위치1 from "../assets/샌드위치1.webp"
import 샌드위치2 from "../assets/샌드위치2.jpg"
import 샌드위치3 from "../assets/샌드위치3.jpg"
import 와플 from "../assets/와플.jpg"
import 카페1 from "../assets/카페1.jpg"
import 카페2 from "../assets/카페2.jpg"
import 카페3 from "../assets/카페3.jpg"
import 카페4 from "../assets/카페4.jpg"
import 카페5 from "../assets/카페5.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../Room/styles.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useState } from "react"
import Cafe from "./Cafe"
import Cafe2 from "./Cafe2"


// 글씨를 이미지 웨에 올릴때 사용
export const Div = styled.div`
    position: absolute;
`

// 제일 상단 이미지와 이미지 안에 컨텐츠들 ------------------------------------
export const FacilitiesContainer = styled.div`
    width:100% ;
    height: 100vh;
    position: relative;
    font-family: "Lora";
`
export const Imgcontainer = styled.img`
    width: 100%;
    height: 100%;
    /* background-color: red; */
    
    
`
// FacilitiesContainer
export const FacilitiesC = styled.div`
    width: 100%;
    max-width: 1520px;
    height: 360px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
// FacilitiesComtainerHead
export const FacilitiesCH = styled.div`
    font-size: 48px;
    font-weight: 400;
    color: white;
`
//FacilitiesComtainerBody
export const FacilitiesCB = styled.div`
    font-family: "Pretendard";
    font-weight: 300;
    font-size: 17px;
    color: white;
`
//FacilitiesComtainerFooter
export const FacilitiesCF = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`
// FacilitiesContainerFooterContiner
export const FacilitiesCFC = styled.div`
    width: 198px;
    height: 198px;
    /* border: 1px solid white; */
    border: ${(props) => (props.activeIndex ? "none" : "1px solid white")};
    color: white;
    /* background-color: yellowgreen; */
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
    position:relative ;
`
// 제일 상단 이미지와 이미지 안에 컨텐츠들 끝------------------------------------

// cafe 아라미스 시작 -------------------------------------------------

//  cafe 아라미스 끝

//  이미지 슬라이드 시작

const ImgslideContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 30%;
        background-color: white;
        z-index: -1;
    }

    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 70%;
        background-color: #F3F3F3;
        z-index: -1;
    }
    border-bottom: 1px solid #CCCCCC;
`
function Facilities(){
    const [index, setIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const handleIndexChange = (newIndex) => {
        setIndex(newIndex);
        setActiveIndex(newIndex);
    };
    const content = [
        "카페 아라미스 Ⅰ",
        "카페 아라미스 Ⅱ",
        "야마노우에",
        `몽콕 바베큐장 까르페디엠 클럽`,
        "베고니아 홀",
        "지안아트홀",
        "기타",
    ]

    const maincontent = [
        <Cafe />,  <Cafe2 />
    ]

   

    const img = [
        카페아라미스, 카페아라미스2, 파스타1, 파스타2, 샌드위치1, 샌드위치2, 샌드위치3
    ]

    const swiperimg = [
        [파스타1, 파스타2, 샌드위치1, 샌드위치2, 샌드위치3, 와플],
        [카페1, 카페2, 카페3, 카페4, 카페5, 카페3],
        [파스타1, 파스타2, 샌드위치1, 샌드위치2, 샌드위치3, 와플],
        [카페1, 카페2, 카페3, 카페4, 카페5, 카페3],
        [카페1, 카페2, 카페3, 카페4, 카페5, 카페3],
        [파스타1, 파스타2, 샌드위치1, 샌드위치2, 샌드위치3, 와플],
        [카페1, 카페2, 카페3, 카페4, 카페5, 카페3]
    ]
    return(
        <>
            <GlampingroomContainer>
                <FacilitiesContainer>
                    
                    <FacilitiesC>
                        <FacilitiesCH>
                            Facilities
                        </FacilitiesCH>
                        <FacilitiesCB>  
                            로미지안 가든의 특별한 이벤트를 통해 함께하는 사람들과 즐거운 시간을 보내세요.
                        </FacilitiesCB>
                        <FacilitiesCF>
                            {
                                content.map((content, index)=>(
                                <FacilitiesCFC activeIndex={activeIndex === index} key={index}  onClick={() => handleIndexChange(index)}>
                                    <Div >
                                        {content}
                                    </Div>
                                    {/* <Imgcontainer src={카페아라미스}/> */}
                                    {activeIndex === index && <Imgcontainer src={img[index]}/>}
                                </FacilitiesCFC>
                                ))
                            }
                        </FacilitiesCF>
                    </FacilitiesC>
                    <Imgcontainer src={이미지}/>
                </FacilitiesContainer>
                {/* 제일 상단 끝 */}
                <Glampingroomtopwrap>
                        {/* 카페 아라미스 Ⅰ */}
                        {
                            content[index]
                        }
                    </Glampingroomtopwrap>
                {/* 카페아라미스 시작 */}
                
                {maincontent[index]}

                {/* 카페아라미스 끝 */}
                <ImgslideContainer>
                <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper2"
                        >
                            <SwiperSlide >
                                <SlideImg src={swiperimg[index][0]} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SlideImg src={swiperimg[index][1]} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SlideImg src={swiperimg[index][2]} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SlideImg src={swiperimg[index][3]} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SlideImg src={swiperimg[index][4]} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SlideImg src={swiperimg[index][5]} />
                            </SwiperSlide>
                            
                        </Swiper>
                </ImgslideContainer>

                {/* {swiper[index]} */}
            </GlampingroomContainer>
        </>


    )
}

export default Facilities
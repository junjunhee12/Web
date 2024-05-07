import styled, {button} from "styled-components"
import React, { useContext, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 글램핑1 from "../assets/글램핑1.jpg"
import 글램핑2 from "../assets/글램핑2.jpg"
import 글램핑3 from "../assets/글램핑3.jpg"
import 글램핑4 from "../assets/글램핑4.avif"
import 글램핑5 from "../assets/글램핑5.avif"

import 캠핑1 from "../assets/캠핑1.avif"
import 캠핑2 from "../assets/캠핑2.avif"
import 캠핑3 from "../assets/캠핑3.avif"
import 캠핑4 from "../assets/캠핑4.avif"
import 캠핑5 from "../assets/캠핑5.avif"
import { PrContent } from "../coentexts/prContent";
export const GlampingroomContainer = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: red; */
`
const GlampingroomContainerCentent = styled.div`
    width: 100%;
    height: 100%;
    &.background{
        background-color: #F3F3F3;
    }
    /* background-color: red; */
`

export const Glampingroomtopwrap = styled.div`
    width: fit-content;
    height: 75px;
    max-width: 1600px;
    /* background-color: yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 3rem;
    margin:170px auto 0;
    flex-direction: column;
    font-size: 36px;
    font-weight: 400;
    border-radius: 16px;
    border-left: 3px solid black;
    border-right: 3px solid black;
    /* &::after{
        content:"" ;
        width: 30px;
        height: 1px;
        background-color: black;
        margin-top: 1rem;
    } */
`


const Glampingroombottomwrap = styled.div`
    width: 100%;
    height: 100%;
    
    padding: 170px 0;
`
const GlampingroombottomwrapContent = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const GlampingroombottomwrapContentImgbox = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    .mySwiper2{
        background-color: #F3F3F3;
    }
`
export const H3 = styled.h3`
    font-size: 48px;
    font-family:'DNFForgedBlade';font-style:normal;font-weight:300;
    padding-top: 1rem;
`
export const P = styled.p`
    width: 100%;
    height: 100%;
    /* font-size: 18px; */
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 1rem 0;
`

export const SlideImg = styled.img`
    width: 100%;
    height: 100%;
`
const InformationContainerBox = styled.div`
    width: 100%;
    height: 50vh;
    /* background-color: dodgerblue; */
    position: relative;
`
const InformationContainer = styled.div`
    width: 100%;
    /* height: 200px; */
    /* background-color: yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 36px;
    font-weight: 400;
    margin-top: 170px;
    &.scroll1{
        animation: ${(props) => (props.height ? "scroll 1s linear forwards" : "scrollback 1s linear forwards")};
        position: absolute;
        @keyframes scroll {
            0%{
                opacity: 0;
                bottom: -300px;
            }
            100%{
                opacity: 1;
                bottom: 0;
            }
        }
        @keyframes scrollback {
            0%{
                opacity: 1;
                bottom: 0px;
            }
            100%{
                opacity: 0;
                bottom: -300px;
            }
        }
    }

    &.scroll2{
        animation: ${(props) => (props.height2 ? "scroll 1s linear forwards" : "scrollback 1s linear forwards")};
        position: absolute;
        @keyframes scroll {
            0%{
                opacity: 0;
                bottom: -300px;
            }
            100%{
                opacity: 1;
                bottom: 0;
            }
        }
        @keyframes scrollback {
            0%{
                opacity: 1;
                bottom: 0px;
            }
            100%{
                opacity: 0;
                bottom: -300px;
            }
        }
    }
`

const Information = styled.div`
    width: 100%;
    height: 200px;
    max-width: 1600px;
    /* background-color: yellow; */
    border-top:1px solid black ;
    border-bottom:1px solid black ;
    display: flex;
`
const Informationleft = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
`
const InformationMid = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: blue; */
    font-size: medium;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    gap: 1rem;
`
const Informationright = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: wheat; */
    font-size: medium;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    gap: 1rem;
`
const Reservation =styled.div`
    width: 100%;
    height: 150px;
    /* background-color: dodgerblue; */
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
      width: 300px;
      height: 60px;
      border: none;
      background-color:#B1B1C0 ;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 18px;
`

function Glampingroom(){
    // const temp = useContext(PrContent)
    // const {handleOnClickGlamping, handleOnClickRoom, mainImg} = temp
    const [height, setHeight] = useState(false)
    const [height2, setHeight2] = useState(false)
    useEffect(()=>{
        const scroll = () =>{
                const scroll = window.scrollY
                const scroll2 = window.scrollY
                if(scroll > 1530){
                    setHeight(true)
                }else if(scroll < 1530){
                    setHeight(false)
                }
                if(scroll2 > 3130){
                    setHeight2(true)
                }else if(scroll < 3130){
                    setHeight2(false)
                }
            }
            window.addEventListener("scroll", scroll);
                return () => {
                    window.removeEventListener("scroll", scroll);
                };
    },[])
    return(
        <>
            <GlampingroomContainer>
                <GlampingroomContainerCentent>
                <Glampingroomtopwrap>
                    글램핑
                </Glampingroomtopwrap>
                
                <Glampingroombottomwrap>
                    <GlampingroombottomwrapContent>
                        <H3>철인의 마을</H3>
                        <P>
                            시간의 속박에서 벗어나 숲 속에서 나를 만나는 시간<br></br>
                            자연의 위로를 받으며 오롯이 깊은 마음의 평온을 찾는다.
                        </P>
                        <GlampingroombottomwrapContentImgbox>
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
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <SlideImg src={글램핑1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SlideImg src={글램핑2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SlideImg src={글램핑3} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SlideImg src={글램핑4} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SlideImg src={글램핑5} />
                            </SwiperSlide>
                        </Swiper>
                        </GlampingroombottomwrapContentImgbox>
                        <InformationContainerBox>
                            <InformationContainer height={height} className="scroll1">
                            <Information>
                                <Informationleft>
                                    객실정보
                                </Informationleft>
                                <InformationMid>
                                    <div>기준 인원: 3인 / 최대 3인 (인원 추가 불가)</div>
                                    <div>독채형 (더블 베드 1 + 싱글 베드 1)</div>
                                    <div>객실 내 욕실 구비, 공용 화장실</div>
                                    <div>취사 가능</div>
                                </InformationMid>
                                <Informationright>
                                    <div>BBQ 그릴 세트 + 가스 추가 : 30,000 원</div>
                                    <div>퇴실 시간 연장 : 50,000 원 (4시간)</div>
                                    <div>객실 정돈 미 이행 시 : 20,000 원</div>
                                    <div>집기류 파손 등 : 실비</div>
                                </Informationright>
                            </Information>
                            <Reservation>
                                <Button>객실예약</Button>
                            </Reservation>
                        </InformationContainer>
                        </InformationContainerBox>
                        
                    </GlampingroombottomwrapContent>
                </Glampingroombottomwrap>
                </GlampingroomContainerCentent>
                
                <GlampingroomContainerCentent className="background">
                <Glampingroombottomwrap>
                    <GlampingroombottomwrapContent>
                        <H3>문학인의 마을</H3>
                        <P>
                            시간의 속박에서 벗어나 숲 속에서 나를 만나는 시간<br></br>
                            자연의 위로를 받으며 오롯이 깊은 마음의 평온을 찾는다.
                        </P>
                        <GlampingroombottomwrapContentImgbox>
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
                            <SwiperSlide>
                                <SlideImg src={캠핑1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SlideImg src={캠핑2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SlideImg src={캠핑3} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SlideImg src={캠핑4} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SlideImg src={캠핑5} />
                            </SwiperSlide>
                            
                        </Swiper>
                        </GlampingroombottomwrapContentImgbox>
                        <InformationContainerBox>
                            <InformationContainer height2={height2} className="scroll2">
                            <Information>
                                <Informationleft>
                                    객실정보
                                </Informationleft>
                                <InformationMid>
                                    <div>기준 인원: 3인 / 최대 3인 (인원 추가 불가)</div>
                                    <div>독채형 (더블 베드 1 + 싱글 베드 1)</div>
                                    <div>객실 내 욕실 구비, 공용 화장실</div>
                                    <div>취사 가능</div>
                                </InformationMid>
                                <Informationright>
                                    <div>BBQ 그릴 세트 + 가스 추가 : 30,000 원</div>
                                    <div>퇴실 시간 연장 : 50,000 원 (4시간)</div>
                                    <div>객실 정돈 미 이행 시 : 20,000 원</div>
                                    <div>집기류 파손 등 : 실비</div>
                                </Informationright>
                            </Information>
                            <Reservation>
                                <Button>객실예약</Button>
                            </Reservation>
                        </InformationContainer>
                        </InformationContainerBox>
                        
                    </GlampingroombottomwrapContent>
                </Glampingroombottomwrap>
                </GlampingroomContainerCentent>
            </GlampingroomContainer>
        </>
            
    )
}

export default Glampingroom
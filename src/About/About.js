import { Div, FacilitiesC, FacilitiesCB, FacilitiesCFC, FacilitiesCH, FacilitiesContainer, Imgcontainer } from "../Facilities/Facilities"
import { FacilitiesCFB } from "../GROUPEVENTS/Groupevents"
import { GlampingroomContainer, Glampingroomtopwrap } from "../Room/Glamping"
import 투어 from "../assets/투어.jpg"
import 가든 from "../assets/가든.jpg"
import 요금 from "../assets/요금.jpg"
import 교통 from "../assets/교통.jpg"
import 질문 from "../assets/질문.webp"
import Glamping from "../assets/글램핑.jpg"
import styled from "styled-components"
import { useState } from "react"
import Garden from "./Garden"
// import Time from "./Time"
import Faq from "./Faq"

export const AboutbodyContainer =styled.div`
    width: 100%;
    height: 100%;
    /* background-color: yellow; */
    margin: 100px 0;
    position: relative;
`
export const Aboutbody = styled.div`
    width: 100%;
    max-width: 1580px;
    height: 1300px;
    /* background-color: green; */
    margin: 0 auto;
    display: flex;
    /* gap: 1rem; */
`

export const Aboutbodyleft = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: dodgerblue; */
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Aboutbodyright = styled.div`
    width: 849.23px;
    height: 100%;
    /* background-color: red; */
    position: absolute;
    right: 0;
    
`
export const AboutbodyrightImg = styled.img`
    width: 849.23px;
    height: 100%;
    background-color: blueviolet;
    position: absolute;
    right: 0;
`

export const AboutH3 = styled.h3`
    font-family: "Noto Serif KR";
        font-size: 54px;
        line-height: 72px;
        color: #000;
        margin-bottom: 60px;
`
export const AboutDivContainer = styled.div`
    width: 100%;
    height: 733px;
    font-family: "Noto Sans KR";
    font-size: 17px;
    font-weight: normal;
    word-break: keep-all;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
export const AboutleftFoot = styled.div`
    display: flex;
    gap: 1rem;
`
export const AboutleftFootBox = styled.div`
    width: 210px;
    height: 80px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: yellow; */
`
export const AboutDiv = styled.div`

`
function About(){
    // 내용 나오게함
    const [index, setIndex] = useState(0);
    // 제일 상단 box 이미지를 다르게 만들어줌
    const [activeIndex, setActiveIndex] = useState(0);
    const handleIndexChange = (newIndex) => {
        setIndex(newIndex);
        setActiveIndex(newIndex);
    };
    const place = [
        "FAQ",
        "대전",
        "공지사항",
    ]

    const content = [
        <Faq />,<Garden />, 
    ]
    const img = [
        질문,가든,  교통
    ]
    return(
        <GlampingroomContainer>
            <FacilitiesContainer>
            <FacilitiesC>
                        <FacilitiesCH>
                            About
                        </FacilitiesCH>
                        <FacilitiesCB>  
                            대전에 대한 모든 것!
                        </FacilitiesCB>
                        <FacilitiesCFB>
                            {place.map((content, index) =>(
                                <FacilitiesCFC activeIndex={activeIndex === index} key={index}  onClick={() => handleIndexChange(index)}>
                                    <Div>
                                        {content}
                                    </Div>
                                    {activeIndex === index && <Imgcontainer src={img[index]}/>}
                                </FacilitiesCFC>
                                
                            ))}
                        </FacilitiesCFB>
                    </FacilitiesC>
                    <Imgcontainer src={투어}/>
            </FacilitiesContainer>
            <Glampingroomtopwrap>
                {place[index]}
            </Glampingroomtopwrap>
            {content[index]}
        </GlampingroomContainer>
    )
}

export default About
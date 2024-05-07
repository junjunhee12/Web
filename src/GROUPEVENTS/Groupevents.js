import { Div, FacilitiesC, FacilitiesCB, FacilitiesCF, FacilitiesCFC, FacilitiesCH, FacilitiesContainer, Imgcontainer } from "../Facilities/Facilities"
import Glampingroom, { GlampingroomContainer, Glampingroomtopwrap, H3, P } from "../Room/Glamping"
import 이미지 from "../assets/이미지.jpg"
import 그룹 from "../assets/그룹.jpg"
import 회의실2 from "../assets/회의실2.jpg"
import 웨딩1 from "../assets/웨딩1.jpg"
import 공연 from "../assets/공연.jpg"
import styled from "styled-components"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // 스타일 시트를 가져옵니다.
import { useState } from "react"
import Guide from "../Guide/Guide"
import Workshop from "./Workshop"
import Wedding from "./Wedding"
export const FacilitiesCFB = styled(FacilitiesCF)`
    justify-content:center;
    gap: 1rem;
`

function Groupevents(){
    const [index, setIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const handleIndexChange = (newIndex) => {
        setIndex(newIndex);
        setActiveIndex(newIndex);
    };
    const content = [
        "기업연수/워크샵",
        "웨딩/가족행사",
        "웰니스 프로그램",
        "공연"
    ]

    const div = [
        <Workshop />, <Wedding />
    ]
    
    const img = [
        회의실2, 웨딩1, 이미지, 공연
    ]
    return(
        <GlampingroomContainer>
            <FacilitiesContainer>
                    
                    <FacilitiesC>
                        <FacilitiesCH>
                            Group Events
                        </FacilitiesCH>
                        <FacilitiesCB>  
                            로미지안 가든의 특별한 이벤트를 통해 함께하는 사람들과 즐거운 시간을 보내세요 
                        </FacilitiesCB>
                        <FacilitiesCFB>
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
                        </FacilitiesCFB>
                    </FacilitiesC>
                    <Imgcontainer src={그룹}/>
                </FacilitiesContainer>
                {/* 끝 ------------------------------ */}

                {/* 기업연수 / 워크샵시작 */}
                <Glampingroomtopwrap>
                    {content[index]}
                </Glampingroomtopwrap>
                {/*  기업연수 / 워크샵끝 */}

                {/* 이미지와 내용 시작 */}
                {div[index]}
                {/* 이미지와 내용 끝 */}


        </GlampingroomContainer>
    )
}

export default Groupevents
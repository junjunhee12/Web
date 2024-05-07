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
import Time from "./Time"

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
        "로미지안 가든",
        "운영시간",
        "교통",
        "뉴스",
        "주변관광",
        "공지사항",
        "FAQ",
    ]

    const content = [
        <Garden />, <Time />
    ]
    const img = [
        가든, 요금, 교통,가든, 요금, 교통,질문
    ]
    return(
        <GlampingroomContainer>
            <FacilitiesContainer>
            <FacilitiesC>
                        <FacilitiesCH>
                            About
                        </FacilitiesCH>
                        <FacilitiesCB>  
                            로미지안 가든은 문화체육관광부와 한국관광공사가 지정한 ‘추천 웰니스관광지’입니다.
                        </FacilitiesCB>
                        <FacilitiesCFB>
                            {/* <FacilitiesCFC>
                                <Div>
                                    로미지안 가든
                                </Div>
                                <Imgcontainer src={가이드}/>
                            </FacilitiesCFC>
                            <FacilitiesCFC>
                                <Div>
                                    운영시간/요금
                                </Div>
                            </FacilitiesCFC>
                            <FacilitiesCFC>
                                <Div>
                                    교통
                                </Div>
                            </FacilitiesCFC>
                            <FacilitiesCFC>
                                <Div>
                                    뉴스
                                </Div>
                            </FacilitiesCFC>
                            <FacilitiesCFC>
                                <Div>
                                    주변관광
                                </Div>
                            </FacilitiesCFC>
                            <FacilitiesCFC>
                                <Div>
                                    공지사항
                                </Div>
                            </FacilitiesCFC>
                            <FacilitiesCFC>
                                <Div>
                                    FAQ
                                </Div>
                            </FacilitiesCFC> */}
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
            {/* <AboutbodyContainer>
                <Aboutbody>
                    <Aboutbodyleft>
                        <AboutH3>
                            자연을 통해 참된 나를 찾는 곳,<br></br>
                            치유와 성찰의 숲<br></br>
                            로미지안 가든
                        </AboutH3>
                        <AboutDivContainer>
                            <AboutDiv>
                                로미지안 가든은 강원특별자치도 정선의 진산인 깨달음의 산,<br></br>
                                가리왕산 화봉에 위치한 약 10만평 규모로 조성된 치유와 성찰의 숲입니다.<br></br>
                                이곳은 사랑하는 아내 (로미)를 위해 남편 (지안)이 직접 가꾼 특별한 정원으로<br></br>
                                아내에 대한 애정만큼 나무 한 그루, 돌멩이 하나도 소중히 여기다 보니 무려 10년이라는<br></br>
                                세월이 걸려 설립하게 되었습니다.
                            </AboutDiv>
                            <AboutDiv>
                            치유와 성찰의 숲이라는 타이틀에 걸맞게 23개의 힐링 명상 테마 스폿과 몰입 걷기 명상에 최적화된 7개의<br></br>
                            깨달음의 a'ART 트레킹 코스가 마련되어 있습니다. 또한 생명의 소리길, 나를 너머 나를 찾아가는 순례길,<br></br>
                            심언사 연길 등 다양한 트레킹 코스를 통해 숲길을 걸으며 조용히 사색할 수 있는 공간으로 조성되어<br></br>
                            있습니다.
                            </AboutDiv>
                            <AboutDiv>
                                로미지안 가든은 강원특별자치도 정선의 진산인 깨달음의 산,<br></br>
                                가리왕산 화봉에 위치한 약 10만평 규모로 조성된 치유와 성찰의 숲입니다.<br></br>
                                이곳은 사랑하는 아내 (로미)를 위해 남편 (지안)이 직접 가꾼 특별한 정원으로<br></br>
                                아내에 대한 애정만큼 나무 한 그루, 돌멩이 하나도 소중히 여기다 보니 무려 10년이라는<br></br>
                                세월이 걸려 설립하게 되었습니다.
                            </AboutDiv>
                            <AboutDiv>
                                로미지안 가든은 강원특별자치도 정선의 진산인 깨달음의 산,<br></br>
                                가리왕산 화봉에 위치한 약 10만평 규모로 조성된 치유와 성찰의 숲입니다.<br></br>
                                이곳은 사랑하는 아내 (로미)를 위해 남편 (지안)이 직접 가꾼 특별한 정원으로<br></br>
                                아내에 대한 애정만큼 나무 한 그루, 돌멩이 하나도 소중히 여기다 보니 무려 10년이라는<br></br>
                                세월이 걸려 설립하게 되었습니다.
                            </AboutDiv>
                            <AboutDiv>
                                로미지안 가든은 강원특별자치도 정선의 진산인 깨달음의 산,<br></br>
                                가리왕산 화봉에 위치한 약 10만평 규모로 조성된 치유와 성찰의 숲입니다.<br></br>
                                이곳은 사랑하는 아내 (로미)를 위해 남편 (지안)이 직접 가꾼 특별한 정원으로<br></br>
                                아내에 대한 애정만큼 나무 한 그루, 돌멩이 하나도 소중히 여기다 보니 무려 10년이라는<br></br>
                                세월이 걸려 설립하게 되었습니다.
                            </AboutDiv>
                        </AboutDivContainer>
                        <AboutleftFoot>
                            <AboutleftFootBox>
                                OOO관광부
                            </AboutleftFootBox>
                            <AboutleftFootBox>
                                OOO공사
                            </AboutleftFootBox>
                            <AboutleftFootBox>
                                OO OOO 관광지
                            </AboutleftFootBox>
                        </AboutleftFoot>
                    </Aboutbodyleft>
                    <Aboutbodyright>
                        <AboutbodyrightImg src={Glamping}></AboutbodyrightImg>
                    </Aboutbodyright>
                </Aboutbody>
            </AboutbodyContainer> */}
            {content[index]}
        </GlampingroomContainer>
    )
}

export default About
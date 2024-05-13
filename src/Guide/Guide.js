import { Div, FacilitiesC, FacilitiesCB, FacilitiesCFC, FacilitiesCH, FacilitiesContainer, Imgcontainer } from "../Facilities/Facilities"
import { FacilitiesCFB } from "../GROUPEVENTS/Groupevents"
import { GlampingroomContainer, Glampingroomtopwrap } from "../Room/Glamping"
import 투어 from "../assets/투어.jpg"
import 가이드 from "../assets/가이드.jpg"
import sky1 from "../assets/sky1.jpg"
import Glamping from "../assets/글램핑.jpg"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react"
const TourDiv = styled(Div)`
    padding: 1rem 0;
    position: static;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    margin-top: 100px;
`
const Bodycontainer = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: blueviolet; */
`

const Imgcontainer1 = styled.div`
    width: 100%;
    max-width: 1260px;
    height: 100vh;
    background-color: yellowgreen;
    margin: 0 auto;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Imgcontainer1wrap = styled.div`
    width: 100%;
    max-width: 1260px;
    margin: 0 auto;
    height: 504px;
    /* background-color: dodgerblue; */
    display: flex;
    border-bottom: 1px solid black;
    align-items: center;
`
const Imgcontainer1wrapbox = styled.div`
    width: 100%;
    max-width: 1260px;
    margin: 0 auto;
    height: 60%;
    /* background-color: gray; */
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    overflow-y: scroll;
`
const Imgcontainer1wrapcontent = styled.div`
    width: 292px;
    height: 58px;
    background-color: #B1B1C0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const FootContainer = styled.div`
    width: 100%;
    max-width: 1260px;
    height: 600px;
    /* background-color: yellow; */
    border-bottom: 1px solid black;
    margin: 0 auto;
    margin-bottom: 170px;
    display: flex;

`

const Footleft = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    /* border: 1px solid yellow; */
    .head{
        font-family: "Noto Serif KR";
        font-size: 28px;
        color: #000;
    }
    .body{
        font-family: "Noto Serif KR";
        font-size: 48px;
        line-height: 70px;
        color: #000;
        margin: 30px 0;
    }
    .foot{
        font-size: 17px;
    }
`

const Footright = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    align-items: center;
`
const Footrightimg = styled.img`
    width: 617px;
    height: 460px;
    object-fit: cover;
    background-color: blue;
`


function Guide(){
    const [index, setIndex] = useState(0);

    const handleIndexChange = (newIndex) => {
        setIndex(newIndex);
    };

    // const content1 = [
    //     "알프호른 동상",
    //     "수국 정원",
    //     "카르페디엠 클럽",
    //     "햇빛 치유장",
    // ];
    const content2 = [
        "“국화 축제가 열리는 유림공원”",
        "“씨족의 유래와 역사”",
        "“마음이 먹먹해 지는 곳”",
        "“도심의 힐링 명소”",
        // 다른 장소들 추가
    ];
    const content3 = [
        "관광을 목적으로 한다면 10월과 4월에 방문하는 것이 좋다. 매년 10월에는 지역에서 유명한 유림공원 국화축제가 열리며, 4월 경에는 화훼원에 튤립을 어마어마하게 심기 때문이다.",
        "뿌리공원로 79에 있는 대중 공원으로 씨족의 유래와 역사를 주제로 꾸며져 있다. 대전광역시 근교의 오래된 물놀이 유원지를 다듬어 1997년 11월 뿌리공원이다.",
        "국가를 위해 희생하신 분들을 모시는 성지 입니다. 현재의 우리가 있을 수 있게 해주신 분들이고 우리가 소중히 기억해야 할 국가유공자입니다. 추모와 감사를 표합니다.",
        "정부대전청사와 엑스포관학공원으로 이어지는 녹지축의 중앙에 위치한 한밭수목원은 전국 최대 규모의 도심 속 인공수목원이다. ",
        // 다른 장소들 추가
    ];
    const img = [
        투어, 가이드, sky1, Glamping
    ]
    const places = [
        "유림공원",
        "뿌리공원",
        "국립대전현충원",
        "한밭수목원",
        "스카이로드",
        "궁동 로데오 거리",
        "대동하늘공원",
        "목척교",
        "회덕동춘당",
        "대흥동 문화예술의거리",
        "우리들공원",
        "대응동 카페거리",
        "대전엑스포시민광장",
        "대전아쿠아리움",
        "티놀자 애니멀파크",
        "준비 중..",
        "준비 중..",
        "준비 중..",
        "준비 중..",
    ];
    return(
        <GlampingroomContainer>
            <FacilitiesContainer>
            <FacilitiesC>
                        <FacilitiesCH>
                            대전 즐길거리
                        </FacilitiesCH>
                        <FacilitiesCB>  
                            대전에서의 즐길거리들을 한꺼번에 보여주는 곳
                        </FacilitiesCB>
                        <FacilitiesCFB>
                            <FacilitiesCFC>
                                <Div>
                                    대전 즐길거리
                                </Div>
                                <Imgcontainer src={가이드}/>
                            </FacilitiesCFC>
                            
                            
                        </FacilitiesCFB>
                    </FacilitiesC>
                    <Imgcontainer src={투어}/>
            </FacilitiesContainer>
            {/* 기업연수 / 워크샵시작 */}
                <Glampingroomtopwrap>
                    대전 즐길거리들
                </Glampingroomtopwrap>
                <TourDiv className="div">
                    대전에서 즐길수 있는 장소 소개입니다.
                </TourDiv>
                {/*  기업연수 / 워크샵끝 */}

                <Bodycontainer>
                    <Imgcontainer1>
                        <Img src={투어} />
                    </Imgcontainer1>
                    <Imgcontainer1wrap>
                        <Imgcontainer1wrapbox>
                            {places.map((place, index) => (
                                <Link key={index}  onClick={() => handleIndexChange(index)}>
                                    <Imgcontainer1wrapcontent>{place}</Imgcontainer1wrapcontent>
                                </Link>
                            ))}
                        </Imgcontainer1wrapbox>
                    </Imgcontainer1wrap>
                </Bodycontainer>
                <FootContainer>
                <Footleft>
                    <div className="head">{places[index]}</div>

                    <div className="body">{content2[index]}</div>
                    <div className="foot">{content3[index]}</div>
                </Footleft>
                <Footright>
                    <Footrightimg src={img[index]}/>
                </Footright>
                </FootContainer>
        </GlampingroomContainer>
    )
}

export default Guide
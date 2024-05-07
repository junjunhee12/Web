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
        "“자연과 가장 가까운 소리”",
        "“애나벨 수국 정원”",
        "“불멍 핫 스폿”",
        "“나만의 햇빛 명상이 필요하다면.. 바로 이 곳”",
        // 다른 장소들 추가
    ];
    const content3 = [
        "알프호른은 로미지안 가든이 알프스 산 독일 북쪽 지역의 킴가우(Chiemgau)라는 산을 닮아 붙여진 ‘정선의 알프스’라는 명칭에 걸맞게 이국적인 인생컷을 담아 가실 수 있는 로미지안 가든의 대표적인 포토 스폿 중 한 곳입니다. 가리왕산의 청정 자연과 함께 자연과 가장 가까운 소리를 들으며 몸과 마음을 정화해 보세요",
        "미국 애나벨 수국은 인위적으로 육종된 원예용 정원식물과는 달리 자연발생적인 변이를 거쳐 새로운 개체로 변모한 품종으로 6~8월 로미지안 가든 수국 정원에 흰색, 핑크색 꽃 무리들이 만개합니다.부케 같은 수국과 함께 얼굴이 작아 보이는 득템 사진을 원한다면 로미지안 가든 수국정원에서 애나벨 수국을 만나보세요.",
        "로미지안 가든의 야외 불멍이 가능한 곳! 단체 불멍하면서 다양한 즐길 거리와 함께 지금 이 순간을 즐겨보세요!",
        "햇빛은 자연이 주는 치유 에너지로 뼈 건강, 면역 기능 등 건강한 생활을 하는데 필수적인 비타민 D 의 풍부한 원천입니다. 로미지안 가든의 햇빛 치유장은 햇빛 받기 가장 좋은 장소로 자연 경관에 둘러 싸여 스트레스를 줄이고 불안을 완화하여 정신 건강을 향상시키는데 도움을 줍니다.",
        // 다른 장소들 추가
    ];
    const img = [
        투어, 가이드, sky1, Glamping
    ]
    const places = [
        "유림공원",
        "스카이로드",
        "대전엑스포시민광장",
        "국립대전현충원",
        "뿌리공원",
        "궁동 로데오 거리",
        "대동하늘공원",
        "목척교",
        "회덕동춘당",
        "대흥동 문화예술의거리",
        "우리들공원",
        "대응동 카페거리",
        "대전 오월드",
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
                            Tour Guide
                        </FacilitiesCH>
                        <FacilitiesCB>  
                            가리왕산의 우아한 곡선과 잔잔한 감동을 주는 풍경의 뷰를 감상하며 여행의 하루를 특별하게 마무리하세요.  
                        </FacilitiesCB>
                        <FacilitiesCFB>
                            <FacilitiesCFC>
                                <Div>
                                    테마도 안내도
                                </Div>
                                <Imgcontainer src={가이드}/>
                            </FacilitiesCFC>
                            
                            
                        </FacilitiesCFB>
                    </FacilitiesC>
                    <Imgcontainer src={투어}/>
            </FacilitiesContainer>
            {/* 기업연수 / 워크샵시작 */}
                <Glampingroomtopwrap>
                    테마도 안내도
                </Glampingroomtopwrap>
                <TourDiv className="div">
                    로미지안가든의 주요 테마 장소 소개입니다.
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
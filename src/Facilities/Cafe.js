import styled, {button} from "styled-components"
import 카페아라미스 from "../assets/카페아라미스.jpg"
const Cafecontainer = styled.div`
    width: 100%;
    height: 100vh;
    /* background-color: yellow; */
    margin-top: 170px;
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
        /* top: ; */
        bottom: 0;
        right: 0;
        width: 100%;
        height: 70%;
        background-color: #F3F3F3;
        z-index: -1;
    }
    border-bottom: 1px solid #CCCCCC;
    
`
const CafeImgC = styled.div`
    width: 100%;
    max-width: 1600px;
    height: 540px;
    margin: 0 auto;
`
const CafeImg = styled.img`
    width: 100%;
    height: 100%;
    
`
const OverviewC = styled.div`
    width: 100%;
    max-width: 1600px;
    height: 413px;
    /* background-color: green; */
    margin: 0 auto;
    /* padding: 0 50px; */
    display: flex;
`

const OverviewCleft = styled.div`
    width: 100%;
    max-width: 790px;
    height: 100%;
    /* padding-left: 100px; */
    margin-left: 50px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* justify-content: space-evenly; */
    gap: 2rem;
    border-right: 1px solid #CCCCCC;
`
const OverviewCleftc1 = styled.div`
    width: 100%;
    /* background-color: yellow; */
    font-size: 16px;
    font-family: "Lora";
`
const OverviewCleftc2 = styled.div`
    width: 100%;
    /* background-color: pink; */
    font-family: "Noto Serif KR";
    font-size: 28px;
    
`
const OverviewCleftc3 = styled.div`
    width: 100%;
    /* background-color: gray; */
    font-family: "Pretendard";
    font-size: 16px;
    color: #777;
`
const OverviewCright = styled.div`
    width: 100%;
    max-width: 790px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-right: 50px;
`

const OverviewCrightc = styled.div`
    width: 100%;
    height: 55px;
    /* background-color: blue; */
    display: flex;
    /* margin-right: 50px; */
    /* justify-content: center; */
    /* text-align: center; */
    &.border1{
        border-bottom: 1px solid #CCCCCC;
    }
    &.border2{
        border-top: 1px solid #CCCCCC;
    }
`
const OverviewCrightcc1 = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: red; */
    padding-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: start;
`
const OverviewCrightcc2 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    /* background-color: dodgerblue; */
`
function Cafe(){
    return(
        <>
            <Cafecontainer>
                    <CafeImgC>
                        <CafeImg src={카페아라미스}/>
                    </CafeImgC>
                    <OverviewC>
                        <OverviewCleft>
                            <OverviewCleftc1>
                                Overview
                            </OverviewCleftc1>
                            <OverviewCleftc2>
                                스위스 샬레 풍의 넓고 아늑한<br></br>
                                힐링 카페&레스토랑
                            </OverviewCleftc2>
                            <OverviewCleftc3>
                                아침 햇살이 가장 먼저 비치는 어도원길에서 로미지안을 찾는 이들을 반기는 진한 커피향과 빵굽는 냄새<br></br>
                                카페 아라미스는 최고급 블랜딩 커피와 정선의 신선한 재료로 만든 샌드위치, 브런치 메누를 제공합니다.<br></br>
                                은은한 클래식 음악과 함께 책장에 꽃힌 책들을 꺼내 읽으며 자연속에서 여유로움을 느껴보시길<br></br>
                                바랍니다.
                            </OverviewCleftc3>
                        </OverviewCleft>
                        <OverviewCright>
                            <OverviewCrightc className="border1">
                                <OverviewCrightcc1>
                                    Local Situation
                                </OverviewCrightcc1>
                                <OverviewCrightcc2>
                                    강원 정선군 북평면
                                    어도원길 12, 로미지안
                                    가든
                                </OverviewCrightcc2>
                            </OverviewCrightc>
                            <OverviewCrightc>
                                <OverviewCrightcc1>
                                    Operating Hours
                                </OverviewCrightcc1>
                                <OverviewCrightcc2>
                                    09:00 ~ 18:00 (마감 주문 17시)
                                </OverviewCrightcc2>
                            </OverviewCrightc>
                            <OverviewCrightc className="border2">
                                <OverviewCrightcc1>
                                    Tel
                                </OverviewCrightcc1>
                                <OverviewCrightcc2>
                                    000-000-0000
                                </OverviewCrightcc2>
                            </OverviewCrightc>
                        </OverviewCright>
                    </OverviewC>
                </Cafecontainer>
                
        </>
    )
}

export default Cafe
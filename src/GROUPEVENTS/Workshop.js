import { Splide, SplideSlide } from "@splidejs/react-splide"
import 워크샵1 from "../assets/워크샵1.jpg"
import 워크샵2 from "../assets/워크샵2.jpg"
import 워크샵3 from "../assets/워크샵3.jpg"
import styled from "styled-components"
export const GroupContainer = styled.div`
    width: 100%;
    height: 100vh;

`
export const Groupwrap = styled(GroupContainer)`

    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    padding: 170px 0;
    
`

export const Groupwrapleft = styled.div`
    width: 770px;
    height: 100%;
    /* background-color: yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Groupwrapleftbox = styled.div`
    width: 480px;
    height: 303px;
    /* background-color: green; */
    
`
export const Groupwrapleftboxwrap1 = styled.div`
    width: 100%;
    /* height: 100%; */
    /* background-color: white; */
    height: 197px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
`
export const Groupwrapleftboxwrap2 = styled.div`
    width: 100%;
    /* background-color: pink; */
    height: 106px;
    border-bottom: 1px solid black;
    display: flex;
    /* justify-content: ; */
    align-items: center;
    font-size: 17px;
    font-family: "Pretendard";
`
export const Groupwrapright = styled.div`
    width: 990px;
    height: 100%;
    /* background-color: gray; */
`
export const GroupwraprightImg = styled.img`
    width: 990px;
    height: 700px;
    /* background-color: black; */
`
export const GroupP = styled.div`
    /* justify-content: start; */
    text-align: start;
    font-size: 15px;
    /* padding: 0; */
    font-weight: normal;
`

export const GroupH3 = styled.div`
    font-size: 34px;
    font-weight: 400;
`
function Workshop(){
    return(
        <>
            <Groupwrap>
                    <Groupwrapleft>
                        <Groupwrapleftbox>
                            <Groupwrapleftboxwrap1>
                                <GroupH3>문의내용</GroupH3>
                                <GroupP>
                                    로미지안 가든은 기업연수 / 워크샵을 위한 단체 대관이 가능합니다.<br></br>
                                    프로그램 접수 및 관련 문의는 아래 담당 부서로 연락 주시기 바랍니다.
                                </GroupP>
                            </Groupwrapleftboxwrap1>
                            <Groupwrapleftboxwrap2>
                                Tel : 000-0000-0000
                            </Groupwrapleftboxwrap2>
                        </Groupwrapleftbox>
                    </Groupwrapleft>
                    <Groupwrapright>
                        <Splide>
                            <SplideSlide>
                                <GroupwraprightImg src={워크샵1}/>
                            </SplideSlide>
                            <SplideSlide>
                                <GroupwraprightImg src={워크샵2}/>
                            </SplideSlide>
                            <SplideSlide>
                                <GroupwraprightImg src={워크샵3}/>
                            </SplideSlide>
                        </Splide>

                    </Groupwrapright>
                </Groupwrap>
        </>
    )
}

export default Workshop
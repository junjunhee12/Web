import { Splide, SplideSlide } from "@splidejs/react-splide"
import 웨딩1 from "../assets/웨딩1.jpg"
import 웨딩2 from "../assets/웨딩2.jpg"
import 웨딩3 from "../assets/웨딩3.jpg"
import styled from "styled-components"
import { GroupH3, GroupP, Groupwrap, Groupwrapleft, Groupwrapleftbox, Groupwrapleftboxwrap1, Groupwrapleftboxwrap2, Groupwrapright, GroupwraprightImg } from "./Workshop"
export const GroupContainer = styled.div`
    width: 100%;
    height: 100vh;

`
function Wedding(){
    return(
        <>
            <Groupwrap>
                    <Groupwrapleft>
                        <Groupwrapleftbox>
                            <Groupwrapleftboxwrap1>
                                <GroupH3>문의내용</GroupH3>
                                <GroupP>
                                로미지안 가든은 웨딩 / 가족행사를 위한 넓은 홀이 마련되어 있습니다.<br></br>
                                프로그램 접수 및 문의는 연락처를 통해 남겨주세요.
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
                                <GroupwraprightImg src={웨딩1}/>
                            </SplideSlide>
                            <SplideSlide>
                                <GroupwraprightImg src={웨딩2}/>
                            </SplideSlide>
                            <SplideSlide>
                                <GroupwraprightImg src={웨딩3}/>
                            </SplideSlide>
                        </Splide>

                    </Groupwrapright>
                </Groupwrap>
        </>
    )
}

export default Wedding
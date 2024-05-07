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
                                <GroupH3>결혼식장2</GroupH3>
                                <GroupP>
                                인생웨딩을 원하시는 모든 분들은 아래 번호로 전화주시길 바랍니다.
                               
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
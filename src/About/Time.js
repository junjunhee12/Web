import { AboutbodyContainer } from "./About";
import styled, {button} from "styled-components"
import 운영시간 from "../assets/운영시간.jpg"
const Containerwrap = styled.div`
    width: 100%;
    max-width: 1580px;
    height: 100vh;
    /* background-color: yellow; */
    margin: 0 auto;
`
const Wrapbox = styled.div`
    /* background-color: green; */
    font-family: "Noto Serif KR";
        font-size: 34px;
        color: #000;
        text-align: center;
`
const Imgwrap = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    /* background-color: dodgerblue; */
    padding-top: 150px;
    div{
        width: 100%;
        text-align: center;
        font-family: "Pretendard";
        font-size: 54px;
        color: #fff;
        margin: 20px 0;
        font-weight: 400;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
function Time(){
    return(
        <>
            <AboutbodyContainer>
                <Containerwrap>
                    <Wrapbox>
                    치유와 성찰의 숲, 로미지안 가든 입니다
                    </Wrapbox>
                    <Imgwrap>
                        <Img src={운영시간}/>
                        <div>운영시간 : 09:00 ~ 17:00 (연중무휴)</div>
                    </Imgwrap>
                </Containerwrap>
            </AboutbodyContainer>
        </>
    )
}

export default Time
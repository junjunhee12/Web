import styled from "styled-components"
import 방1 from "../assets/방1.jpg"
import 방2 from "../assets/방2.jpg"
import 방3 from "../assets/방3.png"
import 호랑이 from "../assets/호랑이.png"
import { P } from "./Glamping"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
const Div = styled.div`
    width: 100%;
    height: 100%;
    
    /* background-color: red; */
`
const Div1 = styled.div`
    width: 100%;
    height: 100vh;
    /* background-color: red; */
    display: flex;
    /* flex-direction: row; */
    /* padding: 3rem; */
    padding: 5rem 0 5rem 5rem;
    
    &.raw-re{
        flex-direction: row-reverse;
        padding: 5rem 5rem 5rem 0;
    }
`
const Div1content = styled.div`
    width: 50%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
`
const Div1contentewrap = styled.div`
    width: 620px;
    height: 600px;
    position: relative;
    /* background-color: yellow; */
`
// contenttopheigjt
const DivcontentTopbox = styled.div`
    width:100%;
    height: 30%;
    /* position: relative; */
`
const DivcontentTop = styled.div`
    width:100%;
    height: 100%;
    &.contentTop{
        position: absolute;
        animation: ${(props) => (props.contenttopheigjt || props.contenttopheigjt3 ? "content 1s linear forwards" : "contentback 1s linear forwards")};
        
        @keyframes content {
            0%{
                left: -100px;
                opacity: 0;
            }100%{
                left: 0;
                opacity: 1;
            }
        }
        @keyframes contentback {
            0%{
                left: 0px;
                opacity: 1;
            }100%{
                left: -100px;
                opacity: 0;
            }
        }
        
    }

    &.scroll2{
        position: absolute;
        animation: ${(props) => (props.contenttopheigjt2? "scroll2 1s linear forwards" : "scroll2back 1s linear forwards")};
        
        @keyframes scroll2 {
            0%{
                right: -100px;
                opacity: 0;
            }100%{
                right: 0;
                opacity: 1;
            }
        }
        @keyframes scroll2back {
            0%{
                right: 0px;
                opacity: 1;
            }100%{
                right: -100px;
                opacity: 0;
            }
        }
    }
    /* &.scroll2{
        position: absolute;
        right: -100px;
    } */
`
const DivcontentButtom = styled.div`
    width: 100%;
    height: 60%;
    background-color: white;
    position: relative;
`
const DivcontentButtombox = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    &.contentTop{
        position: absolute;
        animation: ${(props) => (props.contentbuttomheigjt || props.contentbuttomheigjt3 ? "buttomcontent 1s linear forwards" : "buttomcontentback 1s linear forwards")};
        /* bottom: -100px; */
        @keyframes buttomcontent {
            0%{
                bottom: -100px;
                opacity: 0;
            }100%{
                bottom: 0;
                opacity: 1;
            }
        }
        @keyframes buttomcontentback {
            0%{
                bottom: 0px;
                opacity: 1;
            }100%{
                bottom: -100px;
                opacity: 0;
            }
        }
    }
    &.scroll2{
        position: absolute;
        animation: ${(props) => (props.contentbuttomheigjt2 ? "buttomcontent 1s linear forwards" : "buttomcontentback 1s linear forwards")};
        /* bottom: -100px; */
        @keyframes buttomcontent {
            0%{
                bottom: -100px;
                opacity: 0;
            }100%{
                bottom: 0;
                opacity: 1;
            }
        }
        @keyframes buttomcontentback {
            0%{
                bottom: 0px;
                opacity: 1;
            }100%{
                bottom: -100px;
                opacity: 0;
            }
        }
    }
`
const DivcontentButtomTop = styled.div`
    width:100% ;
    height: 55px;
    /* background-color: dodgerblue; */
    display: flex;
    justify-content: center;
    gap: 1rem;
    & > .the{
            width: 300px;
            height: 55px;
            /* border: 1px solid black; */
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #B1B1C0;
        }
    & > .color{
        background-color: black;
        color: white;
    }
`
const DivcontentButtomButtom = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
`
const DivcontentButtomButtomleft = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: calc(100% - 55px);
    border-right: 1px solid black;
    
    /* background-color: orange; */
`
const DivcontentButtomButtomleftcontent = styled.div`
    width: 275px;
    height: 45px;
    /* background-color: pink; */
`
const DivcontentButtomButtomleftbox = styled.div`
    font-size: 15px;
    font-weight: normal;
    &.we{
        font-size: 18px;
    }
`
const DivcontentButtomButtomright = styled.div`
    width: 100%;
    height: calc(100% - 55px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`
// const DivcontentButtomButtomrightbox = styled.div`

//     font-weight: normal;
// `


const H4box = styled.h4`
    width: 100%;
    height: 300px;
    position: relative;
`
const H4 = styled.h4`
    font-size: 58px;
    font-family: "Lora";
    font-weight: 400;
    &.center{
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 170px;
        position: absolute;
        animation: ${(props) => (props.h1height ? "h1scroll 1s linear forwards" : "h1scrollback 1s linear forwards")};
        /* bottom: -100px; */
        @keyframes h1scroll {
            0%{
                bottom: -100px;
                opacity: 0;
            }100%{
                bottom: 0;
                opacity: 1;
            }
        }
        @keyframes h1scrollback {
            0%{
                bottom: 0px;
                opacity: 1;
            }100%{
                bottom: -100px;
                opacity: 0;
            }
        }
    }
`

const Pupdate = styled(P)`
    display: flex;
    justify-content: start;
    text-align: left;
    font-size: 16px;
`
const Div1coentent2box = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
`
const Div1coentent2 = styled.img`
    width: 100%;
    height: 100%;
    &{
        position: absolute;
    animation: ${(props) => (props.imgheight1 || props.imgheight3 || props.imgheight2?"imgscroll 1s linear forwards" : "imgscrollback 1s linear forwards")};
    @keyframes imgscroll {
            0%{
                bottom: -300px;
                opacity: 0;
            }100%{
                bottom: 0;
                opacity: 1;
            }
        }
        @keyframes imgscrollback {
            0%{
                bottom: 0px;
                opacity: 1;
            }100%{
                opacity: 0;
            }
        }
    }
    &.scroll2{
        position: absolute;
        animation: ${(props) => (props.imgheight2?"imgscroll 1s linear forwards" : "imgscrollback 1s linear forwards")};
        @keyframes imgscroll {
                0%{
                    bottom: -300px;
                    opacity: 0;
                }100%{
                    bottom: 0;
                    opacity: 1;
                }
            }
            @keyframes imgscrollback {
                0%{
                    bottom: 0px;
                    opacity: 1;
                }100%{
                    opacity: 0;
                }
            }
    }
`
const TigerImgbox = styled.div`
    width: 24px;
    height: 24px;
    background-color: white;
    position: absolute;
    right: 0;
    /* z-index: 99; */
`

const TigerImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

function Skyroom(){
    const [h1height, setH1height] = useState(false)
    const [imgheight1, setImgheight1] = useState(false)
    const [contenttopheigjt, setContenttopheight] = useState(false)
    const [contentbuttomheigjt, setContentbuttomheight] = useState(false)
    const [imgheight2, setImgheight2] = useState(false)
    const [contenttopheigjt2, setContenttopheight2] = useState(false)
    const [contentbuttomheigjt2, setContentbuttomheight2] = useState(false)
    const [imgheight3, setImgheight3] = useState(false)
    const [contenttopheigjt3, setContenttopheight3] = useState(false)
    const [contentbuttomheigjt3, setContentbuttomheight3] = useState(false)
    // const [imgheight3, setImgheight3] = useState(false)
    useEffect(()=>{
        const scroll = () =>{
                const h1scroll = window.scrollY
                const imgscroll = window.scrollY
                const imgscroll2 = window.scrollY
                const imgscroll3 = window.scrollY
                const contentscroll = window.scrollY
                const contentscroll2 = window.scrollY
                const contentscroll3 = window.scrollY
                const contentbuttomscroll = window.scrollY
                const contentbuttomscroll2 = window.scrollY
                const contentbuttomscroll3 = window.scrollY
                console.log(scroll);
                if(h1scroll > 250){
                    setH1height(true)
                }else if(h1scroll < 250){
                    setH1height(false)
                }

                if(imgscroll > 630){
                    setImgheight1(true)
                }else if(imgscroll < 630){
                    setImgheight1(false)
                }

                if(contentscroll > 630){
                    setContenttopheight(true)
                }else if(contentscroll < 630){
                    setContenttopheight(false)
                }

                if(contentbuttomscroll > 900){
                    setContentbuttomheight(true)
                }else if(contentbuttomscroll < 900){
                    setContentbuttomheight(false)
                }
// ----------------------------------------------------------
                if(imgscroll3 > 2515){
                    setImgheight3(true)
                }else if(imgscroll3 < 2515){
                    setImgheight3(false)
                }

                if(contentscroll3 > 2515){
                    setContenttopheight3(true)
                }else if(contentscroll3 < 2515){
                    setContenttopheight3(false)
                }

                if(contentbuttomscroll3 > 2800){
                    setContentbuttomheight3(true)
                }else if(contentbuttomscroll3 < 2800){
                    setContentbuttomheight3(false)
                }
                // ========================================================

                if(imgscroll2 > 1500){
                    setImgheight2(true)
                }else if(imgscroll2 < 1500){
                    setImgheight2(false)
                }

                if(contentscroll2 > 1500){
                    setContenttopheight2(true)
                }else if(contentscroll2 < 1500){
                    setContenttopheight2(false)
                }

                if(contentbuttomscroll2 > 1800){
                    setContentbuttomheight2(true)
                }else if(contentbuttomscroll2 < 1800){
                    setContentbuttomheight2(false)
                }
            }
            window.addEventListener("scroll", scroll);
                return () => {
                    window.removeEventListener("scroll", scroll);
                };
    },[])
    return(
        <>
            <Div>
                <H4box>
                    <H4 h1height={h1height} className="center">스카이하우스</H4>
                </H4box>
                <Div1>
                    <Div1content>
                        <Div1contentewrap>
                            <DivcontentTopbox >
                                <DivcontentTop contenttopheigjt={contenttopheigjt} className="contentTop">
                                <H4>Sky Hotel</H4>
                                <Pupdate>
                                    대전의 Sky호텔에서 아름다운 대전의 뷰를 감상혀며<br></br>
                                    여유롭고 편안한 휴식을 즐겨보세요
                                    
                                </Pupdate>
                            </DivcontentTop>
                            </DivcontentTopbox>
                            <DivcontentButtom>
                                <DivcontentButtombox className="contentTop" contentbuttomheigjt={contentbuttomheigjt}>
                                    <DivcontentButtomTop>
                                        <TigerImgbox>
                                            <TigerImg src={호랑이}/>
                                        </TigerImgbox>
                                    <Link className="the" to={""}>
                                        상세보기
                                    </Link>
                                    <Link className="the color" to={""}>
                                        호텔예약
                                    </Link>
                                </DivcontentButtomTop>
                                <DivcontentButtomButtom>
                                    <DivcontentButtomButtomleft>
                                        <DivcontentButtomButtomleftcontent>
                                            <DivcontentButtomButtomleftbox className="we">Location</DivcontentButtomButtomleftbox>
                                            <DivcontentButtomButtomleftbox>대전광역시 유성구 00동</DivcontentButtomButtomleftbox>
                                        </DivcontentButtomButtomleftcontent>
                                        <DivcontentButtomButtomleftcontent>
                                            <DivcontentButtomButtomleftbox className="we">Hotel / Size</DivcontentButtomButtomleftbox>
                                            <DivcontentButtomButtomleftbox>0000평 / 공원포함</DivcontentButtomButtomleftbox>
                                        </DivcontentButtomButtomleftcontent>
                                        <DivcontentButtomButtomleftcontent>
                                            <DivcontentButtomButtomleftbox className="we">Extra Beds</DivcontentButtomButtomleftbox>
                                            <DivcontentButtomButtomleftbox>가능</DivcontentButtomButtomleftbox>
                                        </DivcontentButtomButtomleftcontent>
                                    </DivcontentButtomButtomleft>
                                    <DivcontentButtomButtomright>
                                        <DivcontentButtomButtomleftcontent>
                                            <DivcontentButtomButtomleftbox className="we">Number of rooms</DivcontentButtomButtomleftbox>
                                            <DivcontentButtomButtomleftbox>0000객실 수</DivcontentButtomButtomleftbox>
                                        </DivcontentButtomButtomleftcontent>
                                        <DivcontentButtomButtomleftcontent>
                                            <DivcontentButtomButtomleftbox className="we">Parking</DivcontentButtomButtomleftbox>
                                            <DivcontentButtomButtomleftbox>0000대 여유</DivcontentButtomButtomleftbox>
                                        </DivcontentButtomButtomleftcontent>
                                        <DivcontentButtomButtomleftcontent>
                                            <DivcontentButtomButtomleftbox className="we">Average price</DivcontentButtomButtomleftbox>
                                            <DivcontentButtomButtomleftbox>00만원</DivcontentButtomButtomleftbox>
                                        </DivcontentButtomButtomleftcontent>
                                    </DivcontentButtomButtomright>
                                </DivcontentButtomButtom>
                                </DivcontentButtombox>
                                
                            </DivcontentButtom>
                        </Div1contentewrap>
                    </Div1content>
                    <Div1coentent2box>
                        <Div1coentent2 imgheight1={imgheight1} src={방2}>

                        </Div1coentent2>
                    </Div1coentent2box>
                    
                </Div1>
                <Div1 className="raw-re">
                    <Div1content>
                    <Div1contentewrap>
                        <DivcontentTopbox>
                            <DivcontentTop contenttopheigjt2={contenttopheigjt2} className="scroll2">
                                <H4>Clean Hotel</H4>
                                <Pupdate>
                                    백두산의 사계를 품은 테라스에서 아름다운 뷰를 감상하며<br></br>
                                    여유롭고 편안한 휴식을 즐겨보세요.
                                </Pupdate>
                            </DivcontentTop>
                        </DivcontentTopbox>
                            
                            <DivcontentButtom>
                                <DivcontentButtombox contentbuttomheigjt2={contentbuttomheigjt2} className="scroll2">
                                    <DivcontentButtomTop>
                                    <TigerImgbox>
                                            <TigerImg src={호랑이}/>
                                        </TigerImgbox>
                                    <Link className="the" to={""}>
                                        상세보기
                                    </Link>
                                    <Link className="the color" to={""}>
                                        호텔예약
                                    </Link>
                                </DivcontentButtomTop>
                                <DivcontentButtomButtom>
                                    <DivcontentButtomButtomleft>
                                        <DivcontentButtomButtomleftcontent>
                                            <DivcontentButtomButtomleftbox className="we">Location</DivcontentButtomButtomleftbox>
                                            <DivcontentButtomButtomleftbox>대전광역시 서구 000동</DivcontentButtomButtomleftbox>
                                        </DivcontentButtomButtomleftcontent>
                                        <DivcontentButtomButtomleftcontent>
                                            <DivcontentButtomButtomleftbox className="we">Size · Type</DivcontentButtomButtomleftbox>
                                            <DivcontentButtomButtomleftbox>16평형 / 원룸형태의 복층 구조</DivcontentButtomButtomleftbox>
                                        </DivcontentButtomButtomleftcontent>
                                        <DivcontentButtomButtomleftcontent>
                                            <DivcontentButtomButtomleftbox className="we">Extra Beds</DivcontentButtomButtomleftbox>
                                            <DivcontentButtomButtomleftbox>불가능</DivcontentButtomButtomleftbox>
                                        </DivcontentButtomButtomleftcontent>
                                    </DivcontentButtomButtomleft>
                                    <DivcontentButtomButtomright>
                                        <DivcontentButtomButtomleftcontent>
                                            <DivcontentButtomButtomleftbox className="we">Capacity</DivcontentButtomButtomleftbox>
                                            <DivcontentButtomButtomleftbox>15:00 - 11:00</DivcontentButtomButtomleftbox>
                                        </DivcontentButtomButtomleftcontent>
                                        <DivcontentButtomButtomleftcontent>
                                            <DivcontentButtomButtomleftbox className="we">Beds</DivcontentButtomButtomleftbox>
                                            <DivcontentButtomButtomleftbox>16평형 / 원룸형태의 복층 구조</DivcontentButtomButtomleftbox>
                                        </DivcontentButtomButtomleftcontent>
                                        <DivcontentButtomButtomleftcontent>
                                            <DivcontentButtomButtomleftbox className="we">Amenities</DivcontentButtomButtomleftbox>
                                            <DivcontentButtomButtomleftbox>블루투스 스피커, TV, 캐리어 거치대2개, 헤어드라이기, 샴푸 등</DivcontentButtomButtomleftbox>
                                        </DivcontentButtomButtomleftcontent>
                                    </DivcontentButtomButtomright>
                                </DivcontentButtomButtom>
                                </DivcontentButtombox>
                                
                            </DivcontentButtom>
                        </Div1contentewrap>
                    </Div1content>
                    <Div1coentent2box>
                        <Div1coentent2 imgheight2={imgheight2} className="scroll2" src={방1}>

                        </Div1coentent2>
                    </Div1coentent2box>
                </Div1>
                <Div1>
                    <Div1content>
                        <Div1contentewrap>
                            <DivcontentTopbox >
                                <DivcontentTop contenttopheigjt3={contenttopheigjt3} className="contentTop">
                                <H4>First Hotel</H4>
                                <Pupdate>
                                백두산의 사계를 품은 테라스에서 아름다운 뷰를 감상하며<br></br>
                                    여유롭고 편안한 휴식을 즐겨보세요.
                                </Pupdate>
                            </DivcontentTop>
                            </DivcontentTopbox>
                            <DivcontentButtom>
                                <DivcontentButtombox className="contentTop" contentbuttomheigjt3={contentbuttomheigjt3}>
                                    <DivcontentButtomTop>
                                    <TigerImgbox>
                                            <TigerImg src={호랑이}/>
                                        </TigerImgbox>
                                    <Link className="the" to={""}>
                                        상세보기
                                    </Link>
                                    <Link className="the color" to={""}>
                                        호텔예약
                                    </Link>
                                </DivcontentButtomTop>
                                <DivcontentButtomButtom>
                                    <DivcontentButtomButtomleft>
                                        <DivcontentButtomButtomleftcontent>
                                            <DivcontentButtomButtomleftbox className="we">Location</DivcontentButtomButtomleftbox>
                                            <DivcontentButtomButtomleftbox>대전광역시 동구 0000동</DivcontentButtomButtomleftbox>
                                        </DivcontentButtomButtomleftcontent>
                                        <DivcontentButtomButtomleftcontent>
                                            <DivcontentButtomButtomleftbox className="we">Size · Type</DivcontentButtomButtomleftbox>
                                            <DivcontentButtomButtomleftbox>16평형 / 원룸형태의 복층 구조</DivcontentButtomButtomleftbox>
                                        </DivcontentButtomButtomleftcontent>
                                        <DivcontentButtomButtomleftcontent>
                                            <DivcontentButtomButtomleftbox className="we">Extra Beds</DivcontentButtomButtomleftbox>
                                            <DivcontentButtomButtomleftbox>불가능</DivcontentButtomButtomleftbox>
                                        </DivcontentButtomButtomleftcontent>
                                    </DivcontentButtomButtomleft>
                                    <DivcontentButtomButtomright>
                                        <DivcontentButtomButtomleftcontent>
                                            <DivcontentButtomButtomleftbox className="we">Capacity</DivcontentButtomButtomleftbox>
                                            <DivcontentButtomButtomleftbox>15:00 - 11:00</DivcontentButtomButtomleftbox>
                                        </DivcontentButtomButtomleftcontent>
                                        <DivcontentButtomButtomleftcontent>
                                            <DivcontentButtomButtomleftbox className="we">Beds</DivcontentButtomButtomleftbox>
                                            <DivcontentButtomButtomleftbox>16평형 / 원룸형태의 복층 구조</DivcontentButtomButtomleftbox>
                                        </DivcontentButtomButtomleftcontent>
                                        <DivcontentButtomButtomleftcontent>
                                            <DivcontentButtomButtomleftbox className="we">Amenities</DivcontentButtomButtomleftbox>
                                            <DivcontentButtomButtomleftbox>블루투스 스피커, TV, 캐리어 거치대2개, 헤어드라이기, 샴푸 등</DivcontentButtomButtomleftbox>
                                        </DivcontentButtomButtomleftcontent>
                                    </DivcontentButtomButtomright>
                                </DivcontentButtomButtom>
                                </DivcontentButtombox>
                                
                            </DivcontentButtom>
                        </Div1contentewrap>
                    </Div1content>
                    <Div1coentent2box>
                        <Div1coentent2  imgheight3={imgheight3} src={방3}>

                        </Div1coentent2>
                    </Div1coentent2box>
                    
                </Div1>
            </Div>
        </>
    )
}

export default Skyroom
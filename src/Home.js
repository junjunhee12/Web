import styled from "styled-components"
import 자연사람 from "./assets/자연사람.jpg"
import 침실 from "./assets/침실.jpg"
import 침실1 from "./assets/침실1.jpg"
import 침실2 from "./assets/침실2.jpg"
import 글램핑 from "./assets/글램핑.jpg"
import 숲3 from "./assets/숲3.jpg"
import 사무실 from "./assets/사무실.jpg"
import 건강 from "./assets/건강.jpg"
import 웨딩 from "./assets/웨딩.jpg"
import 공연 from "./assets/공연.jpg"

import 샐러드 from "./assets/샐러드.jpg"
import 샐러드2 from "./assets/샐러드2.jpg"
import 결혼식 from "./assets/결혼식.jpg"
import 회의실2 from "./assets/회의실2.jpg"
import 여유1 from "./assets/여유1.jpg"
import 나무집 from "./assets/나무집.jpg"
import 공연1 from "./assets/공연1.jpg"

import tree from "./assets/tree.svg"
import dollar from "./assets/dollar.svg"
import location from "./assets/location.svg"
import note from "./assets/note.svg"
import 요금 from "./assets/요금.jpg"
import 질문 from "./assets/질문.webp"
import 관광 from "./assets/관광.jpg"
import 교통 from "./assets/교통.jpg"

import 대전 from "./assets/대전.jpg"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Pagination from "./Pagenation"
import Cover from "./Cover"
// import styles from "./Home.module.css"
const Img = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
`
const Imgwrap = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1s linear;
`

const Div = styled.div`
    position: absolute;
    left: 50px;
    top: 100px;
    /* left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    color: white;
    animation:a 1s linear 1s forwards;
    & > h1{
        font-size: 42px;
    }
    & > p{
        margin-top: 1rem;
    }
    @keyframes a{
    0%{
        opacity: 0;
        scale: 2;
    }

    100%{
        opacity: 1;
        scale: 1;
    }
}
`
// ---------------------------------------
const Motionhouse = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: ;
     */
    align-items: center;
    background-color: #f3f3f3;
`

const Motionhousehead = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 100%;
    /* background-color: dodgerblue; */
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 100px;
`
const Househeadwrap = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: yellow; */
    display: flex;
    justify-content: space-between;
`
const HouseheadwrapBody = styled.div`
    width: 450px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: black; */
    /* border: 1px solid black; */

`
const HouseheadwrapBodywrap = styled.img`
    width: 100%;
    height: 50%;
    /* background-color: black; */
    object-fit: cover;
`
const HouseheadwrapBodywrapdeep = styled.div`
    width: 100%;
    height: 100px;
`
const Button = styled.div`
    width: 100%;
    /* background-color: black; */
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ButtonwrapTop = styled.div`
    position: absolute;
    left: 0;
    top: -50px;
    width: 200px;
    height: 25px;
    border: none;
    background-color: black;
    cursor: pointer;
    overflow: hidden;
    color: black;
    transition: all 0.5s linear ;
`
const ButtonwrapBottom = styled.div`
    position: absolute;
    left: 0;
    bottom: -50px;
    width: 200px;
    height: 25px;
    border: none;
    background-color: black;
    cursor: pointer;
    overflow: hidden;
    color: black;
    transition: all 0.5s linear ;
`

const Buttonwrap = styled.button`
    width: 200px;
    height: 50px;
    border: none;
    background-color: #B1B1C0;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    color: black;
    z-index: 1;
    transition: all 0.5s linear ;
    &:hover ${ButtonwrapTop}{
        top: 0;
        z-index: -1;
    }
    &:hover ${ButtonwrapBottom}{
        bottom: 0;
        z-index: -1;
    }
    &:hover{
        color: white;
    }
`;

// ---------------------------

const Motionhousebody = styled.div`
    width: 100%;
    max-width: 1600px;
    height: 60vh;
    display: flex;
    padding: 3rem 0;
`

const Motionhousebodyright = styled.div`
    width: 70%;
    height: 100%;
    /* background-color: dodgerblue; */
`

const MotionhousebodyrightImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Motionhousebodyleft = styled.div`
    width: 30%;
    height: 100%;
    /* background-color: white; */
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    position: relative;
    /* align-items: center; */
    /* background-color: dodgerblue; */
`

const Motionhousebodylefthead = styled.div`
    position: absolute;
    top: 20%;
    font-size: 24px;
`
const Motionhousebodyleftbody = styled.div`
    /* width: 100%;
    height: 100%; */
    font-size: 32px;
    /* display: flex; */
    /* align-items: center; */
    /* background-color: white; */
    animation: ${(props) => (props.height? "movie 1s linear forwards" :"back 1s linear forwards")};
    position: absolute;
    /* background-color: white; */
    @keyframes movie{
        0%{
            left: -100px;
            top: 40%;
            transform: translateY(-50%);
            opacity: 0;
        }

        100%{
            left:0px;
            transform: translateY(-50%);
            top: 40%;
            opacity: 1;
            
        }
    }
    @keyframes back{
        0%{
            left:0px;
            top: 40%;
            opacity: 1;
            transform: translateY(-50%);
        }

        100%{
            left: -100px;
            top: 40%;
            opacity: 0;
            transform: translateY(-50%);
        }
    }
`
const Motionhousebodyleftfoot = styled.div`
    animation: ${(props) => (props.height1? "movie1 3s linear forwards" :"back1 3s linear forwards")};
    position: absolute;
    /* background-color: white; */
    @keyframes movie1{
        0%{
            left: -100px;
            top: 55%;
            opacity: 0;
        }

        100%{
            left:0px;
            top: 55%;
            opacity: 1;
            
        }
    }
    @keyframes back1{
        0%{
            left:0px;
            top: 55%;
            opacity: 1;
        }

        100%{
            left: -100px;
            top: 55%;
            opacity: 0;
        }
    }
`

const Moreview = styled.div`
    position: absolute;
    top: 75%;
    left: 0;
`


const Moreviewdiv = styled.div`
    width: 21px;
    height: 21px;
    border-radius: 50%;
    border: 1px solid black;
`
// ---------------------------------------------------

const GroupEventContainer = styled.div`
    position: relative;
    width: 100%;
    /* max-width: 1600px; */
    background-color: dodgerblue;
    height: 70vh;
    display: flex;
    justify-content: center;
    /* margin-bottom: 3rem; */
    margin: 50px 0;
    /* gap: 1.5rem; */
`
const GroupEventContainerWrap = styled.div`
    position: relative;
    width: 100%;
    max-width: 1600px;
    /* background-color: dodgerblue; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    /* background-color: red; */
    z-index: 1;
`
const GroupEventContainerImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    
`

const GroupEventHead = styled.div`
    font-size: 24px;
    color: white;
    z-index: 10;
`
const GroupEventbody = styled.h1`
    /* width: 100%;
    height: 100%; */
    z-index: 10;
    color: white;
`
const GroupEventfoot = styled.div`
    /* width: 100%;
    height: 100%; */
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
`

const GroupEventfootwrap = styled.div`
    position: relative;
    width: 350px;
    height: 400px;
    /* background-color:white; */
`
const GroupEventfootwrapImg = styled.img`
    width: 100%;
    height: 85%;
    background-color: red;
    /* margin-bottom: 8px; */
`
const GroupEventfootwrapName = styled.h3`
    width: 100%;
    height: 15%;
    /* background-color: red; */
    display: flex;
    align-items: center;
    color: white;
    position: absolute;
    /* bottom: -100px; */
    animation: ${(props) => (props.groupHeight? "movie3 1s linear forwards" :"back3 2s linear forwards")};
    
    @keyframes movie3 {
        0%{
            bottom: -100px;
            left: 0;
            opacity: 0;
        }
        50%{
            opacity: 0;
        }
        100%{
            bottom: 0;
            left: 0;
            opacity: 1;
        }
    }
    
    @keyframes back3 {
        0%{
            bottom: 0;
            opacity: 1;
            left: 0;
        }
        50%{
            opacity: 0;
        }
        100%{
            bottom: -100px;
            opacity: 0;
            left: 0;
        }
    }

`
// -------------------------------------------------
const FacilityContainer = styled.div`
    width: 100%;
    height: 60vh;
    max-width: 1550px;
    /* background-color: black; */
    
`
const FacilityTop = styled.div`
    width: 100%;
    height: 50%;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const FacilityTopwrap = styled.div`
    width: 350px;
    height: 250px;
    /* background-color: white; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    position: relative;
    .name{
        font-size: 24px;
    }
    .movie{
        /* animation: freeMovie 1s linear forwards; */
        animation: ${(props) => (props.freeMovie? "freeMovie 1s linear forwards" : "freebackMovie 1s linear forwards")};
        position: absolute;
        @keyframes freeMovie {
            0%{
                opacity: 0;
                left: -100px;
            }
            100%{
                opacity: 1;
                left: 0;
            }
        }
        @keyframes freebackMovie {
            0%{
                opacity: 1;
                left: 0;
            }
            100%{
                opacity: 0;
                left: -100px;
            }
        }
    }
`
const FacilityTopImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`


const FacilityBottom = styled.div`
    width: 100%;
    height: 50%;
    /* background-color: dodgerblue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* position: relative; */
`
const FacilityBottomwrap = styled.div`
    width: 350px;
    height: 250px;
    /* background-color: black; */
    position: relative;

`
const FacilityBottomImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    &.facilityBottom{
        position: absolute;
        animation: ${(props) => (props.facilityBottom ? "facilityBottomImg 1s linear forwards" : "facilityBottombackImg 1s linear forwards")};
        @keyframes facilityBottomImg {
            0%{
                opacity: 0;
            }
            100%{
                opacity: 1;
            }
        }
        @keyframes facilityBottombackImg {
            0%{
                opacity: 1;
            }
            100%{
                opacity: 0;
            }
        }
    }

    &.facilityBottom1{
        position: absolute;
        animation: ${(props) => (props.facilityBottom ? "facilityBottomImg1 1s linear forwards" : "facilityBottombackImg1 1s linear forwards")};
        @keyframes facilityBottomImg1 {
            0%{
                left: -100px;
                opacity: 0;
            }
            100%{
                left: 0;
                opacity: 1;
            }
        }
        @keyframes facilityBottombackImg1 {
            0%{
                left: 0;
                opacity: 1;
            }
            100%{
                left: -100px;
                opacity: 0;
            }
        }
    }
    &.facilityBottom2{
        position: absolute;
        animation: ${(props) => (props.facilityBottom ? "facilityBottomImg2 1s linear forwards" : "facilityBottombackImg2 1s linear forwards")};
        @keyframes facilityBottomImg2 {
            0%{
                left: -200px;
                opacity: 0;
            }
            100%{
                left: 0;
                opacity: 1;
            }
        }
        @keyframes facilityBottombackImg2 {
            0%{
                left: 0;
                opacity: 1;
            }
            100%{
                left: -200px;
                opacity: 0;
            }
        }
    }
    &.facilityBottom3{
        position: absolute;
        animation: ${(props) => (props.facilityBottom ? "facilityBottomImg3 1s linear forwards" : "facilityBottombackImg3 1s linear forwards")};
        @keyframes facilityBottomImg3 {
            0%{
                left: -300px;
                opacity: 0;
            }
            100%{
                left: 0;
                opacity: 1;
            }
        }
        @keyframes facilityBottombackImg3 {
            0%{
                left: 0;
                opacity: 1;
            }
            100%{
                left: -300px;
                opacity: 0;
            }
        }
    }
`

// 공지사항 ------------------------------------------

const AnnouncementContainer = styled.div`
    width: 100%;
    max-width: 1600px;
    height: 60vh;
    /* background-color: bor; */
    border-left: 1px solid black;
    border-right: 1px solid black;
    margin: 3rem 0 ;
    display: flex;
    justify-content: space-evenly;
    /* padding: 3rem 0; */
`
const Announcementleft = styled.div`
    width: 800px;
    height: 100%;
    background-color: #e3e3e3;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Announcementmid = styled.div`
    width: 1px;
    height: 100%;
    background-color: black;
`
const Announcementright = styled.div`
    width: 500px;
    height: 100%;
    /* background-color: white; */
    
`
const AnnouncementrightTopwrap = styled.div`
    width: 100%;   
    height: 50%;
    /* background-color: white; */
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
`
const AnnouncementrightTopwrapbox = styled.div`
    width: 200px;
    height: 260px;
    background-color: black;
    position: relative;
    .icon{
        position: absolute;
        left: 0;
        background-color: transparent;
        opacity: 0.3;
    }
    .icon1{
        position: absolute;
        right: 0;
        background-color: transparent;
        opacity: 0.3;
    }
    .iconName{
        width: 100%; 
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
        /* z-index: 9999; */
        transition: all 0.5s linear;
    }
    &:hover > ${Imgwrap}{
        filter: blur(30px);
    }
    &:hover > .iconName{
            color: white;
            font-size: 24px;
        }
        cursor: pointer;
`
const AnnouncementrightBottomwrap = styled.div`
    width: 100%;   
    height: 50%;
    /* background-color: white; */
    display: flex;
    justify-content: space-evenly;
    align-items: end;
    gap: 1rem;
`
const AnnouncementrightBottomwrapbox = styled.div`
    width: 200px;
    height: 260px;
    background-color: black;
    position: relative;
    
    .icon{
        position: absolute;
        left: 0;
        background-color: transparent;
        opacity: 0.3;
    }
    .icon1{
        position: absolute;
        right: 0;
        background-color: transparent;
        opacity: 0.3;
    }
    .iconName{
        width: 100%;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
        /* z-index: 9999; */
        transition: all 0.5s linear;
    }
    &:hover > ${Imgwrap}{
        filter: blur(30px);
        
    }
    &:hover > .iconName{
            color: white;
            font-size: 24px;
        }
        cursor: pointer;
        
`
// 공지사항 헤더 부분

const NoticeHeaderContainer = styled.div`
    width: 600px;
    height: 100px;
    border-bottom: 1px solid black;
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const NoticeHeadercontent = styled.div`
    font-size: 32px;
    &.news{
        font-size: 24px;
    }
`

const NoticeHeadercontentMoreview = styled.div`
    font-size: 12px;
`

// 상단 애니메이션

const Animation = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;

`


function Home(){
    const [height, setHeight] = useState(false)
    const [height1, setHeight1] = useState(false)
    const [groupHeight, setGroupHeight] = useState(false)
    const [freeMovie, setFreeMovie] = useState(false)
    const [facilityBottom, setFacilityBottom] = useState(false)
    useEffect(()=>{
        const scroll = () =>{
                const scroll = window.scrollY
                const scroll1 = window.scrollY
                const groupscroll = window.scrollY
                const freescroll = window.scrollY
                const facilityBottomscroll= window.scrollY
                console.log(groupscroll);
                if(scroll > 900){
                    setHeight(true)
                }else if(scroll < 900){
                    setHeight(false)
                }

                if(scroll1 > 1000){
                    setHeight1(true)
                }else if(scroll1 < 1000){
                    setHeight1(false)
                }

                if(groupscroll > 1845){
                    setGroupHeight(true)
                }else if(groupscroll < 1845){
                    setGroupHeight(false)
                }

                if(freescroll > 2140){
                    setFreeMovie(true)
                }else if(freescroll < 2140){
                    setFreeMovie(false)
                }

                if(facilityBottomscroll > 2430){
                    setFacilityBottom(true)
                }else if(facilityBottomscroll < 2430){
                    setFacilityBottom(false)
                }
            }
            window.addEventListener("scroll", scroll);
                return () => {
                    window.removeEventListener("scroll", scroll);
                };
    },[])
    
    return(
        <div>
            <Animation>
                <Cover>
                
                </Cover>
                <Img>
                    <Imgwrap src={대전} alt="대전"/>
                    <Div>
                        <h1>Let's Go Daejeon</h1>
                        <p>대전에서의 즐거움을 찾기위한 사이트</p>
                    </Div>
                </Img>
            </Animation>
            
            <Motionhouse>
                <Motionhousehead>
                    <h2 style={{marginTop: "1rem"}}>Daejeonhotel</h2>
                    <h2>대전에 있는 다양한 호텔</h2>
                    <Househeadwrap>
                        <HouseheadwrapBody>
                            <HouseheadwrapBodywrap src={침실}/>
                                <HouseheadwrapBodywrapdeep>
                                <h3>Sky Hotel</h3>
                                <p>대전의 Sky호텔에서 아름다운 대전의 뷰를 감상하며 </p>
                                <p>여유롭고 편안한 휴식을 즐겨보세요</p>
                                </HouseheadwrapBodywrapdeep>
                            <Button>
                                <Buttonwrap>
                                <ButtonwrapTop></ButtonwrapTop>
                                    <div>상세보기</div>
                                <ButtonwrapBottom></ButtonwrapBottom>
                                </Buttonwrap>
                                <Buttonwrap>
                                <ButtonwrapTop></ButtonwrapTop>
                                    <div>호텔예약</div>
                                <ButtonwrapBottom></ButtonwrapBottom>
                                </Buttonwrap>
                            </Button>
                        </HouseheadwrapBody>
                        <HouseheadwrapBody>
                            <HouseheadwrapBodywrap src={침실1}/>
                            <HouseheadwrapBodywrapdeep>
                                <h3>Clean Hotel</h3>
                                <p>대전에서의 가장 깨끗한 호텔에서 편안하고 </p>
                                <p>여유롭게 휴식을 즐겨보세요</p>
                                </HouseheadwrapBodywrapdeep>
                            <Button>
                                <Buttonwrap>
                                    <ButtonwrapTop></ButtonwrapTop>
                                    <div>상세보기</div>
                                    <ButtonwrapBottom></ButtonwrapBottom>
                                </Buttonwrap>
                                <Buttonwrap>
                                <ButtonwrapTop></ButtonwrapTop>
                                    <div>호텔예약</div>
                                <ButtonwrapBottom></ButtonwrapBottom>
                                </Buttonwrap>
                            </Button>
                        </HouseheadwrapBody>
                        <HouseheadwrapBody>
                            <HouseheadwrapBodywrap src={침실2}/>
                            <HouseheadwrapBodywrapdeep>
                                <h3>First Hotel</h3>
                                <p>대전의 1등 호텔에서 완벽하고 즐거운</p>
                                <p>시간을 즐겨보세요</p>
                                </HouseheadwrapBodywrapdeep>
                            <Button>
                                <Buttonwrap>
                                    <ButtonwrapTop></ButtonwrapTop>
                                    <div>상세보기</div>
                                    <ButtonwrapBottom></ButtonwrapBottom>
                                </Buttonwrap>
                                <Buttonwrap>
                                <ButtonwrapTop></ButtonwrapTop>
                                    <div>호텔예약</div>
                                <ButtonwrapBottom></ButtonwrapBottom>
                                </Buttonwrap>
                            </Button>
                        </HouseheadwrapBody>
                    </Househeadwrap>
                </Motionhousehead>
                <Motionhousebody>
                    <Motionhousebodyleft>
                        <Motionhousebodylefthead>
                            Glamping
                        </Motionhousebodylefthead>
                        <Motionhousebodyleftbody height={height}>
                            대전광역시의<br></br>
                            감성적이고 아름다운 글램핑
                        </Motionhousebodyleftbody>
                        <Motionhousebodyleftfoot height1={height1}>
                            소중한 사람들과 함께 모여<br></br>
                            편안한 휴식과 낭만과  여유로움을<br></br>
                            즐겨보세요
                        </Motionhousebodyleftfoot>
                        <Moreview>
                            <Link to={""} style={{display:"flex", gap:"1rem"}}>
                                <Moreviewdiv />
                                More Glamping
                            </Link>
                            
                        </Moreview>
                    </Motionhousebodyleft>
                    <Motionhousebodyright>
                        <MotionhousebodyrightImg src={글램핑} alt="글램핑"/>
                    </Motionhousebodyright>
                </Motionhousebody>
                <GroupEventContainer>
                    <GroupEventContainerWrap>
                    <GroupEventHead>
                        Wedding/Show
                    </GroupEventHead>
                    <GroupEventbody>
                        즐거움과 아름다움,<br></br>
                        대전광역시의 특별한 웨딩과 공연
                    </GroupEventbody>
                    <GroupEventfoot>
                        <GroupEventfootwrap>
                            <GroupEventfootwrapImg src={사무실}/>
                            <GroupEventfootwrapName groupHeight={groupHeight} >
                                완벽한 웨딩
                            </GroupEventfootwrapName>
                        </GroupEventfootwrap>
                        <GroupEventfootwrap>
                            <GroupEventfootwrapImg src={건강}/>   
                            <GroupEventfootwrapName groupHeight={groupHeight}>
                                인생 웨딩
                            </GroupEventfootwrapName>
                        </GroupEventfootwrap>
                        <GroupEventfootwrap>
                            <GroupEventfootwrapImg src={웨딩}/>  
                            <GroupEventfootwrapName groupHeight={groupHeight}>
                                각종 행사
                            </GroupEventfootwrapName>
                        </GroupEventfootwrap>
                        <GroupEventfootwrap>
                            <GroupEventfootwrapImg src={공연}/>  
                            <GroupEventfootwrapName groupHeight={groupHeight}>
                                공연
                            </GroupEventfootwrapName>
                        </GroupEventfootwrap>
                    </GroupEventfoot>
                    </GroupEventContainerWrap>
                    <GroupEventContainerImg src={숲3}/>
                    
                </GroupEventContainer>
                <FacilityContainer>
                    <FacilityTop>
                        <FacilityTopwrap freeMovie={freeMovie}>
                            <p>Interesting</p>
                            <p className="name">대전의 멋지고 아룸다운<br></br>시설과 함께하는 역사의<br></br><p className="movie">흥미로움</p></p>

                        </FacilityTopwrap>
                        <FacilityTopwrap>
                            <FacilityTopImg src={샐러드}/>
                        </FacilityTopwrap>
                        <FacilityTopwrap>
                            <FacilityTopImg src={샐러드2}/>
                        </FacilityTopwrap>
                        <FacilityTopwrap>
                            <FacilityTopImg src={여유1}/>
                        </FacilityTopwrap>
                    </FacilityTop>
                    <FacilityBottom>
                        <FacilityBottomwrap>
                            <FacilityBottomImg className="facilityBottom" facilityBottom={facilityBottom} src={회의실2}/>
                        </FacilityBottomwrap>
                        <FacilityBottomwrap>
                            <FacilityBottomImg className="facilityBottom1" facilityBottom={facilityBottom} src={결혼식}/>
                        </FacilityBottomwrap>
                        <FacilityBottomwrap>
                            <FacilityBottomImg className="facilityBottom2" facilityBottom={facilityBottom} src={공연1}/>
                        </FacilityBottomwrap>
                        <FacilityBottomwrap>
                            <FacilityBottomImg className="facilityBottom3" facilityBottom={facilityBottom} src={나무집}/>
                        </FacilityBottomwrap>
                    </FacilityBottom>
                </FacilityContainer>
                <AnnouncementContainer>
                    <Announcementleft>
                        <NoticeHeaderContainer>
                            <NoticeHeadercontent>
                                공지사항
                            </NoticeHeadercontent>
                            <NoticeHeadercontent className="news">
                                뉴스
                            </NoticeHeadercontent>
                            <NoticeHeadercontentMoreview>
                                Moreview
                            </NoticeHeadercontentMoreview>
                        </NoticeHeaderContainer>
                        <Pagination />
                    </Announcementleft>
                    <Announcementmid>

                    </Announcementmid>
                    <Announcementright>
                        <AnnouncementrightTopwrap>
                            <AnnouncementrightTopwrapbox>
                                <Imgwrap src={요금}/>
                                <Imgwrap className="icon" src={dollar}/>
                                <div className="iconName">운영시간/요금</div>
                            </AnnouncementrightTopwrapbox>
                            <AnnouncementrightTopwrapbox>
                                <Imgwrap src={교통}/>
                                <Imgwrap className="icon1" src={tree}/>
                                <div className="iconName">교통</div>
                            </AnnouncementrightTopwrapbox>
                        </AnnouncementrightTopwrap>
                        <AnnouncementrightBottomwrap>
                            <AnnouncementrightBottomwrapbox>
                                <Imgwrap src={관광}/>
                                <Imgwrap className="icon" src={location}/>
                                <div className="iconName">주변관광</div>
                            </AnnouncementrightBottomwrapbox>
                            <AnnouncementrightBottomwrapbox>
                                <Imgwrap src={질문}/>
                                <Imgwrap className="icon1" src={note}/>
                                <div className="iconName">자주묻는질문</div>
                            </AnnouncementrightBottomwrapbox>
                        </AnnouncementrightBottomwrap>
                    </Announcementright>
                </AnnouncementContainer>
            </Motionhouse>
        </div>
    )
}

export default Home
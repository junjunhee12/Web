import styled from "styled-components"
import room from "../assets/room.jpg"
import 불 from "../assets/불.jpg"
import room3 from "../assets/room3.jpg"
import sky1 from "../assets/sky1.jpg"
import Glamping from "../assets/글램핑.jpg"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { PrContent } from "../coentexts/prContent"
import Glampingroom from "./Glamping"
import Skyroom from "./Skyroom"
const RoomContainer = styled.div`
    width: 100%;
    height: 100%;
`
const RoomheadcontainerIMG = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    /* background-color: red; */
`
const RoomheadcontainerIMGwrap = styled.img`
    width: 100%;
    height: 100%;
    /* background-color: dodgerblue; */
    object-fit: cover;
`

const RoomsBox = styled.div`
    width: 100%;
    /* height: 200px; */
    height: 400px;
    /* background-color: white; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
`
const Rooms = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    /* background-color: red; */
    margin: 0 1rem;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    color: white;
    font-weight: bold;
    font-size: 18px;
    background-color: transparent;
        border: 1px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        &.bordernone{
            border: none;
        }
    /* &.Glamping{
        background-color: transparent;
        border: 1px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
    } */
`
const Skyhouse = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    align-items: center;

`
const RoomBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const RoomBoxcontent = styled.div`
    text-align: center;
    color: white;
    &.Room{
        font-size: 48px;
        font-weight: 400;
    }
    &.backcolor{
        /* padding: 0.5rem;
        border-radius: 8px; */
        /* background-color: black; */
        /* backdrop-filter: ${(props) => (props.skyImg? "blur(100px)" : "")};1 */
        color: ${(props) => (props.skyImg? "black" : "none")};
    }
`

const RoomsBoxContent = styled.div`
    display: flex;
`
const RoomFooter = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: red; */
`
const GlampingFooter = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: dodgerblue; */
`
function Room(){
    
    const temp = useContext(PrContent)
    const {handleOnClickGlamping, handleOnClickRoom, mainImg, skyImg} = temp

    // console.log(a);
    console.log(skyImg);
    return(
        <RoomContainer>
            <RoomheadcontainerIMG>
                <RoomsBox>
                    <RoomBox>
                            <RoomBoxcontent className="Room">Hotel/Glamping</RoomBoxcontent>
                            <RoomBoxcontent skyImg={skyImg} className="backcolor">대전의 호텔과 글램핑을 만나보세요</RoomBoxcontent>
                    </RoomBox>
                    
                    <RoomsBoxContent>
                        <Link to={"/Hotel"}>
                            <Rooms  className={skyImg ? "bordernone" : ""} onClick={handleOnClickRoom}>
                                {/* <RoomheadcontainerIMGwrap src={sky1}/> */}
                                {skyImg ? (<RoomheadcontainerIMGwrap src={sky1}/>) :""}
                                <Skyhouse>
                                    대전
                                    호텔
                                </Skyhouse>
                                
                            </Rooms>
                        </Link>
                        <Link to={"/Hotel"}>
                            <Rooms className={mainImg ? "bordernone" : ""} onClick={handleOnClickGlamping}>
                                {mainImg ? (<RoomheadcontainerIMGwrap src={불}/>) :""}
                                <Skyhouse>
                                    대전 글램핑
                                </Skyhouse>
                                
                            </Rooms>
                        </Link>
                    </RoomsBoxContent>
                    
                    
                </RoomsBox>
                
                {
                    mainImg ? (<RoomheadcontainerIMGwrap src={Glamping}/>) : (<RoomheadcontainerIMGwrap src={room}/>)
                }
                
                
            </RoomheadcontainerIMG>
            {
                mainImg ? (
                <GlampingFooter>
                    <Glampingroom />
                </GlampingFooter>
                ):(
                <RoomFooter>
                    <Skyroom />
                </RoomFooter>
            )
            }
        </RoomContainer>
    )
}

export default Room
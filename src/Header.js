import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import { PrContent } from "./coentexts/prContent";

// const Body = styled.body`
//     width: 100%;
//     height: 100vh;
//     position: relative;
// `
const Containr = styled.div`
    /* position: absolute; */
    left: 50%;
    transform: translateX(-50%) ;
    width: 100%;
    max-width: ${(props) => (props.scrolly ? "100%" : " 1800px")};
    background-color: ${(props) => (props.scrolly ? "black" : "")};
    height: 80px;
    /* margin: 0 auto; */
    /* margin-right: 3rem; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: ${(props) => (props.color ? "1px solid black" : "1px solid white")};
    transition: all 0.3s linear;
    &:hover{
        max-width: 100%;
        background-color: black;
        a, div{
            color: white;
        }
    }
    a, .div {
        
        /* color: white; */
        font-weight: 500;
        color: ${(props) => (props.scrolly ? "white" : "#E6E6FA")};
        padding: 0 1rem;
        transition:  0.3s ease;

        &:hover {
            
            color: dodgerblue;
            cursor: pointer;
        }
    }
    /* transition: all 3s linear; */
    .div{
        /* width: 50px;
        height: 50px; */
        z-index: 10000;
        position: relative;
        width:36px;height:18px;
	cursor:pointer;
        /* align-items: center; */
        /* transition: all 3s linear; */
        .headbar{
            transition: all 0.5s linear;
            width: ${({ isSidebarOpen }) => (isSidebarOpen ? "30px" : "30px")};
            height: ${({ isSidebarOpen }) => (isSidebarOpen ? "3px" : "1px")};
            background-color: ${({ isSidebarOpen }) => (isSidebarOpen ? "black" : "white")};
            transform:  ${({ isSidebarOpen }) => (isSidebarOpen ? "rotate(45deg)" : "")};
            /* transform-origin: top left; */
            margin-bottom: ${({ isSidebarOpen }) => (isSidebarOpen ? "none" : "8px")};
            position: absolute;
            left: 0;
            top: ${({ isSidebarOpen }) => (isSidebarOpen ? "50%" : "0")};
        }
        .bodybar{
            /* transition: all 1s linear; */
            width: ${({ isSidebarOpen }) => (isSidebarOpen ? "none" : "40px")};
            height:  ${({ isSidebarOpen }) => (isSidebarOpen ? "none" : "1px")};
            background-color: ${({ isSidebarOpen }) => (isSidebarOpen ? "" : "white")};
            /* margin-top: ${({ isSidebarOpen }) => (isSidebarOpen ? "none" : "8px")}; */
            position: absolute;
            left: 0;
            top: 50%;
            /* transform: translateY(-50%); */
        }
        .footbar{
            transition: all 0.5s linear;
            width: ${({ isSidebarOpen }) => (isSidebarOpen ? "30px" : "30px")};
            height: ${({ isSidebarOpen }) => (isSidebarOpen ? "3px" : "1px")};
            background-color: ${({ isSidebarOpen }) => (isSidebarOpen ? "black" : "white")};
            /* margin-top: ${({ isSidebarOpen }) => (isSidebarOpen ? "8px" : "8px")}; */
            /* transform-origin: bottom left; */
            transform:  ${({ isSidebarOpen }) => (isSidebarOpen ? "rotate(-45deg)" : "")};
            position: absolute;
            left: 0;
            top: ${({ isSidebarOpen }) => (isSidebarOpen ? "50%" : "100%")};
        }
    }

    position: fixed;
    z-index: 901;
`
const NavLinks = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    /* background-color: red; */
    justify-content: space-between;
    
`;



const SideMe = styled.div`
    width: 100%; /* Adjust width as needed */
    height: 100vh;
    background-color: #B1B1C0;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-110%")}; /* Hide the sidebar by default */
    transition: right 1s linear; /* Add transition effect */
    z-index: 903;
    cursor: auto;
    
`;

const SideMeContainer = styled.div`
    width: 100%;
    max-width: 1600px;
    height: 100%;
    /* background-color: yellow; */
    margin: 0 auto;
    & > .head{
        width: 100%;
        height: 80px;
        background-color: #B1B1C0;
    }
`

const Sidewrap = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: pink; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: nowrap;
`

const Div = styled.div`
    width: 500px;
    height: 100px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Lora";
        font-size: 28px;
        color: #000;
        font-weight: 400;
`

function Header(){

    const temp = useContext(PrContent)
    const { handleOnClickRoom,handleFalse,false1} = temp

    const [height, setHeight] = useState(false)
    const [scrolly, setScrolly] =useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Step 1
    
    const toggleSidebar = () => { // Step 2
        setIsSidebarOpen(!isSidebarOpen);
        handleFalse()
    };


    useEffect(()=>{
        const scroll = ()=>{
            const scroll = window.scrollY;
            const scrollyWid = window.scrollY;
            console.log("scroll", scroll);
            if(scroll > 930){
                setHeight(true)
            }else{
                setHeight(false)
            }

            if(scrollyWid){
                setScrolly(true)
            }else{
                setScrolly(false)
            }
        }

        window.addEventListener("scroll", scroll);
        return () => {
            window.removeEventListener("scroll", scroll);
        };
    },[])
    return(
        <>
        {/* <Body> */}
            <Containr isSidebarOpen={isSidebarOpen} scrolly={scrolly} color={height}>
                <h2>
                    <Link to={"/"}>
                        Daejeon
                    </Link>
                </h2>
                    
                <NavLinks>
                    <Link onClick={handleOnClickRoom} to={"Hotel"}>Hotel/Glamping</Link>
                    <Link to={"Coffee"}>Coffee</Link>
                    <Link to={"Wedding/Show"}>Wedding/Show</Link>
                    <Link to={"Interesting"}>Interesting</Link>
                    <Link to={"ABOUT"}>About</Link>
                </NavLinks>
                    

                <div className="div" onClick={toggleSidebar}> {/* Step 4 */}
                    {/* 이미지 */}
                    <div className="headbar"></div>
                    {/* <div className={`${rotation ? "headbro" : "headbar"}`}></div> */}
                    <div className="bodybar"></div>
                    <div className="footbar"></div>
                </div>
                <SideMe isOpen={isSidebarOpen}> {/* Step 3 */}
                {/* Sidebar content */}
                    <SideMeContainer>
                        <div className="head"></div>
                        <Sidewrap>
                        <Div onClick={handleOnClickRoom} >
                            <Link onClick={toggleSidebar}  to={"Hotel"}>Hotel/Glamping</Link>
                        </Div>   
                        <Div>
                            <Link onClick={toggleSidebar} to={"Coffee"}>Coffee</Link>
                        </Div>   
                        <Div>
                            <Link onClick={toggleSidebar} to={"Wedding/Show"}>Wedding/Show</Link>
                        </Div>   
                        <Div>
                            <Link onClick={toggleSidebar} to={"Interesting"}>Interesting</Link>
                        </Div>   
                        <Div>
                            <Link onClick={toggleSidebar} to={"ABOUT"}>About</Link>
                        </Div>   
                        </Sidewrap>
                    </SideMeContainer>
                </SideMe>
            </Containr>
        {/* </Body> */}
        </>
    )
}

export default Header
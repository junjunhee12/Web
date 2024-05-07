import { Link } from "react-router-dom"
import styled from "styled-components"
import 인스타 from "./assets/인스타.jpg"
import 유튜브 from "./assets/유튜브.jpg"
import 페이스북 from "./assets/페이스북.jpg"
const FooterContainer = styled.div`
    width: 100%;
    height: 250px;
    background-color: black;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`

const Header = styled.div`
    width: 100%;
    height: 70%;
    max-width: 1600px;
    /* background-color: wheat; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid white;
`
const Headerwrap = styled.div`
    width: 500px;
    height: 100%;
    /* background-color: red; */
    /* display: flex; */
    /* flex-direction: column; */
    display: flex;
    flex-direction: column;
    /* align-items: end; */
    padding: 2.5rem 0;
    gap: 1rem;
`
const Headerwrapcontentdiv = styled.div`
    
    display: flex;
    color: white;
    justify-content: space-between;
`

const Headerwrapcontentleft = styled.div`
    width: 30%;
    color: white;
    /* background-color: yellowgreen; */
    border-right: 1px solid white;
`
const Headerwrapcontentright = styled.div`
    width: 65%;
    color: white;
    /* background-color: blue; */
    /* display: flex;
    justify-content: center; */
`


const Foot = styled.div`
    width: 100%;
    max-width: 1600px;
    height: 30%;
    /* background-color: dodgerblue; */
    display: flex;
    justify-content: space-between;
`

const Footwrap = styled.div`
    width: 500px;
    height: 100%;
    /* background-color: white; */
`

const Footwrapdiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    color: white;
    
    /* background-color: red; */
`

const Links = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    justify-content:end;
    align-items: center;
    gap: 1rem;
    
    overflow: hidden;
`

const Img = styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover;
    border-radius: 50%;
`
function Footer(){
    return(
        <>
        <FooterContainer>
            <Header>
                <Headerwrap>
                    <Headerwrapcontentdiv>
                        <Headerwrapcontentleft>
                            대표 
                        </Headerwrapcontentleft>
                        <Headerwrapcontentright>
                            OOO
                        </Headerwrapcontentright>
                    </Headerwrapcontentdiv>
                    <Headerwrapcontentdiv>
                        <Headerwrapcontentleft>
                            사업자 번호
                        </Headerwrapcontentleft>
                        
                        <Headerwrapcontentright>
                            000-00-000000
                        </Headerwrapcontentright>
                    </Headerwrapcontentdiv>
                    <Headerwrapcontentdiv>
                        <Headerwrapcontentleft>
                            상호명
                        </Headerwrapcontentleft>
                        
                        <Headerwrapcontentright>
                            OOO OOO
                        </Headerwrapcontentright>
                    </Headerwrapcontentdiv>
                    
                </Headerwrap>
                <Headerwrap>
                    <Headerwrapcontentdiv>
                        <Headerwrapcontentleft>
                            주소
                        </Headerwrapcontentleft>
                        <Headerwrapcontentright>
                            대전광역시 동구 가오동
                        </Headerwrapcontentright>
                    </Headerwrapcontentdiv>
                    <Headerwrapcontentdiv>
                        <Headerwrapcontentleft>
                            영엽시간
                        </Headerwrapcontentleft>
                        
                        <Headerwrapcontentright>
                            연중무휴 (오전 9시 ~ 오후 17시)
                        </Headerwrapcontentright>
                    </Headerwrapcontentdiv>
                    {/* <Headerwrapcontentdiv>
                        <Headerwrapcontentleft>
                            영엽시간
                        </Headerwrapcontentleft>
                        
                        <Headerwrapcontentright>
                            연중무휴 (오전 9시 ~ 오후 17시)
                        </Headerwrapcontentright>
                    </Headerwrapcontentdiv> */}
                </Headerwrap>
                <Headerwrap>
                    <Headerwrapcontentdiv>
                        <Headerwrapcontentleft>
                            대전 사무소
                        </Headerwrapcontentleft>
                        <Headerwrapcontentright>
                            00-0000-0000
                        </Headerwrapcontentright>
                    </Headerwrapcontentdiv>
                    <Headerwrapcontentdiv>
                        <Headerwrapcontentleft>
                            대전 OOO
                        </Headerwrapcontentleft>
                        
                        <Headerwrapcontentright>
                            000-000-0000
                        </Headerwrapcontentright>
                    </Headerwrapcontentdiv>
                    <Headerwrapcontentdiv>
                        <Headerwrapcontentleft>
                            대전 OOO(Mobile)
                        </Headerwrapcontentleft>
                        
                        <Headerwrapcontentright>
                            000-0000-0000
                        </Headerwrapcontentright>
                    </Headerwrapcontentdiv>
                    
                </Headerwrap>
            </Header>
            <Foot>
                <Footwrap>
                    <Footwrapdiv>
                        전준희
                    </Footwrapdiv>
                </Footwrap>
                <Footwrap>
                    <Footwrapdiv>
                        <Links>
                            <Link to={""}>
                                <Img src={페이스북}/>
                            </Link>
                            <Link to={""}>
                                <Img src={유튜브}/>
                            </Link>
                            <Link to={""}>
                                <Img src={인스타}/>
                            </Link>
                        </Links>
                    </Footwrapdiv>
                </Footwrap>
            </Foot>
        </FooterContainer>
            
        </>
    )
}

export default Footer
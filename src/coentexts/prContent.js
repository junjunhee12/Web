import React, { useEffect } from "react";
import { useState, createContext } from "react";

// context 객체 생성
const PrContent = createContext();

export function PrContentProvider({ defaultValue = "ko", children }) {

    const [mainImg, setMainImg] = useState(false);
    const [skyImg, setSkyImg] = useState(false)
    const [ false1, setFalse1] = useState(false)
    const handleFalse = ()=>{
      setFalse1(true)
    }
    const handleOnClickRoom = () =>{
        setMainImg(false)
        setSkyImg(true)
    }
    const handleOnClickGlamping = ()=>{
        setMainImg(true)
        setSkyImg(false)
    }
  return (
    <PrContent.Provider
      value={{
        handleOnClickGlamping,
        handleOnClickRoom,
        mainImg,
        setMainImg,
        skyImg,
        false1,
        handleFalse
      }}
    >
      {children}
    </PrContent.Provider>
  );
}

export { PrContent };

// 커스텀 훅 제작 예정 구역?

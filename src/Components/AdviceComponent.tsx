import React, { useState } from 'react'
import DividerPic from '../assets/advice-generator-app-main 2/images/pattern-divider-desktop.svg'
import DicePic from "../assets/advice-generator-app-main 2/images/icon-dice.svg";
import '../App.css';

    const AdviceComponent = (props: { id: number, advice: string, onClickNextBtn: () => void }) => {

    return (
        <>
        
            <div className="h-[100vh] grid place-items-center bg-[#1f2632] ">

                <div className="gap-3 px-7 pt-12 pb-16 max-w-[32rem] max-sm:mx-[20px] rounded-[26px] relative bg-[#323a49] mx-auto grid place-items-center">

                    <h3 className="text-[#52ffa8] text-[18px] tracking-[6px]">ADVICE #<span>{props.id}</span></h3>

                    <p className="text-[28px] text-[#cee3e9] text-center">"<span>{props.advice}</span>"</p>

                    <div className="mt-4">
                        <img src={DividerPic} alt="DividerForDiv" />
                    </div>

                    <div onClick={props.onClickNextBtn} className="grid diceBtn place-items-center rounded-full absolute -bottom-[32px] hover:shadow-xl hover:shadow-[#52ffa8] bg-[#52ffa8] h-[64px] w-[64px]">
                        <img src={DicePic} alt="DiceNextBtn" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdviceComponent;
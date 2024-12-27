import PlusSvg from "./plus"


export const TwoPlus=({ crossesOffset })=>{
    return(<>
        <PlusSvg
        className={`hidden absolute -top-[0.3125rem]  ${
        crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:left-[-0.28rem] z-20`}
    />

    <PlusSvg
        className={`hidden absolute  -top-[0.3125rem] right-[1.5625rem] ${
        crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:right-[-0.5rem] z-20`}
    />
        
        </>)
}
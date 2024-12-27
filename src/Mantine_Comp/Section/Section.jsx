
import classes from './Section.module.css'
import { TwoPlus } from './TwoPlus'

export const  Section=({children})=>{

    return(
        <div
        style={{
            position:"relative",
            border:"0px solid yellow",
            margin:"auto",
            padding:"5% 2% 5% 2%"
        }}>
{children}
        
        <div
        style={{
            position:"absolute",
            width:0.25,
            background:"#e0e0e0",
            height:"100%",
            zIndex:"10",
            right:0,
            top:0
        }}
        />

        <div
        style={{
            position:"absolute",
            width:0.25,
            background:"#e0e0e0",
            height:"100%",
            zIndex:"10",
            left:0,
            top:0
        }}
        />

        <>
        <div className={classes.horizontal_line}/>

        <TwoPlus/>
        </>
        
        </div>
    )

}
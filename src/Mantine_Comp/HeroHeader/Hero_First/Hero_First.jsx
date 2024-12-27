import classes from '../../global.module.css'
import hero_robo2 from '../../../utils/WebsiteSvg/hero_robo2.jpg'
import { Image } from '@mantine/core'

export const Hero_First=()=>{

    return(<>
        <div
        className={classes.gradient_blue}
        style={{
            position:'relative',
            width:"70%",
            padding:"2px",
            border:"0px solid red",
            margin:"auto",
            borderRadius:"2%",


        }}
        >
        <div
        style={{
            width:"100%",
            height:"20px",
            background:"#131629",
            borderRadius:"10px 10px 0px 0px",

        }}
        />
        <div
        style={{
            width: '100%',
            height:"450px",
            border: '0px solid red',
            overflow: 'hidden',
        }}
    >
            <img src={hero_robo2} 
            style={{
                width: '100%', // Ensure image scales properly
            }}
            />
            </div>

            <div
            style={{
                position:"absolute",
                height:"80px",
                width:"300px",
                left:"-150px",
                bottom:"175px",
                backdropFilter:"blur",
                background:"",
                border:"1px solid gray",
                borderRadius:"15px"

                

            }}
            >
            </div>

            <div
            style={{
                position:"absolute",
                height:"90px",
                width:"220px",
                right:"-100px",
                bottom:"200px",
                backdropFilter:"blur(50px)",
                background:"",
                border:"1px solid gray",
                borderRadius:"15px"
            }}
            >
            </div>
        </div>
        </>)

}
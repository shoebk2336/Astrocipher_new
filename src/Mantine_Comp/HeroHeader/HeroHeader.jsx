// import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
// import image from './image.svg';
import classes from './HeroHeader.module.css';
import { RainbowButton } from "@/components/ui/rainbow-button";
import RetroGrid from "@/components/ui/retro-grid";
import FlipText from "@/components/ui/flip-text";
import Grad from '../global.module.css'
import {Section} from '../Section/Section'
import hero_robo1 from '../../utils/WebsiteSvg/hero_robo1.png'
import { Hero_First } from './Hero_First/Hero_First';

export function HeroHeader() {
return (
    <Section>
    <Container size='100%'  style={{
        position:'relative',
        border:"0px solid red",
    }}>
    <RetroGrid
        angle='10'/>

    <div className={classes.inner}>

        <div className={classes.content}>
        <Title className={classes.title} style={{fontSize:"50px"}}>
            <span className={classes.highlight}
            >Transforming</span> 
            Ideas into Powerful, Results-Driven Digital Solutions.<br /> 
            </Title>
        <Text c="dimmed" mt="md">
        Unlock the power of innovation with cutting-edge web solutions, stunning designs, and data-driven insights tailored to elevate your business.
        </Text>
        <br/>
        <Title size='20px' style={{lineHeight:"1.5"}}>
        Your vision deserves the best.<br/>
        Let’s create something extraordinary—together!
        </Title>
        
        <Group mt={30}>
        <RainbowButton>Schedule Consultation</RainbowButton>

        </Group>
        </div>
    </div>
    <Hero_First/>
    
    
    </Container>
    </Section>
);
}
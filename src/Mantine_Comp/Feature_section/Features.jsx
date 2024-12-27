import { IconCookie, IconGauge, IconUser } from '@tabler/icons-react';
import {
Badge,
Card,
Container,
Group,
SimpleGrid,
Text,
Title,
useMantineTheme,
} from '@mantine/core';
import classes from './Features.module.css';
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import Meteors from "@/components/ui/meteors";
import style from '../global.module.css'
import {GradientText} from '@/components/ui/gradient_text'
import { Section } from '../Section/Section';

const mockdata = [
{
    title: 'Extreme performance',
    description:
    'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    icon: IconGauge,
},
{
    title: 'Privacy focused',
    description:
    'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: IconUser,
},
{
    title: 'No third parties',
    description:
    'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: IconCookie,
},
{
    title: 'Extreme performance',
    description:
    'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    icon: IconGauge,
},
{
    title: 'Privacy focused',
    description:
    'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: IconUser,
},
{
    title: 'No third parties',
    description:
    'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: IconCookie,
},
];

export function Features() {
const theme = useMantineTheme();
const features = mockdata.map((feature) => (
<NeonGradientCard key={feature.title} className="max-width-xl items-center justify-center text-center">
    
    <feature.icon size={50} stroke={2} color={theme.colors.blue[6]} />
    <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
    </Text>
    <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
    </Text>
    </NeonGradientCard>
));

return (
    <Section>
    <Container size="100%" style={{border:"0px solid red",padding:"0px"}}>

    <Group justify="center" padding="1px" style={{
        border:"0px solid red",
        padding:"0px",
    }}>
        <GradientText
        >
            <Text>Astrocipher</Text>
        </GradientText>

    </Group>

    <Title order={2} className={classes.title} ta="center" mt="sm">
        Integrate effortlessly with any technology stack
    </Title>

    <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
        hunger drives it to try biting a Steel-type Pokémon.
    </Text>

    <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
    </SimpleGrid>
    </Container>
    </Section>
);
}
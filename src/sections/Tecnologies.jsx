import { Box, Typography } from "@mui/material";
import MiniCard from "../components/MiniCards";
import { SiJavascript,
SiPython,
SiInfluxdb,
SiReact,
SiNodedotjs,
SiWebstorm,
SiRailway,
SiCloudflare, 
SiGit, 
SiPostgresql, 
SiExpress, 
SiPrisma, 
SiMui, 
SiRender,
SiHtml5,
SiCsswizardry,
SiSequelize,
SiDbeaver,
SiAxios,
SiTailwindcss   } from 'react-icons/si';

export default function Tecnologies() {
    return (
        <>
            <Box sx={{ mt: 5 }}>
                <Typography variant="h5" sx={{fontFamily: 'Roboto', color:'#e6e8ff'}}>Tecnologias</Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 2, flexWrap: "wrap" }}>
                    <MiniCard Icon={SiJavascript} label="JavaScript" size={30} />
                    <MiniCard Icon={SiPython} label="Python" size={30}/>
                    <MiniCard Icon={SiCloudflare} label="CloudFlare" size={30} />
                    <MiniCard Icon={SiGit} label="Git" size={30} />
                    <MiniCard Icon={SiReact} label="React" size={30} />
                    <MiniCard Icon={SiPostgresql} label="PostgreSQL" size={30} />
                    <MiniCard Icon={SiInfluxdb} label="InfluxDB" size={30} />
                    <MiniCard Icon={SiWebstorm} label="WebSocket" size={30} />
                    <MiniCard Icon={SiExpress} label="Express" size={30} />
                    <MiniCard Icon={SiPrisma} label="Prisma" size={30} />
                    <MiniCard Icon={SiMui} label="Material MUI" size={30} />
                    <MiniCard Icon={SiRender} label="Render" size={30} />
                    <MiniCard Icon={SiRailway} label="Railway" size={30} />
                    <MiniCard Icon={SiAxios} label="Axios" size={30} />
                    <MiniCard Icon={SiSequelize} label="Sequelize" size={30} />
                    <MiniCard Icon={SiHtml5} label="HTML" size={30} />
                    <MiniCard Icon={SiCsswizardry} label="CSS" size={30} />
                    <MiniCard Icon={SiNodedotjs} label="Node.js" size={30} />
                    <MiniCard Icon={SiTailwindcss} label="Tailwind" size={30}/>
                    <MiniCard Icon={SiDbeaver} label="DBeaver" size={30}/>

                </Box>

            </Box>
        </>

    )
}
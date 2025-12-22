import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Home from './Pages/Home'

/* =======================
   THEME (AZUL / VIOLETA)
   ======================= */
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#06060d',
      paper: '#0b0b1a',
    },
    text: {
      primary: '#e6e8ff',
      secondary: '#aab0ff',
    },
    primary: {
      main: '#5b6cff',
    },
    secondary: {
      main: '#7a85ff',
    },
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },
})

/* =======================
   BACKGROUND (OPTIMIZED)
   ======================= */
function BackgroundVisual() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        willChange: 'transform',
        transform: 'translateZ(0)',
        background: `
          radial-gradient(
            circle at 30% 40%,
            #0f1024 0%,
            #0b0b1a 45%,
            #06060d 100%
          )
        `,
      }}
    >
      {/* DOT GRID */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle, #7a85ff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          opacity: 0.25,
        }}
      />

      {/* WIREFRAME SVG */}
      <svg
        viewBox="0 0 900 300"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '55%',
          height: '100%',
          opacity: 0.45,
        }}
      >
        <g
          fill="none"
          stroke="#5b6cff"
          strokeWidth="1"
          strokeOpacity="0.6"
          vectorEffect="non-scaling-stroke"
        >
          <polygon points="80,140 180,60 310,140 210,260" />
          <polygon points="210,260 310,140 460,230 350,370" />
          <polygon points="180,60 350,40 500,150 310,140" />
          <polygon points="310,140 500,150 610,320 460,230" />
          <polygon points="350,370 460,230 610,320 500,470" />
          <polygon points="140,320 210,260 350,370 260,480" />

          <line x1="80" y1="140" x2="350" y2="370" />
          <line x1="180" y1="60" x2="460" y2="230" />
          <line x1="310" y1="140" x2="500" y2="470" />
          <line x1="140" y1="320" x2="310" y2="140" />
        </g>
      </svg>
    </div>
  )
}

/* =======================
   APP
   ======================= */
export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      {/* Fondo fijo (no se repinta al hacer scroll) */}
      <BackgroundVisual />

      {/* Contenido scrolleable */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Home />
      </div>
    </ThemeProvider>
  )
}

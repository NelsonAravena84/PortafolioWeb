import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Home from './Pages/Home'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121313',
    },
    text: {
      primary: '#ffffff',
    },
  },
})

const starStyles = {
  position: 'absolute',
  width: '2px',
  height: '2px',
  backgroundColor: 'white',
  borderRadius: '50%',
  animation: 'twinkle 3s infinite ease-in-out',
  opacity: 0.8,
}

const starsCount = 400

function randomPosition() {
  return {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${1 + Math.random() * 3}s`,
  }
}

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#000' }}>
        {/* Contenedor de estrellas */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          {[...Array(starsCount)].map((_, i) => {
            const pos = randomPosition()
            return (
              <div
                key={i}
                style={{
                  ...starStyles,
                  top: pos.top,
                  left: pos.left,
                  animationDelay: pos.animationDelay,
                  animationDuration: pos.animationDuration,
                }}
              />
            )
          })}
        </div>

        {/* Contenido encima */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Home />
        </div>

        {/* Estilos para animación */}
        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 0.2; transform: scale(0.8); }
          }
        `}</style>
      </div>
    </ThemeProvider>
  )
}

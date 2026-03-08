import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const TempBG = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = {
        fullScreen: { enable: false }, // Desactivamos el fullscreen para que se quede dentro de la sección
        background: {
            color: { value: "transparent" },
        },
        fpsLimit: 120,
nteractivity: {
    detect_on: "window", // Corregido: sin la "ed"
    events: {
        onHover: {
            enable: true,
            mode: "parallax", // Movimiento suave de la red
        },
        onClick: {
            enable: true,
            mode: "push", // Agrega más partículas al dar clic
        }
    },
    modes: {
        parallax: {
            enable: true,
            force: 100, // Subí la fuerza para que el movimiento sea más obvio
            smooth: 10,
        },
        push: {
            quantity: 4,
        }
    },
},
        particles: {
            color: { value: "#ff00ff" },
            links: {
                color: "#ff00ff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
            },
            number: {
                value: 100,
            },
            opacity: {
                value: 0.8,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 4 },
            },
        },
        detectRetina: true,
    };

    if (init) {
        return (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <Particles
                    id="tsparticles"
                    options={options}
                    className="h-full w-full"
                    style={{ height: '100%', width: '100%' }}
                />
            </div>
        );
    }

    return null;
};

export default TempBG;
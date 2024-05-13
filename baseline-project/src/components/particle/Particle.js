import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import { useEffect } from "react";
import { useCallback, useState, useRef } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Typewriter from "../animate-text/TextAnimate";
import CustomButton from "../button/Button.tsx";

export function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
  }, []);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const wordsRef = useRef([]);

  useEffect(() => {
    const words = wordsRef.current;

    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const options = {
    name: "Polygon Mask",
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onDiv: {
          elementId: "repulse-div",
          enable: false,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 6,
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 400,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        slow: {
          active: false,
          radius: 0,
          factor: 1,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        blink: false,
        color: "#ffffff",
        consent: false,
        distance: 30,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        outModes: "bounce",
        speed: 1,
      },
      number: {
        limit: 0,
        value: 200,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 2,
          sync: false,
        },
        value: {
          min: 0.05,
          max: 0.4,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 1,
      },
    },
    polygon: {
      draw: {
        enable: true,
        lineColor: "rgba(255,255,255,0.2)",
        lineWidth: 1,
      },
      enable: true,
      move: {
        radius: 10,
      },
      inline: {
        arrangement: "equidistant",
      },
      scale: 1,
      type: "inline",
      url: "https://particles.js.org/images/smalldeer.svg",
    },
    background: {
      color: "#000000",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
  };

  return (
    <Box
      className={styles.App}
      style={{ height: "100vh", display: "grid", placeContent: "center" }}
    >
      <Box className=" p-4 md:p-12 ">
        <Container maxWidth="xl ">
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* ----------- Content Section ---------- */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {/* First word horizontally */}
                  <Typography
                    variant="h3"
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontFamily: "-moz-initial",
                      mb: 2,
                      zIndex: 999,
                    }}
                  >
                     Team Of <Typewriter texts={["Developers", "Professionals", "Skillfulls"]} delay={200} infinite />
                  </Typography>

                 
                </Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                    color: "#fff",
                    mb: 4,
                    zIndex: 9999,
                    textAlign: 'left',
                  }}
                >
                  Baseline IT Development has a team of professionals with one
                  mission of empowering the lives through intense solutions of
                  technology. We invite clients, partners, and employees to join
                  us for business development as well as career development. Our
                  experts provide top-tier services in web development,
                  designing, maintenance, support, testing, and optimization.
                  24/7 assistance, great support, and quality coding are in
                  priority while working. Newcomers working here will be exposed
                  to a variety of learning opportunities across projects and
                  challenges, all of which are meant to bring out the best in
                  them every day.
                </Typography>
                {/* <Button
                  variant="contained"
                  className="text-white w-full md:w-[200px]"
                  sx={{
                    "&:hover": { backgroundColor: "#F1D625" },
                    backgroundColor: "#F1D625",
                  }}
                >
                  View
                </Button> */}
                <CustomButton text={"View"}/>

              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Particles id="tsparticles" options={options} init={particlesInit} />
    </Box>
  );
}

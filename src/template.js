const b64 = require("./fonts/base64.js");
const punky = b64.punky;


template = function(configgers) {
    const animations = {
        "fall":
            `@keyframes fall {
                    0% {
                        fill: transparent;
                        transform: scale(20, 20);
                    }
                    50% {
                        fill: #${configgers.text_color};
                        transform: scale(1, 1);
                    }
                    55% {
                        fill: #${configgers.text_color};
                        transform: translate(10px, 10px);
                    }
                    60% {
                        fill: red;
                        transform: translate(-10px, 5px);
                    }
                    70% {
                        fill: red;
                        transform: translate(5px, 10px);
                    }
                    80% {
                        fill: #${configgers.text_color};
                        transform: translate(-5px, 2px);
                    }
                    90% {
                        fill: red;
                        transform: translate(3px, 3px);
                    }
                    100% {
                        fill: #${configgers.text_color};
                        transform: translate(2px, 2px);
                    }
                }`,
        "rainbow":
            `@keyframes rainbow {
                    0% {
                        fill: red;
                    }

                    14% {
                        fill: orange;
                    }

                    28% {

                        fill: yellow;
                    }

                    42% {
                        fill: green;
                    }

                    56% {
                        fill: cyan;
                    }

                    70% {
                        fill: blue;
                    }

                    84% {
                        fill: purple;
                    }

                    100% {
                        fill: red;
                    }
                }`,
        "wave":
            `@keyframes wave {
                0% {
                    fill: #${configgers.text_color};
                }
                100% {
                    fill: #${configgers.text_color};
                }
            }`
    }

    if (configgers.animation == "wave") {
        var sinMatrix = Array.from(Array(16), () => new Array(configgers.text.length));
        for (let frame=0;frame<16;frame++) {
            for (let c=0;c<configgers.text.length;c++){
                sinMatrix[frame][c] = Math.round((Math.sin((frame+(c)))*8)-(Math.sin((frame+c-1))*8));
            }
        }
    }

    var element = `
        <svg width="${configgers.width}" height="${configgers.height}" viewBox="0 0 ${configgers.width} ${configgers.height}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <style>

            ${(configgers.font == 'punky') ? `@font-face {
                font-family: 'punky';
                src: url(${punky}) format('truetype');
            }` : ''}

            .THEtext {
                font-family: '${configgers.font}', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif';
                fill: transparent;
                font-size: ${configgers.font_size}px;
                animation-name: ${configgers.animation};
                animation-duration: ${configgers.duration}s;
                animation-timing-function: ${(configgers.animation=="fall") ? "ease-in" : "linear"};
                animation-fill-mode: forwards;
                animation-iteration-count: ${configgers.iteration_count};
                animation-delay: ${configgers.delay}s;
                transform-origin: center;
            }

            ${animations[configgers.animation] || ""}


        </style>
    <text class="THEtext" x="${configgers.anchor == "middle" ? "50" : (configgers.anchor == "end" ? "100" : "0")}%" y="${configgers.dominant_baseline == "middle" ? "50" : (configgers.dominant_baseline == "auto" ? "100" : "0")}%" dominant-baseline="${configgers.dominant_baseline}" text-anchor="${configgers.anchor}">${configgers.text}
    ${(configgers.animation=="wave") ? `<animate attributeName="dy" values="${sinMatrix.join(";")}" dur="${configgers.duration}s" repeatCount="${configgers.iteration_count == "infinite" ? "indefinite" : configgers.iteration_count}" />` : ''}</text>
    </svg>
    `

    return element;
}

module.exports = template;

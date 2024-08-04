

export default function template(configgers) {

    var element = `
        <svg width="${configgers.width}" height="${configgers.height}" viewBox="0 0 ${configgers.width} ${configgers.height}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <style>

            @font-face {
                font-family: punky;
                src: url("fonts/Punky Wunky.ttf");
            }

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

            @keyframes fall {
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
            }

            @keyframes rainbow {
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
            }


        </style>
    <text class="THEtext" x="${configgers.anchor == "middle" ? "50%" : "0%"}" y="50%" dominant-baseline="middle" text-anchor="${configgers.anchor}">${configgers.text}</text>
    </svg>
    `

    return element;
}

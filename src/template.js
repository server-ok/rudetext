

export default function template(configgers) {
    var element = `
        <svg width="500" height="200" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <style>

            @font-face {
                font-family: punky;
                src: url("fonts/Punky Wunky.ttf");
            }

            .THEtext {
                font-family: '${configgers.font}', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif';
                fill: #${configgers.text_color};
                font-size: ${configgers.font_size}px;
                animation-name: ${configgers.animation};
                animation-duration: 0.5s;
                animation-timing-function: ease-in;
                animation-fill-mode: forwards;
                animation-delay: ${configgers.delay};
                transform-origin: center;
            }

            @keyframes fall {
                0% {
                    color: transparent;
                    transform: scale(1.5, 1.5);
                }
                50% {
                    color: #${configgers.text_color};
                    transform: scale(1, 1);
                }
                55% {
                    color: #${configgers.text_color};
                    transform: translate(10px, 10px);
                }
                60% {
                    color: red;
                    transform: translate(-10px, 5px);
                }
                70% {
                    color: red;
                    transform: translate(5px, 10px);
                }
                80% {
                    color: #${configgers.text_color};
                    transform: translate(-5px, 2px);
                }
                90% {
                    color: red;
                    transform: translate(3px, 3px);
                }
                100% {
                    color: #${configgers.text_color};
                    transform: translate(2px, 2px);
                }
            }


        </style>
    <text class="THEtext" x="250" y="100">${configgers.text}</text>
    </svg>
    `

    return element;
}

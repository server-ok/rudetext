

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
                font-size: 14px;
            }

        </style>
    <text class="THEtext" x="250" y="100">${configgers.text}</text>
    </svg>
    `

    return element;
}



export default function template(configgers) {
    var element = `
        <svg width="495" height="195" viewBox="0 0 495 195" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <style>

            .THEtext {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                fill: #${configgers.text_color};
                font-size: 14px;
            }

        </style>
    <text class="THEtext">#${configgers.text}</text>
    </svg>
    `

    return element;
}

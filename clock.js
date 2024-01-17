import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import hljs from 'highlight.js';


export function createClock(timeZone) {
    const clock = document.createElement("div");

    document.querySelector('#horloges').appendChild(clock);

    const text = document.createElement("p");

    text.innerHTML = timeZone;

    clock.appendChild(text);

    setInterval(() => {
        text.innerHTML = timeZone + ' : ' + format(
            utcToZonedTime(new Date(), timeZone),
            'h:mm:ss a'
        )
    });
}


export function createHighLight() {
    const highlightedCode = hljs.highlightAuto(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Les horloges du monde</h1>
    
        <div id="horloges">
            
        </div>
    </body>
    </html>
    `).value;

    const div = document.createElement("div");

    div.innerHTML = highlightedCode;
    div.classList.add("code");

    document.querySelector('#horloges').appendChild(div);
}
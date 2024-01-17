import './style.css';
import 'highlight.js/styles/github.css';
import { createClock, createHighLight } from './clock.js';

function useless() {
    console.log('useless');
}

createClock("America/New_York");
createClock("Europe/London");
createClock("Asia/Tokyo");

createHighLight();
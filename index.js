import './style.css';
import { createClock } from './clock.js';

function useless() {
    console.log('useless');
}

createClock("America/New_York");
createClock("Europe/London");
createClock("Asia/Tokyo");
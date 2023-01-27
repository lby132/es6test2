// import {increase, getCount } from "./counter.js"
import * as counter from "./counter.js" //모든 것들을 counter에 담아서 가져온다.

counter.increase();
console.log(counter.getCount())

increase();
const count = getCount();
console.log(count)

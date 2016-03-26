import {Greeter} from "./app/greeter";

const greeter = new Greeter();

export function welcome(name) {
    alert(greeter.greet(name));
}

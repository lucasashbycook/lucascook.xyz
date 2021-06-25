import { h } from "./h";

export async function *Example() {

    const result = await new Promise(resolve => setTimeout(resolve, 10, "🐸"));

    yield `${result} ${result}`;

}

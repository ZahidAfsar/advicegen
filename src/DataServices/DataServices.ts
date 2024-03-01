import adviceGen from "../Interfaces/interfaces";

const getData = async () => {
    const promise = await fetch('https://api.adviceslip.com/advice')
    const data: adviceGen = await promise.json()
    return data;
}

export default getData
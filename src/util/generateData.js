import { imgData } from './imgData';

export default function generateData(){

  const shuffle = array => {
    const ramdomSort = (a,b) => 
      0.5 - Math.random();
    
    return array.sort(ramdomSort);
  }

  const generate = array => {
    const data = array.reduce((acc,element) => {
      acc.push(element);
      acc.push(element);
      return acc;
    }, []);

    return data;
  }
  return shuffle(generate(imgData))
}


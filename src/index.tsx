import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);



class Tfgh{
  fds = 45;
  fdsf = 323;
}


let obj = new Tfgh();

console.dir(obj);
console.dir(obj.constructor);
console.dir(obj.constructor.prototype);
console.dir(obj.constructor.prototype.constructor);
console.dir(obj.constructor.prototype.prototype);

let ob23j = {a: 1, b: 2, c: 3};

console.log(ob23j);
console.dir(ob23j);
console.dir(ob23j.constructor);

console.log(ob23j instanceof Object);
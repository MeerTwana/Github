import { useState } from "react";
import "./index.css";



const sum = (a, b) => a + b;
console.log(sum(5,6));


const hi = (c,d) => c*d;
console.log(hi(10,12));



const employee = ['hana', 'mustafa','meer']
console.log(employee);
employee.push('rawand');
console.log(employee);

const findPerson= employee.findIndex((person)=> {
  return person=='rawand';
})
console.log(findPerson);


const edditedEmployee=employee.map((person1)=>person1+"!!");
console.log(edditedEmployee);

const user={
  name :"meer",
  age:24,
  movie:"game of throns "
  };
  console.log(user);
  console.log(user.movie);


const worker =['Zheer','Twana'];
const FirstName = worker[0];
const LastName = worker[1];


console.log(FirstName + LastName); 
//or

const [FirstName1,LastName1]=['meer','twana','Hana','xasro'];
console.log(FirstName1 + LastName1); 




const {name,age}= {
  name : "Meer",
  age : 24
};
console.log(name + age );


const newMovie={
movie2:"La Casa De papel",
...user
};
console.log(newMovie);


const Password = prompt("Enter Your password");
if(Password==="Meer1234"){
  console.log("Meer1234  works and you can enter");
}else if(Password==="meer1234") {
  console.log("meer1234 works");
}else{
  console.log("You can't eneter")
}




const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there"
  ]
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
          <button
            className={activeContentIndex===3 ? "active" :""}
            onClick={()=> setActiveContentIndex(3)} 
  >
    React vs JS 
            </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

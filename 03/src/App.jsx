import React, { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input'; 
import Calculation from './components/Calculation';

function App() {
    const [UserInput, SetInput] = useState({
      initialInvestment: 15000,
      annualInvestment: 2000,
      expectedReturn: 10,
        duration: 5,
    });

    function whileChange(Identifiy, InputValue) {
        SetInput(prevUserInput => {
            return {
                ...prevUserInput,
                [Identifiy]: InputValue
            };
        });
    }

    return (
        <div>
            <Header />
            <main>
                <Input UserInput={UserInput} onChange={whileChange} />
                <Calculation Input={UserInput} />
            </main>
        </div>
    );
}

export default App;

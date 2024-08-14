import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <>
   
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}

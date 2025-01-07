
import './App.css';
import { UseStringStateExample } from './components/UseStringStateExample';
import UseStateExample from './components/UseStateExample';
import FormExample from './components/FormExample';
import UseCounterEffect from './components/UseCounterEffect';
import { UseStringEffectExample } from './components/UseStringEffectExample';

//<FormExample/>
function App() {
  return (
<div>
<h1>
    HOOKS
   </h1>
   <UseStateExample />
   <UseStringStateExample />
   <UseCounterEffect/>
   <UseStringEffectExample/>
   
</div>

  
  
  );
}

export default App;

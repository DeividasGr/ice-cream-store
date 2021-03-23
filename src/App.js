import Options from './pages/entry/Options';
import SummaryForm from './pages/summary/SummaryForm';

function App() {
  return (
    <div>
      <SummaryForm />
      <Options optionType="toppings" />
    </div>
  );
}

export default App;

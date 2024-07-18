const App = (props) => {
  const { initialButtonText, initialClassesList } = props;
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [buttonColor, setButtonColor] = React.useState(initialClassesList);
  const onButtonClick = () => {
    setButtonText('Hello from React!');
    setButtonColor('green-btn');
  };
  return (
    <div className="app">
      <button onClick={onButtonClick} className={buttonColor}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me!" initialClassesList="" />);

import './App.css';

function Box({width=100, height=100, background='red', remove, id}) {
  const handleDelete = () => {remove(id)}
  return (
    <div>
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: background
        }}
      />
      <button onClick={handleDelete}>Remove The Box!</button>
    </div>
  );
}

export default Box;
import React, { useState } from 'react';

function TimeTracker({ task, onSave }) {
  const [time, setTime] = useState(0);
  const [description, setDescription] = useState('');

  const handleStartClick = () => {
    setTime(Date.now());
  };

  const handleStopClick = () =>
  {
 const elapsedTime = Math.floor((Date.now() - time) / 1000 / 60 / 60);
  
setTime(0);
setDescription('');
onSave(description, elapsedTime);
};

const handleDescriptionChange = (event) => {
setDescription(event.target.value);
};

return (
<div>
<h2>Track Time for {task.name}</h2>
<button onClick={handleStartClick}>Start</button>
<button onClick={handleStopClick}>Stop</button>
<form>
<label>
Description:
<input type="text" value={description} onChange={handleDescriptionChange} />
</label>
<button type="button" onClick={handleStopClick}>
Save Time
</button>
</form>
</div>
);
}

export default TimeTracker;



import React from 'react';
import { Paper } from '@material-ui/core';

function Info(props) {
  return (
    <Paper style={{marginTop: 70, borderRadius:20, textAlign: 'center'}}>
      <div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Autem delectus earum eius laboriosam, laborum nemo nesciunt placeat porro provident,
          soluta tempora ullam? Dicta doloremque eum iste sapiente. Animi, eum voluptas.
        </h1>
      </div>
    </Paper>
  );
}

export default Info;
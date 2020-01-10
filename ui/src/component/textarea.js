import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function MaxHeightTextarea() {
  return (
    <TextareaAutosize
      rowsMax={8}
      aria-label="maximum height"
      placeholder="Enter Your Address"
      defaultValue=""
    />
  );
}
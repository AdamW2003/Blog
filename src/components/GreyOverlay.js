import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

const GreyOverlay = ({ show, onClick }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    setVisible(show);
  }, [show]);

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    zIndex: 999,
    opacity: visible ? 1 : 0, 
    transition: 'opacity 300ms', 
    pointerEvents: visible ? 'auto' : 'none',
  };

  return <Box style={overlayStyle} onClick={onClick}></Box>;
};

export default GreyOverlay;

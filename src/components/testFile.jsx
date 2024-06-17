import React from 'react'
import { useLocation } from 'react-router-dom'
function TestFile() {
  const location = useLocation();
  const data = new URLSearchParams(location.search);
  
return (
    <div>
      {data}
    </div>
  )
}

export default TestFile

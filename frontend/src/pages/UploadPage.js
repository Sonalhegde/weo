import React, { useState } from 'react';
import axios from 'axios';

function UploadPage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const upload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:5000/upload", formData);
    setMessage(res.data.message);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📁 Upload CSV File</h2>
      <input type="file" accept=".csv" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={upload}>Upload</button>
      <p>{message}</p>
    </div>
  );
}

export default UploadPage;

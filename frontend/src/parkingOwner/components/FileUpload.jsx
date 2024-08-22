import React, { useState } from 'react';
import Compressor from 'compressorjs';
import '../styles/FileUpload.css';

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  // Handle file selection
  const handleChange = (event) => {
    const selectedFiles = Array.from(event.target.files).filter(file =>
      file.type.startsWith('image/')
    );
    
    const compressedFiles = selectedFiles.map(file => {
      return new Promise((resolve) => {
        new Compressor(file, {
          quality: 0.6,
          success(result) {
            resolve({
              file: result,
              previewURL: URL.createObjectURL(result)
            });
          },
          error(err) {
            console.error(err.message);
          },
        });
      });
    });

    Promise.all(compressedFiles).then(fileResults => {
      setFiles(prevFiles => [...prevFiles, ...fileResults]);
    });
  };

  // Remove a file from the preview list
  const handleRemove = (file) => {
    setFiles(prevFiles => prevFiles.filter(f => f.file !== file.file));
    URL.revokeObjectURL(file.previewURL); // Clean up the URL object
  };

  return (
    <div className="upload-container">
      <div className="upload-area" onClick={() => document.getElementById('fileInput').click()}>
        <i className="fas fa-cloud-upload-alt"></i>
        <p>Drag & Drop your images here or click to select files</p>
        <input
          type="file"
          id="fileInput"
          multiple
          accept="image/*"
          onChange={handleChange}
        />
      </div>
      <div className="file-list">
        {files.map((file, index) => (
          <div key={index} className="file-item">
            <img src={file.previewURL} alt={`Preview ${index}`} />
            <button className="remove-btn" onClick={() => handleRemove(file)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;

import React, { useState } from 'react';
import * as XLSX from 'sheetjs-style';

const MicroserviceForm = () => {
  const [formData, setFormData] = useState({
    tableName: '',
    type: '',
    sourceName: '',
    destinationName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Structure data with field names and values
    const structuredData = [
      ["Table Name", formData.tableName],
      ["Type", formData.type],
      ["Source Name", formData.sourceName],
      ["Destination Name", formData.destinationName]
    ];

    // Create worksheet
    const ws = XLSX.utils.aoa_to_sheet(structuredData);

    // Create workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Export to Excel
    XLSX.writeFile(wb, "MicroserviceData.xlsx");
  };

  return (
    <div className="container mt-5">
      <h2>Microservice Creation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Table Name</label>
          <input
            type="text"
            className="form-control"
            name="tableName"
            value={formData.tableName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Type</label>
          <select
            className="form-select"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Source Name</label>
          <input
            type="text"
            className="form-control"
            name="sourceName"
            value={formData.sourceName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Destination Name</label>
          <input
            type="text"
            className="form-control"
            name="destinationName"
            value={formData.destinationName}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default MicroserviceForm;

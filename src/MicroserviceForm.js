import React, { useState } from 'react';
import * as XLSX from 'sheetjs-style'; // Correct import from 'xlsx'

const MicroserviceForm = () => {
  const [formData, setFormData] = useState({
    moduleName: '',
    tableName: '',
    type: '',
    sourceName: '',
    destinationName: '',
    tag1: '',
    tag2: '',
    tag3: '',
    tag4: '',
    tag5: '',
    tag6: '',
    tag7: '',
    tag8: '',
    tag9: '',
    tag10: ''
  });

  const [rows, setRows] = useState([
    { selectionCriteria: 'sc-1', label: '', fieldType: '', fieldVariable: '', localVariable: '', helper: '', helperFunction: '', arrayName: '' }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRowChange = (index, e) => {
    const { name, value } = e.target;
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [name]: value } : row
    );
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    const newSelectionCriteria = `sc-${rows.length + 1}`;
    setRows([
      ...rows,
      { selectionCriteria: newSelectionCriteria, label: '', fieldType: '', fieldVariable: '', localVariable: '', helper: '', helperFunction: '', arrayName: '' }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Structure data with field names and values for the first form
    const basicDetails = [
      [{ v: "Basic Detail", s: { font: { bold: true } } }, ""],
      ["", ""], 
      ["", ""], 
      ["Module", formData.moduleName],
      ["Table Name", formData.tableName],
      ["Type", formData.type],
      ["Source Name", formData.sourceName],
      ["Destination Name", formData.destinationName],
      ["Tag_1", formData.tag1],
      ["Tag_2", formData.tag2],
      ["Tag_3", formData.tag3],
      ["Tag_4", formData.tag4],
      ["Tag_5", formData.tag5],
      ["Tag_6", formData.tag6],
      ["Tag_7", formData.tag7],
      ["Tag_8", formData.tag8],
      ["Tag_9", formData.tag9],
      ["Tag_10", formData.tag10]
    ];

    // Structure data with field names and values for the second form
    const selectionCriteriaDetails = [
      [
        { v: "Selection Criteria", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Label", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Field Type", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Field Variable", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Local Variable", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Helper", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Helper Function", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Array Name", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } }
      ],
      ...rows.map(row => [row.selectionCriteria, row.label, row.fieldType, row.fieldVariable, row.localVariable, row.helper, row.helperFunction, row.arrayName])
    ];

    // Combine both data sets
    const combinedData = [...basicDetails, ...selectionCriteriaDetails];

    // Create worksheet
    const ws = XLSX.utils.aoa_to_sheet(combinedData);

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
        <div className="row">
          <div className="col-md-6">
            <div className="table-responsive">
              <table className="table table-bordered table-dark">
                <tbody>
                  <tr>
                    <td>Module</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="moduleName"
                        value={formData.moduleName}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Table Name</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="tableName"
                        value={formData.tableName}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>
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
                    </td>
                  </tr>
                  <tr>
                    <td>Source Name</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="sourceName"
                        value={formData.sourceName}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Destination Name</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="destinationName"
                        value={formData.destinationName}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_1</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="tag1"
                        value={formData.tag1}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_2</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="tag2"
                        value={formData.tag2}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_3</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="tag3"
                        value={formData.tag3}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_4</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="tag4"
                        value={formData.tag4}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_5</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="tag5"
                        value={formData.tag5}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_6</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="tag6"
                        value={formData.tag6}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_7</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="tag7"
                        value={formData.tag7}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_8</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="tag8"
                        value={formData.tag8}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_9</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="tag9"
                        value={formData.tag9}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_10</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="tag10"
                        value={formData.tag10}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4>Selection Criteria Detail</h4>
            <button type="button" className="btn btn-primary" onClick={handleAddRow}>Add Row</button>
            <br /><br />
            <div className="table-responsive">
              <table className="table table-bordered table-dark">
                <thead>
                  <tr>
                    <th>Selection Criteria</th>
                    <th>Label</th>
                    <th>Field Type</th>
                    <th>Field Variable</th>
                    <th>Local Variable</th>
                    <th>Helper</th>
                    <th>Helper Function</th>
                    <th>Array Name</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="selectionCriteria"
                          value={row.selectionCriteria}
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="label"
                          value={row.label}
                          onChange={(e) => handleRowChange(index, e)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="fieldType"
                          value={row.fieldType}
                          onChange={(e) => handleRowChange(index, e)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="fieldVariable"
                          value={row.fieldVariable}
                          onChange={(e) => handleRowChange(index, e)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="localVariable"
                          value={row.localVariable}
                          onChange={(e) => handleRowChange(index, e)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="helper"
                          value={row.helper}
                          onChange={(e) => handleRowChange(index, e)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="helperFunction"
                          value={row.helperFunction}
                          onChange={(e) => handleRowChange(index, e)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="arrayName"
                          value={row.arrayName}
                          onChange={(e) => handleRowChange(index, e)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default MicroserviceForm;

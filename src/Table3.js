import React, { useState } from 'react';
import * as XLSX from 'sheetjs-style';

const Sample = () => {
  const [rows, setRows] = useState([
    { selectionCriteria: 'sc-1', label: '', fieldType: '', fieldVariable: '', localVariable: '', helper: '', helperFunction: '', arrayName: '' }
  ]);

  const handleChange = (index, e) => {
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

  const handleRemoveRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const structuredData1 = [
      [{ v: "Basic Detail", s: { font: { bold: true } } }, ""],
      ["", ""],
      ["", ""],
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

    const ws = XLSX.utils.aoa_to_sheet(structuredData1);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, "MicroserviceData.xlsx");
  };

  return (
    <div className="container mt-5">
      <h2>Microservice Creation</h2>
      <h4>Selection Criteria Detail</h4>
      <button type="button" className="btn btn-primary" onClick={handleAddRow}>Add Row</button>
      <br /><br />
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered table-primary">
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
                    <th>Action</th>
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
                          onChange={(e) => handleChange(index, e)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="fieldType"
                          value={row.fieldType}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="fieldVariable"
                          value={row.fieldVariable}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="localVariable"
                          value={row.localVariable}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="helper"
                          value={row.helper}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="helperFunction"
                          value={row.helperFunction}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="arrayName"
                          value={row.arrayName}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleRemoveRow(index)}
                        >
                          -
                        </button>
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

export default Sample;

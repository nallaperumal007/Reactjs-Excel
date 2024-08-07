import React, { useState } from 'react';
import * as XLSX from 'sheetjs-style';

const Sample = () => {
  const [rows, setRows] = useState([
    { ColumnName: '', Datatype: '', MandatoryOptional: '', Default: '', AnyConstraint: '', PrimaryKey: '', Label: '', Code_table: '', ForeignKey: '', Page: '', Component: '', repository: '', routes: '', getpagedet: '', getrecord: '', Remarks: '' }
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [name]: value } : row
    );
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows([
      ...rows,
      { ColumnName: '', Datatype: '', MandatoryOptional: '', Default: '', AnyConstraint: '', PrimaryKey: '', Label: '', Code_table: '', ForeignKey: '', Page: '', Component: '', repository: '', routes: '', getpagedet: '', getrecord: '', Remarks: '' }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const structuredData1 = [
      [{ v: "Basic Detail", s: { font: { bold: true } } }, ""],
      ["", ""],
      ["", ""],
      [
        { v: "ColumnName", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Datatype", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "MandatoryOptional", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Default Value", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "AnyConstraint", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "PrimaryKey", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Label", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Code_table", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "ForeignKey", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Page", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Component", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Repository", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Routes", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "GetPageDet", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "GetRecord", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Remarks", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } }
      ],
      ...rows.map(row => [
        row.ColumnName, row.Datatype, row.MandatoryOptional, row.Default, row.AnyConstraint, row.PrimaryKey, row.Label, row.Code_table, row.ForeignKey, row.Page, row.Component, row.repository, row.routes, row.getpagedet, row.getrecord, row.Remarks
      ]),
      [
        "is_status_id",
        "int",
        "Mandatory",
        "1",
        "none",
        "none",
        "Record Status",
        "CODE_LC_STATUS",
        "id from CODE_LC_STATUS",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "YES",
        "10"
      ]
    ];

    const ws = XLSX.utils.aoa_to_sheet(structuredData1);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "MicroserviceData.xlsx");
  };

  return (
    <div className="container mt-5">
      <h4>Table Details</h4>
      <button type="button" className="btn btn-primary" onClick={handleAddRow}>Add Row</button>
      <br /><br />
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
              <table className="table table-bordered table-dark">
                <thead>
                  <tr>
                    <th>Column Name</th>
                    <th>Data Type</th>
                    <th>Mandatory/optional</th>
                    <th>Default value</th>
                    <th>Any Constraints</th>
                    <th>Primary Key</th>
                    <th>Label</th>
                    <th>Code Table</th>
                    <th>Foreign Key</th>
                    <th>Page</th>
                    <th>Component</th>
                    <th>Repository</th>
                    <th>Routes</th>
                    <th>Get Page Det</th>
                    <th>Get Record</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={index}>
                      {Object.keys(row).map((key) => (
                        <td key={key}>
                          <input
                            type="text"
                            className="form-control"
                            name={key}
                            value={row[key]}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="is_status_id"
                        value="is_status_id"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="int"
                        value="int"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="Mandatory"
                        value="Mandatory"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="1"
                        value="1"
                        readOnly 
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="none"
                        value="none"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="none"
                        value="none"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="Record Status"
                        value="Record status"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="CODE_LC_STATUS"
                        value="CODE_LC_STATUS"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="id from CODE_LC_STATUS"
                        value="id from CODE_LC_STATUS"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="NO"
                        value="NO"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="NO"
                        value="NO"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="NO"
                        value="NO"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="NO"
                        value="NO"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="NO"
                        value="NO"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="YES"
                        value="YES"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="Remarks"
                        value="10"
                        
                      />
                    </td>
                  </tr>
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

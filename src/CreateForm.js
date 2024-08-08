import React, { useState } from 'react';
import * as XLSX from 'sheetjs-style';

const CreateForm = () => {
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
    { ColumnName: '', Datatype: '', MandatoryOptional: '', Default: '', AnyConstraint: '', PrimaryKey: '', Label: '', Code_table: '', ForeignKey: '', Page: '', Component: '', repository: '', routes: '', getpagedet: '', getrecord: '', Remarks: '' }
  ]);

  const [selectionRows, setSelectionRows] = useState([
    { selectionCriteria: 'sc-1', label: '', fieldType: '', fieldVariable: '', localVariable: '', helper: '', helperFunction: '', arrayName: '' }
  ]);

  const handleFormDataChange = (e) => {
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

  const handleSelectionRowChange = (index, e) => {
    const { name, value } = e.target;
    const updatedRows = selectionRows.map((row, i) =>
      i === index ? { ...row, [name]: value } : row
    );
    setSelectionRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows([
      ...rows,
      { ColumnName: '', Datatype: '', MandatoryOptional: '', Default: '', AnyConstraint: '', PrimaryKey: '', Label: '', Code_table: '', ForeignKey: '', Page: '', Component: '', repository: '', routes: '', getpagedet: '', getrecord: '', Remarks: '' }
    ]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };
  

  const handleAddSelectionRow = () => {
    const newSelectionCriteria = `sc-${selectionRows.length + 1}`;
    setSelectionRows([
      ...selectionRows,
      { selectionCriteria: newSelectionCriteria, label: '', fieldType: '', fieldVariable: '', localVariable: '', helper: '', helperFunction: '', arrayName: '' }
    ]);
  };
  const handleRemoveSelectionRow = (index) => {
    const updatedRows = selectionRows.filter((_, i) => i !== index);
    setSelectionRows(updatedRows);
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();

    const basicDetails = [
      [{ v: "Basic Detail", s: { font: { bold: true } } }, ""],
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

    const tableDetails = [
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
      [
        "id",
        "int",
        "Mandatory",
        "none",
        "Auto Increment",
        "YES",
        "ID",
        "",
        "",
        "YES",
        "NO",
        "NO",
        "NO",
        "YES",
        "YES",
        "10"
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
      ],
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
      ],
      [
        "is_active",
        "varchar(20)",
        "Mandatory",
        "active",
        "none",
        "none",
        "Is Active",
        "",
        "",
        "NO",
        "NO",
        "NO",
        "NO",
        "YES",
        "YES",
        ""
      ],
      [
        "Created_at",
        "timestamp",
        "Mandatory",
        "Current_timestamp",
        "none",
        "none",
        "Created_At",
        "",
        "",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        ""
      ],
      [
        "Created_by",
        "varchar(50)",
        "Mandatory",
        "base_pack",
        "none",
        "none",
        "Created_By",
        "",
        "",
        "NO",
        "NO",
        "YES",
        "YES",
        "YES",
        "YES",
        ""
      ],
      [
        "tnnt_id",
        "int",
        "Mandatory",
        "1",
        "none",
        "none",
        "TnntId",
        "",
        "",
        "NO",
        "NO",
        "YES",
        "YES",
        "NO",
        "NO",
        ""
      ]
    ];

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
      ...selectionRows.map(row => [
        row.selectionCriteria, row.label, row.fieldType, row.fieldVariable, row.localVariable, row.helper, row.helperFunction, row.arrayName
      ])
    ];

    const combinedData = [...basicDetails, ...tableDetails, ...selectionCriteriaDetails];

    const ws = XLSX.utils.aoa_to_sheet(combinedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "MicroserviceData.xlsx");
  };

  return (
    <div className="container mt-5">
      <h2>Microservice Creation</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="table-responsive">
              <table className="table table-bordered table-primary">
                <tbody>
                  <tr>
                    <td>Module</td>
                    <td>
                      <input type="text" name="moduleName" value={formData.moduleName} onChange={handleFormDataChange} className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>Table Name</td>
                    <td>
                      <input type="text" name="tableName" value={formData.tableName} onChange={handleFormDataChange} className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>
                      <input type="text" name="type" value={formData.type} onChange={handleFormDataChange} className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>Source Name</td>
                    <td>
                      <input type="text" name="sourceName" value={formData.sourceName} onChange={handleFormDataChange} className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>Destination Name</td>
                    <td>
                      <input type="text" name="destinationName" value={formData.destinationName} onChange={handleFormDataChange} className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_1</td>
                    <td>
                      <input type="text" name="tag1" value={formData.tag1} onChange={handleFormDataChange} className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_2</td>
                    <td>
                      <input type="text" name="tag2" value={formData.tag2} onChange={handleFormDataChange} className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_3</td>
                    <td>
                      <input type="text" name="tag3" value={formData.tag3} onChange={handleFormDataChange} className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_4</td>
                    <td>
                      <input type="text" name="tag4" value={formData.tag4} onChange={handleFormDataChange} className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_5</td>
                    <td>
                      <input type="text" name="tag5" value={formData.tag5} onChange={handleFormDataChange} className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_6</td>
                    <td>
                      <input type="text" name="tag6" value={formData.tag6} onChange={handleFormDataChange} className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_7</td>
                    <td>
                      <input type="text" name="tag7" value={formData.tag7} onChange={handleFormDataChange} className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_8</td>
                    <td>
                      <input type="text" name="tag8" value={formData.tag8} onChange={handleFormDataChange} className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_9</td>
                    <td>
                      <input type="text" name="tag9" value={formData.tag9} onChange={handleFormDataChange} className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>Tag_10</td>
                    <td>
                      <input type="text" name="tag10" value={formData.tag10} onChange={handleFormDataChange} className="form-control" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <h3>Table Details</h3>
        <button type="button" onClick={handleAddRow} className="btn btn-primary mb-3">Add Row</button>

        <div
          className="col-md-12"
          style={{ width: '200%' /* Adjust the percentage as needed */, backgroundColor: '#f8f9fa', padding: '20px' }}
        >
        <div className="table-responsive">
          <table className="table table-bordered table-primary">
            <thead>
              <tr>
                <th>Column Name</th>
                <th>Datatype</th>
                <th>Mandatory/Optional</th>
                <th>Default Value</th>
                <th>Any Constraint</th>
                <th>Primary Key</th>
                <th>Label</th>
                <th>Code_table</th>
                <th>Foreign Key</th>
                <th>Page</th>
                <th>Component</th>
                <th>Repository</th>
                <th>Routes</th>
                <th>GetPageDet</th>
                <th>GetRecord</th>
                <th>Remarks</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="id"
                        value="id"
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
                        name="None"
                        value="None"
                        readOnly 
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="AutoIncrement"
                        value="AutoIncrement"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="Yes"
                        value="Yes"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="ID"
                        value="ID"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        value=""
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="Yes"
                        value="Yes"
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
                        value=""
                        
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="const_type_name"
                        value="const_type_name"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="varchar(100)"
                        value="varchar(100)"
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
                        name="None"
                        value="None"
                        readOnly 
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="None"
                        value="None"
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
                        name="CONST TYPE NAME"
                        value="CONST TYPE NAME"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        value=""
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        value=""
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
                        name="YES"
                        value="YES"
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
                        name="YES"
                        value="YES"
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
                        value=""
                        
                      />
                    </td>
                  </tr>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td><input type="text" name="ColumnName" value={row.ColumnName} onChange={(e) => handleRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="Datatype" value={row.Datatype} onChange={(e) => handleRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="MandatoryOptional" value={row.MandatoryOptional} onChange={(e) => handleRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="Default" value={row.Default} onChange={(e) => handleRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="AnyConstraint" value={row.AnyConstraint} onChange={(e) => handleRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="PrimaryKey" value={row.PrimaryKey} onChange={(e) => handleRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="Label" value={row.Label} onChange={(e) => handleRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="Code_table" value={row.Code_table} onChange={(e) => handleRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="ForeignKey" value={row.ForeignKey} onChange={(e) => handleRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="Page" value={row.Page} onChange={(e) => handleRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="Component" value={row.Component} onChange={(e) => handleRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="repository" value={row.repository} onChange={(e) => handleRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="routes" value={row.routes} onChange={(e) => handleRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="getpagedet" value={row.getpagedet} onChange={(e) => handleRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="getrecord" value={row.getrecord} onChange={(e) => handleRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="Remarks" value={row.Remarks} onChange={(e) => handleRowChange(index, e)} className="form-control" /></td>
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
              <tr>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="ic_status_id"
                        value="ic_status_id"
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
                        value=""
                        
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="is_active"
                        value="is_active"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="varchar(20)"
                        value="varchar(20)"
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
                        name="active"
                        value="active"
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
                        name="is Active"
                        value="is Active"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        value=""
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        value=""
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
                        value=""
                        
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="created_at"
                        value="created_at"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="timestamp"
                        value="timestamp"
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
                        name="current_timestamp"
                        value="current_timestamp"
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
                        name="Created At"
                        value="Create At"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        value=""
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        value=""
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
                        name="NO"
                        value="NO"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="Remarks"
                        value=""
                        
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="created_by"
                        value="created_by"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="varchar(50)"
                        value="varchar(50)"
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
                        name="base_pack"
                        value="base_pack"
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
                        name="Created By"
                        value="Created By"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        value=""
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        value=""
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
                        name="YES"
                        value="YES"
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
                        value=""
                        
                      />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="tnnt_id"
                        value="tnnt_id"
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
                        name="Tnnt Id"
                        value="Tnnt Id"
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        value=""
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        value=""
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
                        name="YES"
                        value="YES"
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
                        name="Remarks"
                        value=""
                        
                      />
                    </td>
                    
                  </tr>
                 
            </tbody>
          </table>
        </div>
        </div>
       
        <h3>Selection Criteria Details</h3>
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
              {selectionRows.map((row, index) => (
                <tr key={index}>
                  <td>{row.selectionCriteria}</td>
                  <td><input type="text" name="label" value={row.label} onChange={(e) => handleSelectionRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="fieldType" value={row.fieldType} onChange={(e) => handleSelectionRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="fieldVariable" value={row.fieldVariable} onChange={(e) => handleSelectionRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="localVariable" value={row.localVariable} onChange={(e) => handleSelectionRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="helper" value={row.helper} onChange={(e) => handleSelectionRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="helperFunction" value={row.helperFunction} onChange={(e) => handleSelectionRowChange(index, e)} className="form-control" /></td>
                  <td><input type="text" name="arrayName" value={row.arrayName} onChange={(e) => handleSelectionRowChange(index, e)} className="form-control" /></td>
                  <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleRemoveSelectionRow(index)}
                      >
                        -
                      </button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button type="button" onClick={handleAddSelectionRow} className="btn btn-primary mb-3">Add Selection Criteria</button>

      
        <div className="d-grid">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;

import React, { useState } from 'react';
import * as XLSX from 'sheetjs-style';

const Sample = () => {
  const [rows, setRows] = useState([
    { ColumnName: '',Datatype: '', MandatoryOptional: '',Default: '', AnyConstraint: '', PrimaryKey: '', Label: '', Code_table: '',ForeignKey:'',Page:'',Component:'',repository:'',routes:'',getpagedet:'',getrecord:'',Remarks:'' }
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
      { ColumnName: '',Datatype: '', MandatoryOptional: '',Default: '', AnyConstraint: '', PrimaryKey: '', Label: '', Code_table: '',ForeignKey:'',Page:'',Component:'',repository:'',routes:'',getpagedet:'',getrecord:'',Remarks:'' }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Structure data with field names in the first row and values in the subsequent rows
    const structuredData1 = [
      [{ v: "Basic Detail", s: { font: { bold: true } } }, ""],
      ["", ""], 
      ["", ""], 
      [
        { v: "ColumnName", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Datatype", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Mandatoryoptional", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Default Value", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "AnyConstraint", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "PrimaryKey", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Label", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Code_Table", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Code_Table", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Code_Table", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
        { v: "Code_Table", s: { font: { bold: true }, fill: { fgColor: { rgb: "FFFF00" } } } },
    
    
      ],
      ...rows.map(row => [row.selectionCriteria, row.label, row.fieldType, row.fieldVariable, row.localVariable, row.helper, row.helperFunction, row.arrayName])
    ];

    // Create worksheet
    const ws = XLSX.utils.aoa_to_sheet(structuredData1);

    // Create workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Export to Excel
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
            <div className="table-responsive">
              <table className="table table-bordered table-dark">
                <thead>
                  <tr>
                    <th>Column Name</th>
                    <th>Data Type</th>
                    <th>Mandatory/optional</th>
                    <th>Default value</th>
                    <th>Any Constraints</th>
                    <th>Primay Key</th>
                    <th>Label</th>
                    <th>Code_Table</th>
                    <th>Foreign Key</th>
                    <th>Page</th>
                    <th>Component</th>
                    <th>Repository</th>
                    <th>routes</th>
                    <th>getpagedet</th>
                    <th>getrecord</th>
                    <th>Remarks</th>

                  </tr>
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
                          name="Code_Table1"
                          value={FormData.codetable1}
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="Foreignkey1"
                          value={FormData.foreignkey1}
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
                         <td>
                        <input
                          type="text"
                          className="form-control"
                          name="Remarks"
                          value="formdata.remark1"
                          
                        />
                      </td>
                    </tr>
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
                   </tr>
                  
              
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
                          value="formdata.remark3"
                          
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

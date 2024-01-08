import React, { useState } from "react";

const DataInput = () => {
  const [all_fields, setall_fields] = useState([
    "Title",
    "Subcategory",
    "Price",
    "Popularity",
  ]);
  const [selected_fields, setselected_fields] = useState([]);
  const [selectt, setselectt] = useState("");
  const handleselect = () => {
    const updatedSourceArray = all_fields.filter(
      (element) => element !== selectt
    );
    const newArray = [...selected_fields, selectt];
    setselected_fields(newArray);
    setall_fields(updatedSourceArray);
  };
  const handledeselect = () => {
    const updatedSourceArray = selected_fields.filter(
      (element) => element !== selectt
    );
    const newArray = [...all_fields, selectt];
    setselected_fields(updatedSourceArray);
    setall_fields(newArray);
  };

  return (
    <>
      <div className="container">
        <h1>Import Products</h1>
        <div className="row mt-3">
          <div
            className="col"
            style={{ border: "1px solid black", padding: "10px" }}
          >
            <h5>Step 1: Select File</h5>
            <input type="file" className="fileinput" />
            <p>(Supported File Type: .csv, .json)</p>
          </div>
          <div
            className="col"
            style={{ border: "1px solid black", padding: "10px" }}
          >
            <h5>Step 2: Specify Format</h5>
            <br />
            <label htmlFor="filetype">File Type:&nbsp;</label>
            <select id="filetype" name="filetype">
              <option value="csv">csv</option>
              <option value="json">json</option>
            </select>
            <br />
            <br />
            <label htmlFor="charencoding">Character Encoding:&nbsp;</label>
            <select id="charencoding" name="charencoding">
              <option value="UTF-8">UTF-8</option>
              {/* <option value="json">.json</option> */}
            </select>
            <br />
            <br />
            <label htmlFor="delimiter">Delimiter:&nbsp;</label>
            <select id="delimiter" name="delimiter">
              <option value="comma">comma</option>
              {/* <option value="json">.json</option> */}
            </select>
            <br />
            <br />
            <label htmlFor="hasheader">Has header:&nbsp;</label>
            <input type="checkbox" name="hasheader" id="hasheader" />
          </div>
        </div>
        <div
          className="row mt-3"
          style={{ border: "1px solid black", padding: "10px" }}
        >
          <h5>Step 3: Display handling</h5>
          <p>Select the fields to be displayed</p>
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Available Fields</th>
                <th scope="col"></th>
                <th scope="col">Fields to be displayed</th>
              </tr>
            </thead>
            <tbody style={{ columnGap: "4px" }}>
              <th style={{ border: "1px solid black" }}>
                {all_fields.sort().map((field, index) => (
                  <tr key={index}>
                    {
                      <>
                        <button
                          style={{ border: "none" }}
                          onClick={() => setselectt(field)}
                        >
                          {field}
                        </button>
                      </>
                    }
                  </tr>
                ))}
                {/* <tr>Title</tr>
                                        <tr>Subcategory</tr>
                                        <tr>Price</tr>
                                        <tr>Popularity</tr> */}
              </th>
              <th
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <tr>
                  <button
                    style={{ padding: "1px 7px" }}
                    className="btn btn-secondary"
                    onClick={() => handleselect()}
                  >
                    &gt;&gt;
                  </button>
                </tr>
                <tr>
                  <button
                    style={{ padding: "1px 7px" }}
                    className="btn btn-secondary"
                    onClick={() => handledeselect()}
                  >
                    &lt;&lt;
                  </button>
                </tr>
              </th>
              <th style={{ border: "1px solid black" }}>
                {/* <tr>Title</tr>
                                        <tr>Subcategory</tr> */}
                {selected_fields.sort().map((field, index) => (
                  <tr key={index}>
                    {
                      <>
                        <button
                          style={{ border: "none" }}
                          onClick={() => setselectt(field)}
                        >
                          {field}
                        </button>
                      </>
                    }
                  </tr>
                ))}
              </th>
            </tbody>
          </table>
        </div>
        <div
          className="mt-3"
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            columnGap: "5px",
          }}
        >
          <button className="btn btn-secondary">Clear</button>
          <button className="btn btn-primary">Next</button>
        </div>
      </div>
    </>
  );
};

export default DataInput;

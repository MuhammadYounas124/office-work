import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

function JsonAttribute() {
  const [datatype, setDatatype] = useState(""); // Track the selected datatype
  const [formData, setFormData] = useState({
    fieldName: "",
    defaultValue: "",
    Description: "",
    isRequired: false,
    isNullable: false,
    startValue: "",
    endValue: "",
    maxLength: "",
  });

 /* const handleDatatypeChange = (e) => {
    setDatatype(e.target.value);
  };*/

  return (
    <div className="container-fluid col-md-6 mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h3 className="card-title">JSON Form Attributes</h3>
        </div>

        <form>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="fieldName" className="form-label">
                Field Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fieldName"
                placeholder="e.g. Invoice Id"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="defaultValue" className="form-label">
                Default Value
              </label>
              <input
                type="text"
                className="form-control"
                id="defaultValue"
                placeholder="no value"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Enter description"
              />
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="isRequired"
              />
              <label className="form-check-label" htmlFor="isRequired">
                Required
              </label>
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="isNullable"
              />
              <label className="form-check-label" htmlFor="isNullable">
                Nullable
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="datatype" className="form-label">
                Datatype
              </label>
              <select
                className="form-select"
                id="datatype"
                value={datatype}
               // onChange={handleDatatypeChange}
              >
                <option value="">Select</option>
                <option value="int">Int</option>
                <option value="String">String</option>
                <option value="Boolean">Boolean</option>
                <option value="Date">Date</option>
              </select>
            </div>

            {/* Conditional Rendering */}
            {datatype === "int" && (
              <>
                <div className="mb-3">
                  <label htmlFor="startValue" className="form-label">
                    Start Value
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="startValue"
                    name="startValue"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="endValue" className="form-label">
                    End Value
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="endValue"
                    name="endValue"
                  />
                </div>
              </>
            )}

            {datatype === "String" && (
              <div className="mb-3">
                <label htmlFor="maxValue" className="form-label">
                  Max Value
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="maxValue"
                  name="maxValue"
                />
              </div>
            )}
          </div>

          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JsonAttribute;

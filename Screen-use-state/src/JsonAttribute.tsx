import { useState } from "react";
import "../public/dist/css/adminlte.min.css";

function JsonAttribute() {
  const [datatype, setDatatype] = useState("");//use are use for to initalize the component 
  // For selected datatype ,datatype is used for to hold the data
  // setdatattype is allow to update the value of datatype 
  const [formData, setFormData] = useState({          // that hold the multiple field of data 
    fieldName: "",
    defaultValue: "",
    description: "",
    isRequired: false, // props element defined is required to be passed from parent component.
    isNullable: false,
    startValue: "",
    endValue: "",
    maxLength: "",
  });

   

// General handler for all inputs (checkbox and others)
  const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement >) => {   // e stands for the event object that is
      // automatically passed to the event handler when an event occurs
     //it will be the input element (like a text field, checkbox. But we will handle checkbox seperatly because it require boolean).
    
     if (e.target.type === "checkbox") {
      if (e.target.name === "isRequired") {
        setFormData({
          ...formData,
          isRequired: e.target.checked, // Update `isRequired` field
        });
      } else if (e.target.name === "isNullable") {
        setFormData({
          ...formData,
          isNullable: e.target.checked, // Update `isNullable` field
        });
      }
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value, // Update other input fields
      });
    }
  };
  // Handle datatype dropdown
  const handleDatatypeSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDatatype = e.target.value;
    setDatatype(selectedDatatype);
    
    // Set selected datatype

    // Reset specific fields when datatype changes
    setFormData({
      ...formData,
      startValue: datatype === "int" ? "" : formData.startValue,  // Retain startValue if datatype is not "int"
      // ? that means option chaining
      endValue: datatype === "int" ? "" : formData.endValue,  // Retain endValue if datatype is not "int"
      maxLength: datatype === "String" ? "" : formData.maxLength,  // Retain maxLength if datatype is not "String"
      defaultValue: "", // Reset defaultValue on datatype change
      description: "",  // Reset description on datatype change
    });
  };

 // Save button action with more detailed validation
const handleSave = () => {
  // Ensure required fields are filled in
  if (!formData.fieldName) {
    alert("Please fill in the Field Name.");
    return; // Stop further execution if fieldName is not filled
  }

  if (!datatype) {
    alert("Please select a Datatype.");
    return; // Stop further execution if datatype is not selected
  }

  // Add validation for datatype-specific fields
  if (datatype === "int" && (!formData.startValue || !formData.endValue)) { // (||) to define default values for variable props
    // to define conditional rendering // To handle missing or undefined data gracefully // To prevent runtime errors 
    //when accessing nested data.
    // Validate that start and end values are provided for 'int' datatype.

   // &&: Executes the second expression only if the first one is true.
   // ||: Executes the second expression if the first one is false.

    alert("Please fill in the start and end values for integer datatype.");
    return; // Stop further execution if start and end values are not provided
  }

  if (datatype === "String" && !formData.maxLength) { // To conditionally render components without writing if-else statements.
    //To check multiple conditions before rendering.// To make your code concise and readable for simple conditional logic.
    // Validate that maxLength is provided for 'String' datatype
    alert("Please fill in the max length for string datatype.");
    return; // Stop further execution if maxLength is not provided
  }

  // Log form data for review (Optional)
  console.log("Form Data:", formData);

  // Show success message
  alert("Form saved successfully!");
};


  return (
    <div>
      <div className="container-fluid col-md-6 mt-5">     {/*medium display and margin top */}
        <div className="card-header bg-primary text-white text-center">
          <h3>JSON Form Attributes</h3>
        </div>

        <form>
          <div className="card-body">
            <div className="mb-3"> {/*margin bottom*/}
              <label>Field Name</label>
              <input
                type="text"
                className="form-control"
                name="fieldName"
                value={formData.fieldName}
                onChange={handleInputChange}
                placeholder="e.g. Invoice Id"
                required
              />
            </div>

            <div className="mb-3">
              <label>Default Value</label>
              <input
                type="text"
                className="form-control"
                name="defaultValue"
                value={formData.defaultValue}
                onChange={handleInputChange}
                placeholder="no value"
              />
            </div>

            <div className="mb-3">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter description"
              />
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                name="isRequired"
                onChange={handleInputChange}
                checked={formData.isRequired}
              />
              <label className="form-check-label">Required</label>
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                name="isNullable"
                onChange={handleInputChange}
                checked={formData.isNullable}
              />
              <label className="form-check-label">Nullable</label>
            </div>

            <div className="mb-3">
              <label>Datatype</label>
              <select
                className="form-select"
                value={datatype}
                onChange={handleDatatypeSelection}
                required
              >
                <option value="">Select</option>
                <option value="int">Int</option>
                <option value="String">String</option>
                <option value="Boolean">Boolean</option>
                <option value="Date">Date</option>
              </select>
            </div>

            {datatype === "int" && (
              <>
                <div className="mb-3">
                  <label>Start Value</label>
                  <input
                    type="number"
                    className="form-control"
                    name="startValue"
                    value={formData.startValue}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label>End Value</label>
                  <input
                    type="number"
                    className="form-control"
                    name="endValue"
                    value={formData.endValue}
                      onChange={handleInputChange}
                  />
                </div>
              </>
            )}

            {datatype === "String" && (
              <div className="mb-3">
                <label>Max Length</label>
                <input
                  type="number"
                  className="form-control"
                  name="maxLength"
                  value={formData.maxLength}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>

          <div className="card-footer text-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JsonAttribute;

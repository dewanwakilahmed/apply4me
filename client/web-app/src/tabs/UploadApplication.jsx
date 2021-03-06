import { useState } from "react";

// Icons
import { FaFileUpload } from "react-icons/fa";

const UploadApplication = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    dateOfFiling: "2022-01-01",
    dateOfAppointment: "2022-01-01",
    files: null,
  });

  const { name, type, dateOfFiling, dateOfAppointment, files } = formData;

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaFileUpload /> Application Upload
        </h1>
      </section>

      <section className="form">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name of Applicant
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Enter the Applicant's name"
              onChange={changeHandler}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="type" className="form-label">
              Type of Application
            </label>
            <select
              name="type"
              id="type"
              value={type}
              onChange={changeHandler}
              className="form-control"
            >
              <option value="passport">Passport</option>
              <option value="visa">Visa</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dateOfFiling" className="form-label">
              Filing Date
            </label>
            <input
              type="date"
              name="dateOfFiling"
              id="dateOfFiling"
              value={dateOfFiling}
              onChange={changeHandler}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfAppointment" className="form-label">
              Appointment Date
            </label>
            <input
              type="date"
              name="dateOfAppointment"
              id="dateOfAppointment"
              value={dateOfAppointment}
              onChange={changeHandler}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="files" className="form-label">
              Application Files
            </label>
            <input
              type="file"
              multiple
              name="files"
              id="files"
              value={files}
              onChange={changeHandler}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-blue">
              Upload
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default UploadApplication;

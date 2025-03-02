import { useState } from "react";
import axios from "axios";

const InsuranceSignup = () => {
  // State for each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [information, setInformation] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const token = localStorage.getItem('token');

  const validateForm = () => {
    let newErrors = {};

    if (!name) newErrors.name = "Company name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!address) newErrors.address = "Address is required";
    if (!contact) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(contact)) {
      newErrors.contact = "Invalid contact number";
    }
    if (!information) newErrors.information = "Information is required";
    if (!description) newErrors.description = "Description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formData = { name, email, address, contact, information, description };

    try {
      await axios.post("http://localhost:3000/api/insurance/signup", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      
      setMessage("Signup successful!");
      setName(""); setEmail(""); setAddress(""); setContact(""); setInformation(""); setDescription("");
      setErrors({});
    } catch (error) {
      setMessage("Error signing up. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Insurance Company Signup</h2>

      {message && <p className="text-center text-green-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/** Name Field */}
        <div>
          <label className="block font-medium">Company Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="ABC Insurance Ltd."
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/** Email Field */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="contact@abcinsurance.com"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/** Address Field */}
        <div>
          <label className="block font-medium">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="123 Main Street, New York, NY 10001"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        {/** Contact Field */}
        <div>
          <label className="block font-medium">Contact</label>
          <input
            type="tel"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="1234567890"
          />
          {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
        </div>

        {/** Information Field */}
        <div>
          <label className="block font-medium">Information</label>
          <textarea
            value={information}
            onChange={(e) => setInformation(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Brief details about your insurance services"
          />
          {errors.information && <p className="text-red-500 text-sm">{errors.information}</p>}
        </div>

        {/** Description Field */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Describe your company in a few sentences"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/** Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default InsuranceSignup;

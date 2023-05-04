import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

type Props = {
  onClose: () => void;
};

const PersonalInformation = ({ onClose }: Props) => {
  const [name, setName] = useState('Aaron Barboza Amador');
  const [email, setEmail] = useState('aaron.barboza.amador@est.una.ac.cr');
  const [phone, setPhone] = useState('+50661330764');
  const [address, setAddress] = useState('Ciudad Neily, Puntarenas, Costa Rica');
  const imageUrl = "/aaron.png"; // Ruta de la imagen
  
  return (
    <div className="container personal-info">
      <h2 className="mb-4">Personal Information</h2>
      <img src={imageUrl} alt="Profile" className="img-fluid rounded mb-3" width={300} height={300} />
      <p style={{fontSize: "30px"}}><strong>Name:</strong> {name}</p>
      <p style={{fontSize: "30px"}}><strong>Email:</strong> {email}</p>
      <p style={{fontSize: "30px"}}><strong>Phone:</strong> {phone}</p>
      <p style={{fontSize: "30px"}}><strong>Address:</strong> {address}</p>
      <button className="btn btn-primary" onClick={onClose}>Close</button>
    </div>
  );
};

export default PersonalInformation;

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import PersonalInformation from '../components/PersonalInformation';
import { useState } from 'react';
import { getRepositories } from './api/api';
import RepositoryCarousel from '../components/RepositoryCarousel';
import Footer from '../components/Footer';

const IndexPage = () => {
  const [username, setUsername] = useState('AaronBarboza');
  const [repositories, setRepositories] = useState([]);
  const [showPersonal, setShowPersonal] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleShowPersonal = () => {
    setShowPersonal(true);
  };

  const handleClosePersonal = () => {
    setShowPersonal(false);
  };

  const handleSearch = async () => {
    const data = await getRepositories(username);
    setRepositories(data);
  };

  return (
    <div className="container">
      <Navbar handleSearch={handleSearch} handlePersonal={handleShowPersonal} activeTab={''}/>
      {showPersonal && <PersonalInformation onClose={handleClosePersonal} />}
      <h1 className="bg-danger">Biography</h1>
      <p>My name is Aaron Barboza Amador, I am 20 years old and currently live in the city of Ciudad Neily, Puntarenas in Costa Rica. Currently, I am studying Information Systems Engineering at the National University of Costa Rica Campus Coto. In my free time, I like to enjoy reading, movies and sports.
If you want to contact me, you can do it through my phone number (+50661330764) or my email (aaron.barboza.amador@est.una.ac.cr).</p>
      {repositories.length > 0 && <RepositoryCarousel repositories={repositories} />}
      <ul>
        {repositories.map((repository: any) => (
          <li key={repository.id}>{repository.name}</li>
        ))}
      </ul>
      
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
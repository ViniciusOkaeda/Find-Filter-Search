
import { useEffect, useState } from "react";


function App() {

  const [ repos, setRepos] = useState([{
    name: '',
    description: ''
  }]);

  //const [ filteredRepos, setFilteredRepos] = useState([{name: '', description: ''}]);

  const [ search, setSearch] = useState('');

  const filteredRepos = search.length > 0 
  ? repos.filter(repo => repo.name.includes(search))
  : [];

  console.log('Renderizado');

  useEffect(() => {
    fetch('https://api.github.com/users/ViniciusOkaeda/repos')
      .then(response => response.json())
      .then(data => setRepos(data))

  }, [])

//  useEffect(() => {
  //  if(search.length) {
    //  setFilteredRepos(repos.filter(repo => repo.name.includes(search)));
    //}
 // }, [search])


  return (
    <div>
      <input 
        name="search" 
        type="text" 
        placeholder='Digite sua busca aqui...'
        onChange={ e => setSearch(e.target.value)}
        value={search} />

        { search.length > 0 ? (
          <ul>
          {filteredRepos.map(repo => {
            return(
              <li key={repo.name}>{repo.name}</li>
            )
          })}
        </ul>
        ) : (
          <ul>
          {repos.map(repo => {
            return(
              <li key={repo.name}>{repo.name}</li>
            )
          })}
        </ul>
        ) }


    </div>
  );
}

export default App;

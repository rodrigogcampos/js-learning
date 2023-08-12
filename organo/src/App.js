import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57C278',
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#B2CFFA',
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D1557',
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E0EB69',
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#DB6EBF',
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05',
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29',
    }
  ])

  const [employees, setEmployees] = useState([])

  const onEmployeeAdded = (employee) => {
    console.log(employees)
    setEmployees([...employees, employee])
  }

  function deleteEmployee(id) {
    setEmployees(employees.filter(employee => employee.id !== id))
  }

  function setTeamColor(color, id) {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.color = color
      }
      return team;
    }))
  }

  function addTeam(newTeam) {
    setTeams([...teams, {...newTeam, id: uuidv4}])
  }

  function likeResolver(id) {
    setEmployees(employees.map(employee => {
      if (employee.id === id) {
        employee.like = !employee.like;
        return employee;
      }
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        addTeam={addTeam}
        teams={teams.map(team => team.name)} 
        onEmployeeRegister={employee => onEmployeeAdded(employee)}
      />

      { teams.map(team => 
        <Team 
          key={team.name} 
          team={team}
          name={team.name} 
          color={team.color} 
          employees={employees.filter(employee => employee.team === team.name)}
          onDelete={deleteEmployee}
          changeColor={setTeamColor}
          onLike={likeResolver}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;

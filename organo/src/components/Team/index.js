import Employee from '../Employee'
import hexToRgba from 'hex-to-rgba';
import './Team.css'

const Team = ({team, employees, onDelete, changeColor, onLike}) => {
    return (
        (employees.length > 0) && <section className='team' style={{ backgroundColor: hexToRgba(team.color, 0.5) }}>
            <input onChange={event => changeColor(event.target.value, team.id)} value={team.color} type='color' className='input-color' />
            <h3 style={{ borderColor: team.color }}>{team.name}</h3>
            <div className='employees'>
                {employees.map((employee) => {
                    return (
                        <Employee 
                            key={employee.name} 
                            backgroundColor={team.color} 
                            employee={employee}
                            onDelete={onDelete} 
                            onLike={onLike}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Team
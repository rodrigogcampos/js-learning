import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Employee.css'

const Employee = ({ employee, backgroundColor, onDelete, onLike}) => {
    function like(id) {
        onLike(employee.id)
    }

    const propsLike = {
        size: 25,
        onClick: like,
    }

    return (
        <div className='employee'>
            <AiFillCloseCircle 
                size={25} 
                className='delete' 
                onClick={() => onDelete(employee.id)}
            />
            <div className='header' style={{backgroundColor: backgroundColor}}>
                <img src={employee.image} alt={employee.name}/>
            </div>
            <div className='footer'>
                <h4>{employee.name}</h4>
                <h5>{employee.position}</h5>
                <div className='like'>
                    {employee.like 
                        ? <AiFillHeart {...propsLike} color="#FF0000"/> 
                        : <AiOutlineHeart {...propsLike}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Employee
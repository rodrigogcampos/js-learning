import { useState } from 'react';
import Button from '../Button';
import Select from '../Select';
import Field from '../Field'
import { v4 as uuidv4 } from 'uuid';
import './Form.css'

const Form = (props) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')
    

    const onSave = (event) => {
        event.preventDefault();
        const id = uuidv4();
        console.log('form submitted => ', id, name, position, image, team)
        props.onEmployeeRegister({
            id,
            name,
            position,
            image,
            team
        })

        setName('')
        setPosition('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados pra criar o card do colaborador</h2>
                <Field 
                    required={ true } 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={name}
                    onAlter={value => setName(value)}
                />
                <Field 
                    required={ true } 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    value={position}
                    onAlter={value => setPosition(value)}
                />
                <Field 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    value={image}
                    onAlter={value => setImage(value)}
                />
                <Select 
                    required={ true } 
                    label="Time" 
                    items={ props.teams } 
                    value={team}
                    onAlter={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.addTeam({ name: teamName, color: teamColor });
            }}>
                <h2>Preencha os dados pra criar o card do colaborador</h2>
                <Field 
                    required
                    label="Nome" 
                    placeholder="Digite o nome do time"
                    value={teamName}
                    onAlter={value => setTeamName(value)}
                />
                <Field 
                    required
                    type='color'
                    label="Cor" 
                    placeholder="Digite a cor do time" 
                    value={teamColor}
                    onAlter={value => setTeamColor(value)}
                />
                <Button>
                    Criar Time
                </Button>
            </form>
        </section>
    )
}

export default Form;
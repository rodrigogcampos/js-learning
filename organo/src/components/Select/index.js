import './Select.css'

const Select = (props) => {

    return (
        <div className="select">
            <label>{ props.label }</label>
            <select value={props.value} onChange={event => props.onAlter(event.target.value)} required={props.required}>
                <option value=""></option>
                { props.items.map(item => <option key={ item }>{ item }</option>) }
            </select>
        </div>
    )
}

export default Select
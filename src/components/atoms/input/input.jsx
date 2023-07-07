import "./input.css"

function Input({ id, onChange }) {

    return (
        <input className="hnt-input" id={id} type="text" onChange={onChange}/>
    )
}

export default Input;
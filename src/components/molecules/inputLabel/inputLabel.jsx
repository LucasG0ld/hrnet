import Input from "../../atoms/input/input";

function InputLabel({ htmlFor, label, id, onChange }) {

    return (
        <div className="hnt-input-container">
            <label className="hnt-label" htmlFor={htmlFor}>{label}</label>
            <Input id={id} onChange={onChange}></Input>
        </div>
    )
}

export default InputLabel;
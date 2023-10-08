import '../styles/input-and-label.css';
export default function InputAndLabel(props) {
    return (
        <div className="input-text">
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} name={props.name} />
        </div>
    );
}
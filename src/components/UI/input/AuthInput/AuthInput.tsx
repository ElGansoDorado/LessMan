import classes from "./AuthInput.module.css";

type Props = {
    id: string;
    type: string;
    label: string;
    value: string | number;
    setValue: Function; 
}

export default function AuthInput({id, type, label, value, setValue} : Props) {
    return <div className={classes.box}>
        <label htmlFor={id} className={classes.label}>{label}</label>
        <input 
            id={id}
            className={classes.input}
            type={type} 
            placeholder={`${label}...`} 
            value={value}
            onChange={(event) => setValue(event.target.value)}/>
    </div>
}
import classes from "./AuthInput.module.css";

type Props = {
    id: string;
    type: string;
    value: string | number;
    setValue: Function; 
}

export default function AuthInput({id, type, value, setValue} : Props) {
    return <div className={classes.box}>
        <label htmlFor={id} className={classes.label}>{type}</label>
        <input 
            id={id}
            className={classes.input}
            type={type} 
            placeholder={type} 
            value={value}
            onChange={(event) => setValue(event.target.value)}/>
    </div>
}
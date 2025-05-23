import classes from './Search.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

type Props = {
    value: string;
    setValue: Function;
}

export default function Search({ value, setValue }: Props) {
    return <label className={classes.container}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.search} />

        <input className={classes.input}
            placeholder='Search'
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)} />

        <FontAwesomeIcon icon={faCircleXmark} className={classes.clear} onClick={() => setValue('')} />
    </label>
}
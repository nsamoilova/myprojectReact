import React from 'react';
import styles from './style.module.scss';

type P = Omit<React.HTMLProps<HTMLInputElement>, 'onChange'>

interface Props extends P {
    onChange: (value: string) => void,

}



class Input extends React.Component<Props>{

onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.target.value)
}

    render() {
        return (
            <input 
              {...this.props}
              type={this.props.type}
              className={styles.input} 
              onChange={this.onChangeHandler} 
              
            />
        )
    }
}

export default Input;
import React, {useState} from 'react';
import { Button } from 'antd';
import { useHistory} from 'react-router-dom';
import '../scss/button.scss';

const CommonButton = ({ children, value, ...props }) => {
    const size = "large"
    const history = useHistory();
    const [count, setCount] = useState(value);

    const onClickEvent = (e) => {
        sessionStorage.setItem('pathname', history.location.pathname)
        setCount((prevState) => prevState + 1);
        props.onClick(children, count)
    }
    return (
        <div className="button">
            <Button onClick={onClickEvent} type="primary" shape="round" size={size}>
                {children}
            </Button>
        </div>
    )
}

export default CommonButton;
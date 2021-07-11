import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import List from '../assets/json/menu.json';
import CardList from '../components/card';

const StarBucks = (props) => {
    const history = useHistory();
    const pathname = sessionStorage.getItem('pathname')
    const { onStatusChange, count, value } = props;
    const [menuList, setMenuList] = useState(List.menuDetails.STARBUCKS);
    const [status, setStatus] = useState(false);

    useEffect(() => {
  
        if(history.location.pathname === pathname) {
            if (onStatusChange === 'ALL AVAILABLE') {
                menuList.forEach(res => {
                    res.outofstock = true;
                })
                setMenuList(menuList);
                setStatus(!status)
            }
            if (onStatusChange === 'ALL UNAVAILABLE') {
                menuList.forEach(res => {
                    res.outofstock = false;
                })
                setMenuList(menuList);
                setStatus(!status)
            }
        }
          
    }, [onStatusChange, count])

    useEffect(() => {
        if (value.length > 0) {
            let result = [];
            result = menuList.filter((data) => {
                const {foodname} = data;
                return (
                    foodname.toLowerCase().includes(value)
                )
            });
            setMenuList(result);
        } else {
            setMenuList(List.menuDetails.STARBUCKS)
        }
    }, [value])

    const changeStock = (e) => {
        const data = menuList;
        data[e].outofstock = !data[e].outofstock;
        setMenuList(data);
        setStatus(!status);
    }
    return (
        <div className="site-card-wrapper">
        <CardList changeStock={changeStock} menuItems={menuList} classnames="eatorama-card" />
    </div>
    )
}

export default StarBucks;
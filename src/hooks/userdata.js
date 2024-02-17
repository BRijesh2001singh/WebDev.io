import React, { useEffect, useState } from 'react'
const PREFIX = "Process.io-"
const Userdata = (key, intialvalue) => {
    const prefixkey = PREFIX + key;
    const [value, setvalue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixkey);
        if (jsonValue != null) return JSON.parse(jsonValue);
        if (typeof intialvalue === 'function') {
            return intialvalue();
        }
        else return intialvalue;
    })
    useEffect(() => {
        localStorage.setItem(prefixkey, JSON.stringify(value))
    }, [prefixkey, value])
    return [value, setvalue];
}

export default Userdata

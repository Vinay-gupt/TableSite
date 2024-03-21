import React, { useState } from 'react'

const Modal = ({Hide, setHide}) => {
    const [Toogle, setToogle] = useState(true)
    
    const handleCheckboxChange = (field) => {
        setHide(prevFields => ({
            ...prevFields,
            [field]: !prevFields[field]}))
    };
    const HandleToggle=()=>{
        setToogle(!Toogle)
    }
    return (
        <>
        <div className=" SidebarSwitch absolute" onClick={HandleToggle} >Hide/Show</div>
            <div className={`sidebar absolute top-0 left-0 z-10 ${!Toogle ? 'open' : ''}`} >
                <h2>Data Fields</h2>
                <div className="checkboxes">
                    {Object.entries(Hide).map(([key, value]) => (
                        <div key={key} className="checkbox text-center">
                            <input
                                type="checkbox"
                                id={key}
                                checked={value}
                                onChange={() => handleCheckboxChange(key)}
                            />
                            <label htmlFor={key}>{key}</label>
                        </div>
                    ))}
                </div>
            </div>
        
        </>
    )
}

export default Modal
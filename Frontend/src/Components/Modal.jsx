import React, { useState } from 'react'

const Modal = ({ Hide, setHide }) => {
    const [Toogle, setToogle] = useState(true)

    const handleCheckboxChange = (field) => {
        setHide(prevFields => ({
            ...prevFields,
            [field]: !prevFields[field]
        }))
    };
    const HandleToggle = () => {
        setToogle(!Toogle)
    }
    return (
        <>
            <div className=" SidebarSwitch absolute top-1  right-32" onClick={HandleToggle} >Hide/Show</div>
            <div className={`sidebar absolute top-0 left-0 z-10 ${!Toogle ? 'open' : ''}`} style={{ width: '250px', backgroundColor: '#f4f4f4', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Data Fields</h2>
                <div className="checkboxes flex justify-center items-baseline	">
                    {Object.entries(Hide).map(([key, value]) => (
                        <div key={key} className="checkbox text-center" style={{ marginBottom: '10px' }}>
                            <input
                                type="checkbox"
                                id={key}
                                checked={value}
                                onChange={() => handleCheckboxChange(key)}
                                style={{ marginRight: '5px' }}
                            />
                            <label htmlFor={key} style={{ fontSize: '1rem', cursor: 'pointer' }}>{key}</label>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default Modal
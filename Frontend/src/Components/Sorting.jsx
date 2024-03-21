import React, { useState } from 'react'
import { useEffect } from 'react'

const Sorting = ({ Sort, setSort, setData, data, ShowForm }) => {
    const [Toogle, setToogle] = useState(true)
    const initialState = {
        id: false,
        name: false,
        category: false,
        subcategory: false,
        createdAt: false,
        updatedAt: false,
        price: false,
        sale_price: false
      };
    const [Selected, setSelected] = useState(null)

    useEffect(() => {
        if (Sort.name) {
            setData(prev => data.sort((a, b) => a.name.localeCompare(b.name)))
            
        }
       else if (Sort.id) {
            setData(data.sort((a, b) => a.id - b.id))
            
        }
        else if (Sort.createdAt) {
            setData(data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)))
            
        }

        else{setData(data.sort((a, b) => a.id - b.id))}
    }, [Sort])

    
    const handleCheckboxChange = (e, field, ind) => {
        if (e.target.checked) {
            setSort(prev=>initialState)
            setSort(prevFields => ({
                ...prevFields,
                [field]: !prevFields[field]
            }))
            setSelected(ind)
        }
        else {
            setSelected(null)
            setSort(initialState)
        } 
        

    };
    const HandleToggle = () => {
        if(Toogle){
            setSelected(null)
        }
        setToogle(!Toogle)
    }
    return (
        <>
            <div className=" SortingSwitch absolute top-1 right-1" onClick={HandleToggle} style={{filter:ShowForm?"blur(4px)":""}} >Sorting</div>
            <div className={`sidebar absolute top-0 left-0 z-10 ${!Toogle ? 'open' : ''}`} >
                <h2>Data Fields</h2>
                <div className="checkboxes flex justify-center items-baseline">
                    {Object.entries(Sort).map(([key, value], ind) => (

                        <div key={key} className="checkbox text-center">
                            {ind === Selected ? <input
                                type="checkbox"
                                id={key}
                                checked={true}
                                onChange={(e) => handleCheckboxChange(e, key, ind)}
                            /> : <input
                                type="checkbox"
                                id={key}
                                checked={false}
                                onChange={(e) => handleCheckboxChange(e, key, ind)}
                            />}
                            <label htmlFor={key}>{key}</label>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Sorting
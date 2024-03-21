import { useEffect, useState } from 'react'
import './App.css'
import Data from "../db.json"
import Update from './Components/Update'
import axios from "axios"
import Modal from './Components/Modal'
import Form from './Components/Form'
import Sorting from './Components/Sorting'

function App() {
  const [data, setData] = useState([])
  const [Id, setId] = useState(0)
  const [Hide, setHide] = useState({
    id: false,
    name: false,
    category: false,
    subcategory: false,
    createdAt: false,
    updatedAt: false,
    price: false,
    sale_price: false

  })
  const [Sort, setSort] = useState({
    id: false,
    name: false,
    category: false,
    subcategory: false,
    createdAt: false,
    updatedAt: false,
    price: false,
    sale_price: false

  })

  const [ShowForm, setShowForm] = useState(false)

  // console.log(data);
  // const [TotalPages, setTotalPages] = useState(data.length / 10)
  const [TotalPages, setTotalPages] = useState(0)
  const [filterTotalPages, setfilterTotalPages] = useState(0)
  const [Pages, setPages] = useState(1)
  const [text, settext] = useState("")
  const [filterdata, setfilterdata] = useState([])
  const options = { year: '2-digit', month: 'short', day: '2-digit' };

  // console.log(data)

  // const Pagination = (index) => {
  //   if (index >= 1 && index <= TotalPages)
  //     setPages(index);
  // };

  const FilterPagination = (index) => {
    if (index >= 1 && index <= filterTotalPages)
      setPages(index);
  };

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/alldata`)
      .then((data) => {
        setData(data.data.data)
        setfilterdata(data.data.data)
        setfilterTotalPages(Math.ceil((data.data.data.length/10)))
        setTotalPages(Math.ceil((data.data.data.length / 10)))
        setId(data.data.data.length+1)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(()=>{
    setPages(1)
    if(text===""){
      setfilterdata(data)
      setfilterTotalPages(TotalPages)
    }
    else{
      const Filtered = data.filter((item)=>{
        return item.category.toLowerCase().includes(text)||item.name.toLowerCase().includes(text)||item.subcategory.toLowerCase().includes(text)
        
      })
      setfilterdata(Filtered)
      setfilterTotalPages(Math.ceil(Filtered.length/10))
    }
  },[text])
  
  const HandleEntry=()=>{
      setShowForm(!ShowForm)
  }
  useEffect(()=>{
    console.log("yeh raha data",data)
},[data])
  return (
    <>

      <div className='flex  justify-center align-center flex-col h-screen relative' style={{filter:ShowForm?"blur(4px)":""}}>
      <div className="absolute HandleEntry" onClick={HandleEntry}  >Add Entry</div>
      <h2 className='text-center font-serif text-2xl mt-2'>Product Table</h2>
        <Modal Hide={Hide} setHide={setHide}/>
        {/* <div className=' fixed top- right-5' onClick={() => setSort(prev => ({ ...prev, createdAt: !prev.createdAt }))}>Date </div> */}
        {/* <div className=' fixed top-2 right-5' onClick={() => setSort(prev => ({ ...prev, id: !prev.id }))}>Id </div> */}
        <div class="group absolute  right-5">
          <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
          <input placeholder="Search" type="search" class="input" value={text} onChange={(e) => settext(e.target.value)} />
        </div>
        <table className='ml-2 mr-2'>
          <thead style={{ "border": "1px solid" }}>
            <tr>
              <th style={{ display: Hide.id ? "none" : "" }}>ID</th>
              <th style={{ display: Hide.name ? "none" : "" }}>Name</th>
              <th style={{ display: Hide.category ? "none" : "" }}>Category</th>
              <th style={{ display: Hide.subcategory ? "none" : "" }}>Subcategory</th>
              <th style={{ display: Hide.createdAt ? "none" : "" }}>Created At</th>
              <th style={{ display: Hide.updatedAt ? "none" : "" }}>Updated At</th>
              <th style={{ display: Hide.price ? "none" : "" }}>Price</th>
              <th style={{ display: Hide.sale_price ? "none" : "" }}>Sale Price</th>
            </tr>
          </thead>
          <tbody>
            {/* { text===""?
            data?.slice(Pages * 10 - 10, Pages * 10).map(item => (
              <tr key={item.id}>
                <td style={{ display: Hide.id ? "none" : "" }}>{item.id}</td>
                <td style={{ display: Hide.name ? "none" : "" }}>{item.name}</td>
                <td style={{ display: Hide.category ? "none" : "" }}>{item.category}</td>
                <td style={{ display: Hide.subcategory ? "none" : "" }}>{item.subcategory}</td>
                <td style={{ display: Hide.createdAt ? "none" : "" }}>{new Date(item.createdAt).toLocaleDateString('en-US', options)}</td>
                <td style={{ display: Hide.updatedAt ? "none" : "" }}>{new Date(item.updatedAt).toLocaleDateString('en-US', options)}</td>
                <td style={{ display: Hide.price ? "none" : "" }}>{item.price}</td>
                <td style={{ display: Hide.sale_price ? "none" : "" }}>{item.sale_price}</td>
              </tr>
            )): */}
            {filterdata?.slice(Pages * 10 - 10, Pages * 10).map(item => (
              <tr key={item.id}>
                <td style={{ display: Hide.id ? "none" : "" }}>{item.id}</td>
                <td style={{ display: Hide.name ? "none" : "" }}>{item.name}</td>
                <td style={{ display: Hide.category ? "none" : "" }}>{item.category}</td>
                <td style={{ display: Hide.subcategory ? "none" : "" }}>{item.subcategory}</td>
                <td style={{ display: Hide.createdAt ? "none" : "" }}>{new Date(item.createdAt).toLocaleDateString('en-US', options)}</td>
                <td style={{ display: Hide.updatedAt ? "none" : "" }}>{new Date(item.updatedAt).toLocaleDateString('en-US', options)}</td>
                <td style={{ display: Hide.price ? "none" : "" }}>{item.price}</td>
                <td style={{ display: Hide.sale_price ? "none" : "" }}>{item.sale_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className='group fixed bottom-10 right-6 z-10'>
          <button>➕</button>
        </div> */}
      </div>
        <div className=' flex justify-center align-center mb-16 '>

          <span className=" mt-1  hover:bg-gray-200 cursor-pointer" onClick={() => FilterPagination(Pages - 1)}>◀️</span>

          {/* {text===""?[...Array(TotalPages)].map((_, index) => {
            return (
              <span className={Pages === index + 1 ? "bg-slate-50 border-2 border-sky-500 mx-1 px-2 mt-1 active:bg-gray-600" : " border-2 border-sky-500 mx-1 px-2 mt-1 hover:bg-gray-200 cursor-pointer"} key={index} onClick={() => Pagination(index + 1)}>
                {index + 1}
              </span>
            );
          }):*/
          [...Array(filterTotalPages)].map((_, index) => { 
            return (
              <span className={Pages === index + 1 ? "bg-slate-50 border-2 border-sky-500 mx-1 px-2 mt-1 active:bg-gray-600" : " border-2 border-sky-500 mx-1 px-2 mt-1 hover:bg-gray-200 cursor-pointer"} key={index} onClick={() => FilterPagination(index + 1)}>
                {index + 1}
              </span>
            );
          })}
          <span className=" mt-1 hover:bg-gray-200 cursor-pointer" onClick={() => FilterPagination(Pages + 1)}>▶️</span>

        </div>
        <Form ShowForm={ShowForm} setShowForm={setShowForm} Id={Id} setId={setId} setData={setData} setTotalPages={setTotalPages} data1={data}/>
        <Sorting setSort={setSort} Sort={Sort} setData={setData} data={data}/>
    </>
  )
}

export default App

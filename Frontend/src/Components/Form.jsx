import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
const Form = ({ShowForm,setShowForm,Id,setId,setData,setTotalPages,data1}) => {
    
   
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()


      const onSubmit = async (data) => {
        const newData={...data,id:Id}
        setId(Id+1)
        const res= await axios.post(`${import.meta.env.VITE_BACKEND_URL}/register`,newData)
        if(res.data.success){
        setData(prev => [...prev,res.data.data])
        setTotalPages(Math.ceil(((data1.length+1) / 10)))
        window.location.reload();

    }
        setShowForm(!ShowForm)
        
      }
    return (
        <>
            <form class="form" style={{"display":ShowForm?"":"none"}} onSubmit={handleSubmit(onSubmit)}>
                <p class="title">Register</p>
                <p class="message">Signup now and get full access to our app.</p>

            

                <label>
                    <input {...register("name", { required: true })} class="input" type="text" name="name" placeholder=""  />
                    <span>Name</span>
                </label>
                {errors.name && <span>This field is required</span>}


                <label>
                    <input {...register("category", { required: true })}class="input" type="text" name="category" placeholder=""  />
                    <span>Category</span>
                </label>
                {errors.category && <span>This field is required</span>}


                <label>
                    <input {...register("subcategory", { required: true })} class="input" type="text" name="subcategory" placeholder=""  />
                    <span>subCategory</span>
                </label>
                {errors.subcategory && <span>This field is required</span>}


                <label>
                    <input {...register("createdAt", { required: true })} class="input" type="date" name="createdAt" placeholder=""  />
                    <span>Created At</span>
                </label>
                {errors.createdAt && <span>This field is required</span>}


                <label>
                    <input {...register("updatedAt", { required: true })} class="input" type="date" name="updatedAt" placeholder=""  />
                    <span>Updated At</span>
                </label>
                {errors.updatedAt && <span>This field is required</span>}


                <label>
                    <input {...register("price", { required: true })} class="input" type="number" name="price" placeholder=""  />
                    <span>Price</span>
                </label>
                {errors.price && <span>This field is required</span>}


                <label>
                    <input {...register("sale_price", { required: true })} class="input" type="number" name="sale_price" placeholder=""  />
                    <span>Sale Price</span>
                </label>
                {errors.sale_price && <span>This field is required</span>}


                <button class="submit" type="submit">Submit</button>
            </form>

        </>
    )
}

export default Form
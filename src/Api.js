import React from 'react'
import axios from 'axios'
import'./todo.css';

const Api = () => {
    const [allData,setAllData]= React.useState([]);

const getAllData = async()=>{
    await axios.get('https://638f29549cbdb0dbe31ec6b4.mockapi.io/Users').then(res=>{
        console.log(res.data);
        setAllData(res.data)
    })
}
React.useEffect(()=>{getAllData()},[])

const deleteUser=async(e, id)=>{
    e.preventDefault()
    let data = allData.filter((res)=>{
        return res.id !== id;
    })
   console.log(data);
   await fetch(`https://638f29464ddca317d7f026d5.mockapi.io/users/${id}`, {
    method: 'DELETE'
  });
  setAllData(data)
}
  return (
    
    // <div className='container'>
    //     {
    //         allData.map(res=>{
    //             return (
    //                 <div key={res.id}>
    //                     <img height={100} width={100} src={res.avatar} alt="imgmy"/>
    //                     <p>{res.name}</p>
    //                 </div>
    //             )
    //         })
    //     }
    // </div>
    <>
    <table border={1} width='100%'>
    <thead>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Image</td>
            <td>Created At</td>
            <td>Action</td>
        </tr>
    </thead>
    <tbody>
        {
            allData.map((res, i) => {
                return (
                    <tr key={res.id}>
                        <td>{res.id}</td>
                        <td>{res.name}</td>
                        <td><img src={res.avatar} height={100} width={100} alt={res.createdAt} /></td>
                        <td>{res.createdAt}</td>
                        <td>
                            <button className="btnEdit">Edit</button>
                            <button className="btnDelete" onClick={(e)=>deleteUser(e, res.id)} >Delete</button>
                        </td>
                    </tr>
                )
            })
        }
    </tbody>
</table>

</> )
}

export default Api
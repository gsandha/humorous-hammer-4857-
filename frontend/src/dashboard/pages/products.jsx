import React from 'react'
import styles from '@/styles/Home.module.css'
import Side from '@/components/Side'
import axios from 'axios';
import { useRouter } from 'next/router';
const Productlist = ({c}) => {

  const router = useRouter();
  const Dlt = async(id,item)=>{
    // axios.post(`http://localhost:9090/deleted`,item)
    // axios.delete(`http://localhost:9090/products/${id}`)
      await fetch(`https://limeroad-backend.onrender.com/products/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            console.log('Product deleted successfully');
          } else {
            throw new Error('Failed to delete product');
          }
        })
        .catch(error => {
          console.error(error);
        });
    
    // router.push("/products");
  router.reload()
  }
  return (
    <>
    <div className={styles.main}>
<Side />
</div>
<div className={styles.list1}>
<table className={styles.list}>
    <thead>
      <tr>
        <th style={{paddingLeft:"20px"}}>SR</th>
        <th >Product name</th>
        <th>Price</th>
        <th >Brand</th>
      <th></th>
      </tr>
    </thead>
    <tbody className={styles.scrl}>

       {c.map((item, index)=>{
      let id = item._id;
      return (
          <tr key={index}>
            <td style={{paddingLeft:"20px"}}>{+index+1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.brand}</td>
            <td className={styles.dlt} onClick={()=>{Dlt(id,item)}}>Delete</td>
          </tr>
      )
    })}
    </tbody>
  </table></div></>
  )
}

export default Productlist

export async function getStaticProps(context) {
  const response = await axios.get(`https://limeroad-backend.onrender.com/products`);
  const data = response.data;
  let c = data.slice(0,13)
  return {
    props: {c}, 
  }

}
import React, { useEffect, useState } from 'react'
import Box from  '@mui/material/Box';

// interface CardProps {

// }

const mapServerToClient  = (CarfProps: any) => {
   const parentArray = CarfProps.filter((item:any) => Boolean(item.ParentID)).map((item: any) => Object.assign({}, item, { children: []}));
}
const Container = () => {
  
//   const [data, setData] = useState([]);
  useEffect(() => {
    const getData = () => {
        fetch('/api/products')
        .then((data:any) => {
           console.log(data);
        //    setData(data);
        })
     }
    getData();
  }, [])
  return (
    // <Box sx={{backgroundColor: 'red', width: '100px', height: '100px'}}>
    //         test
    // </Box>
    <div>
        Test
        {/* <Box>
        </Box> */}
    </div>
  )
}
export default Container;

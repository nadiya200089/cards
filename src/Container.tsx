import React, { useEffect, useState, useMemo } from 'react'
import Box from '@mui/material/Box';
import { data as mock } from './mock';
// interface CardProps {

// }

const mapServerToClient = (CardProps: any) => {
    if (!CardProps || !CardProps.length) {
        return []
    }
    const parentArray = CardProps.filter((item: any) => !Boolean(item.ParentID)).map((item: any) => Object.assign({}, item, { children: [] }));
    parentArray.forEach((parent: any) => {
        const childrenArray = CardProps.filter((item: any) => item.ParentID === parent.ProductID);
        parent.children = childrenArray;
    })
    //    parentArray.children = childrenArray;
    console.log(parentArray);
    // рекурсия 
    // переделать данную функцию через рекурсию
}

// console.log(parentArray);
const Container = () => {
    const initData = mapServerToClient(mock);
    const [data, setData] = useState(initData);
    useEffect(() => {
        const getData = () => {
            fetch('/api/products', {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: '*/*'
                }
            })
                .then((data: any) => {
                    if (data.data) {
                        setData(data);
                    }
                })
        }
        getData();
    }, []);

    //   mapServerToClient(data);
    const list = useMemo(() => mapServerToClient(data), [data])


    return (
        // <Box sx={{backgroundColor: 'red', width: '100px', height: '100px'}}>
        //         test
        // </Box>
        <div>
            Test
            
             <Box>
        </Box>
        </div>
    )
}
export default Container;

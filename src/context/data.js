import { createContext, useState, useEffect } from "react";
import { getProducts } from '../utils/APIRoutes'
import axios from "axios";

let dataContext = createContext();


const DataContextProvider = (props) => {
    const [data, setdata] = useState([]);
    const [selectedProduct, setselectedProduct] = useState(0);
    useEffect(() => {
        let getAllProducts = async () => {
            let res = await axios.get(getProducts);
            if (res.data.status === true) {
                setdata(res.data.data);
            }
            else {
                alert("Network error boiiiiiii");
            }
        }
        getAllProducts();
    }, [])
    return (
        <dataContext.Provider value={[data, setdata, selectedProduct, setselectedProduct]}>
            {props.children}
        </dataContext.Provider>
    )
}

export default dataContext;
export { DataContextProvider };
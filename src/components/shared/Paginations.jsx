import { Pagination, PaginationItem } from "@mui/material"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";


function Paginations({numberOfPages, totalProducts}){

    const [searchParams] = useSearchParams();
    const pathName = useLocation().pathname;
    const navigate = useNavigate();
    const params = new URLSearchParams(searchParams);
    const paramValue = searchParams.get("pageNumber")
            ? Number(searchParams.get("pageNumber"))
            : 1;

    const onChangeHandler = (event, value)=>{
        console.log("Value STRING: ",value.toString())
        params.set("pageNumber", value.toString());
        navigate(`${pathName}?${params}`)
    }

    return(
        <Pagination
            count={numberOfPages && numberOfPages > 0 ? numberOfPages : 1}
            page={paramValue}
            defaultPage={1}
            onChange={onChangeHandler}
        />
    )
}

export default Paginations;
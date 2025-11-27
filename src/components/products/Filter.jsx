import { FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { FaArrowUp, FaArrowDownLong } from "react-icons/fa6";
import { FiRefreshCw, FiSearch  } from "react-icons/fi";
import { useEffect, useState } from "react";

import "./Filter.css";

import { useLocation, useSearchParams, useNavigate } from "react-router-dom";

function Filter({categories}) {
    // const {categories} = useSelector(
    //     (state) => state.products
    // )

    // const categories = [
    //     { categoryId: 1, categoryName: "Electronics" },
    //     { categoryId: 2, categoryName: "Home Appliances" },
    //     { categoryId: 3, categoryName: "Mobiles" }
    // ]

    const [searchParams] = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const navigate = useNavigate();
    const pathname = useLocation().pathname;

    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("All");
    const [sortBy, setSortBy] = useState("asc");

    useEffect(() => {
        const currentCategory = searchParams.get("category") || "All";
        const currentSortBy = searchParams.get("sortby") || "asc";
        const currentSearchTerm = searchParams.get("keyword") || "";

        setCategory(currentCategory);
        setSearchTerm(currentSearchTerm);
        setSortBy(currentSortBy);
    }, [searchParams]);

    useEffect(() => { 
        const handler = setTimeout(()=>{
            if(searchTerm){
                searchParams.set("keyword", searchTerm);
            }else{
                searchParams.delete("keyword")
            }
            navigate(`${pathname}?${searchParams.toString()}`);
        }, 700);

        return () => {
            clearTimeout(handler);
        };
    }, [searchParams, searchTerm, navigate, pathname]);

    const handleSortBy = () => {
        const newOrder = sortBy === "asc" ? "desc" : "asc";
        params.set("sortby", newOrder);
        navigate(`${pathname}?${params.toString()}`);
        setSortBy(newOrder);
    };

    const handleCategory = (e) =>{
        const selectedCategory = e.target.value;

        if(selectedCategory === "All"){
            params.delete("category");
        }else{
            params.set("category", selectedCategory);
        }
        
        navigate(`${pathname}?${params.toString()}`);
        setCategory(selectedCategory);
        
    }

    const handleClear = () => {
        navigate({pathname: window.location.pathname});
    };

    return (
        <div className="filter-container">
            <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
                <input 
                    type="text"
                    placeholder="Search Products"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:outline-hidden focus:ring-2 focus:ring-[#1976d2]"/>
                <FiSearch className="absolute left-3 text-slate-800 size={20}"/>
            </div>

            <div className="filter-controls">
                <FormControl className="category-select" fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        onChange={(e) => handleCategory(e)}
                    >
                        <MenuItem value="All">All</MenuItem>
                        {categories.map((item, index) => (
                            <MenuItem key={index} value={item.categoryName}>
                                {item.categoryName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button variant="contained" className="sort-button" onClick={handleSortBy} >
                    SORT BY {sortBy === "asc" ? <FaArrowUp /> : <FaArrowDownLong />}
                </Button>
                <Button color="error" variant="contained" className="clear-button" onClick={handleClear}>
                    <FiRefreshCw /> Clear Filter
                </Button>
            </div>
        </div>
    )
}

export default Filter;

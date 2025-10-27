import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductButton({isAvailable, btnLoader}){
    return(
        <button className={` ${isAvailable ? "bg-blue-500 opacity-100 hover:bg-blue-600 cursor-pointer" : "bg-red-500 opacity-70"}
                        text-white py-2 px-3 rounded-lg items-center transition-colors duration-300 w-36 flex justify-center`}
                        
                        disabled={!isAvailable || btnLoader}
                        >
          <ShoppingCartIcon />
          {isAvailable ? "Add to Cart" : "Out Of Stock"}
      </button>
    )
}

export default ProductButton;
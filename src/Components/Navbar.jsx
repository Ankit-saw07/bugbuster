import { useContext } from "react"
import {Link} from "react-router-dom"
import { cartContext } from "../Context/CartContext"
import {Button, Center, Stack, useColorMode} from '@chakra-ui/react'
import {UpDownIcon, ArrowForwardIcon, SearchIcon, LockIcon, MoonIcon} from "@chakra-ui/icons"


export const Navbar=()=>{
    let{cartVal}= useContext(cartContext);
    let{ toggleColorMode}= useColorMode();
    return(
        <Stack direction={['column', 'row']} spacing='24px' display={"flex"} justifyContent={"center"} padding={"30px"}>
            <Link to="/"><Button leftIcon={<UpDownIcon />} colorScheme='red' variant='solid'>Home</Button></Link>
            <Link to="/product"><Button leftIcon={<SearchIcon />} colorScheme='red' variant='solid'>Product</Button></Link>
            <Link to="/login"><Button leftIcon={<LockIcon/>} colorScheme="red" variant={"solid"}>Login</Button></Link>
            <Link to="/signup"><Button leftIcon={<LockIcon/>} colorScheme="red" variant={"solid"}>Signup</Button></Link>
            <Link to="/cart"><Button rightIcon={<ArrowForwardIcon/>} colorScheme="red" variant={"outline"}>Cart-{cartVal}</Button></Link>
           <Button onClick={toggleColorMode} variant={"ghost"} > <MoonIcon viewBox="0 0 24 24" boxSize={"25px"} /></Button>
        </Stack>
    )
}


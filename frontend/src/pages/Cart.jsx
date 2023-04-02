
import { useState, useEffect } from "react";
import {Tabs, TabList, TabPanels, Tab, TabPanel, Input,Checkbox,Container,Image,Stack} from "@chakra-ui/react";
import { Route, useNavigate } from 'react-router';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate=useNavigate()
  const toast = useToast();

  useEffect(() => {
    const items = localStorage.getItem("cart");
    if (items) {
      setCartItems(JSON.parse(items));
    }
  }, []);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [cartItems]);

  const handleRemoveItem = (index) => {
    const items = [...cartItems];
    items.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(items));
    setCartItems(items);
    toast({
      title: "Item removed",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleQuantityChange = (index, action) => {
    const items = [...cartItems];
    if (action === 'increment') {
      items[index].quantity++;
    } else if (action === 'decrement') {
      if (items[index].quantity > 1) {
        items[index].quantity--;
      } else {
        handleRemoveItem(index);
      }
    }
    localStorage.setItem("cart", JSON.stringify(items));
    setCartItems(items);
  }

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
    setTotalPrice(0);
    toast({
      title: "Cart cleared",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  return (
      <>
 
    <div style={{backgroundColor:"#f2f4f5",height:"100vh"
  } }>
    <Flex>
     <Box w="70%">  
    <Box bg="rgb(255, 255, 255)"borderRadius="lg" p="4"  textAlign="left" ml="100px" height="100vh">
                <Text fontSize="2xl" mb="5" fontWeight="bold">
            Cart Page
          </Text>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <>



          {cartItems.map((item, index) => (
            <Flex key={index} alignItems="center" justifyContent="space-between" mb="3">
               <Box flex="1" mt="3">
     <Image src={item.image} alt={item.name} boxSize="150px" objectFit="cover" />
   </Box>     
             
        <Box flex="1">
       <Text fontWeight="bold">Name:</Text>
       <Text fontSize="12px">{item.name}</Text>
     </Box>
          <Box flex="1" ml="50px" mt="-20px">
       <Text fontWeight="bold" >Description:</Text>
       <Text>{item.description}</Text>
     </Box>
          <Box flex="1" mt="-20px">
       <Text fontWeight="bold">Price:</Text>
       <Text>{item.price}</Text>
     </Box>
     
              <Flex alignItems="center">
                <Button size="sm" mr="2" onClick={() => handleQuantityChange(index, 'decrement')}>
                  -
                </Button>
                <Text mr="2">{item.quantity}</Text>
                <Button size="sm" onClick={() => handleQuantityChange(index, 'increment')}>
                  +
                </Button>
                <Button size="sm" ml="4" colorScheme="red" onClick={() => handleRemoveItem(index)}>
                  Remove
                </Button>
              </Flex>
            </Flex>
          ))}
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontWeight="semibold">Total:</Text>
            <Text>${totalPrice.toFixed(2)}</Text>
          </Flex>
          <Button mt="4" onClick={handleClearCart}>
            Clear Cart
          </Button>

          
        </>
      )}
      
    </Box>
    </Box> 
    <Box w="30%">
        <Box bg="rgb(255, 255, 255)" h="40vh" borderRadius="lg" p="4" color="#494953" textAlign="left" ml="20px">  
                 <strong> Order Summary</strong>  
         <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>  <Text pt="30px">Total MRP :  </Text> <Text pt="30px">{totalPrice}₹</Text></div> 
            
         <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>  <Text pt="10px">Total Discounts</Text> <Text pt="10px" color="green">₹0</Text></div> 
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>     <Text pt="10px">Shipping Charges</Text> <Text pt="10px">{Cart.length===0?0:99}₹</Text></div> 
                  <hr/>

        <Text fontWeight="bold">Payable Amount{totalPrice}₹ </Text>
         <Text color="green" fontSize="13px">
         You will Save 0 & Earn ₹51 Vigor Cash on this order
             </Text>   
        </Box>
        <Button backgroundColor="#00B5B7" color="white" width="95%" ml="20px" onClick={()=>{toast("Redirecting to payments page!!");
            navigate("/payments")     } }>
              Proceed to Pay {cartItems.length===0?0:totalPrice+99}₹
        
             </Button>
    </Box>
    </Flex>
   </div>
   </>

   
   )
          }

          export default Cart
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
const ProtectedRoute= ({children}) => {
    let componentName=children.type.name;
    let user=useSelector((state)=>state.user.currentUser);
    if(!user){
        console.log("notUser");
                    console.log(componentName);

        if(componentName=="orderDetails")
           return <Navigate to="/login" replace/>;
           else {if(componentName=='AddProduct'||componentName=='UpdateProduct'){
                   return <Navigate to ='/products'replace/>;}
    }}
    else {
        if(componentName=="SignUp"||componentName=="LoginFinal"){
            return <Navigate to="/products" replace/>}
            else if((componentName=='AddProduct'||componentName=='UpdateProduct')&&user.role=='USER'){
            return <Navigate to ='/products'replace/>;}
        else {

        if(user.role=="ADMIN"){
        if(componentName=="orderDetails")
          return <Navigate to="/products" replace/>
          else if(componentName=="BigShoppingCart")
          return <Navigate to="/products" replace/>
    }}}
    return children;
}
 
export default ProtectedRoute;
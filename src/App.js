import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSingUpPage from "./pages/sign-in-and-sing-up/sign-in-and-sing-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Route, Routes } from "react-router-dom";


class App extends React.Component {
  
  

  unsubscribeFromAuth = null

  componentDidMount(){

    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
        } 
      // createUserProfileDocument(user)
      setCurrentUser(userAuth)
      
    })
    
  } 

 
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route exact path="/signin" element={<SignInAndSingUpPage/>}/> 
        </Routes>
      </div>
    );
  }
}


const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

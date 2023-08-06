import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import supabase from './client'



function App() {
  console.log(supabase);
  const [fetchError, setFetchError] = useState(null);
  const [creators, setCreators] = useState([]);



  useEffect(()=>{
    const fetchSmoothies = async() =>{
      {/** Specifying the table name */}
      const {data, error} = await supabase
      .from('creators')    
      .select()
      if (error){
        setFetchError("Couldn't Fetch the data from the server.")
        setCreators(null)
        console.log(error)
      }
      if (data){
        console.log("I am running.", data)
        setCreators(data);
        setFetchError(null);
      }

    }
    fetchSmoothies()
  }, [])






  const onAdd = async (add)=>{
    
    let id;
    if (creators.length === 0) {
      id = 1;
    } else {
      id = creators.length + 1;
    }

    

   const { data, error } = await supabase
  .from('creators')
  .insert([
    { name: add.name , url : add.url, description: add.description, imageURL: add.imageURL },
  ])
  .select()


    console.log("value of id", id);
    console.log("add.id", data.id);
    const passedCreators = {
      id: id,
      name: add.name,
      url: add.url,
      description: add.description,
      imageURL: add.imageURL
    }

    const updatedCreators = [...creators, passedCreators];

    setCreators(updatedCreators);

  }


  {/**
  if(element.id === passedCreator.id){
        element.name = passedCreator.name,
        element.url = passedCreator.url,
        element.description = passedCreator.description,
        element.imageURL = passedCreator.imageURL
        break;
      } */}

  const onEdit = async (passedCreator)=>{

    const updatedData = {
      name: passedCreator.name,
      url: passedCreator.url,
      description: passedCreator.description,
      imageURL: passedCreator.imageURL,
    };
     //Update the state  
    let newCreators = JSON.parse(JSON.stringify(creators)); //Creating a deep copy
    for(let i = 0; i < newCreators.length; i++){
      let element  = newCreators[i];
      if(element.id == passedCreator.id){
        element.name = passedCreator.name;
        element.url = passedCreator.url;
        element.description = passedCreator.description;
        element.imageURL = passedCreator.imageURL;
        break;

      }
    }
    setCreators(newCreators);
    console.log("passedCreator id is ", passedCreator.id)


    // Update the database
    const { data, error } = await supabase
      .from('creators') // Replace with your actual table name
      .update(updatedData)
      .eq('id', passedCreator.id);

      if (error) {
        console.error('Error updating database:', error);
      }

  }
  

  const onDelete = async (passedCreator)=>{


    //Delete the record from the state
    setCreators(
    creators.filter((creator)=>{
      return creator != passedCreator;

    }));

      // Delete the record from the database
      const { error } = await supabase
      .from('creators') // Replace with your actual table name
      .delete()
      .eq('id', passedCreator.id); // Assuming 'id' is the primary key of your table

    if (error) {
      console.error('Error deleting from database:', error);
    }

  }

  return (
  
  

   <Router>
   <div className="App">
     <div className="top-section">
       <Link className="link-button" to="/">ShowCreator</Link>
       <Link className="link-button" to="/add">AddCreator</Link>
     </div>
     <div className="bottom-section">
       
        <Routes>  
         {/* Route for viewing a single creator */}
    

         {/* Route for adding a new creator */}
         <Route path="/add" element={<AddCreator onAdd={onAdd}/>} />

         {/* Default route for viewing all creators */}
         <Route path="/" exact element={<ShowCreators creators={creators} onDelete = {onDelete} onEdit = {onEdit} />} />
      

         <Route path="/creators/:id" exact element={<ViewCreator creators={creators} onDelete = {onDelete} onEdit = {onEdit} />} />
         </Routes>

     </div>
   </div>
 </Router>

  );
}

export default App;

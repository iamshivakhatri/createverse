import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import AddCreator from "./pages/AddCreator";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "./client";

function App() {
  const [fetchError, setFetchError] = useState(null);
  if (fetchError !== null) {
    console.log("There is error.");
  }
  const [creators, setCreators] = useState([]);

  //Runs when the components are first rendered
  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from("creators").select();
      if (error) {
        setFetchError("Couldn't Fetch the data from the server.");
        setCreators(null);
      }
      if (data) {
        setCreators(data);
        setFetchError(null);
      }
    };
    fetchCreators();
  }, []);

  //Add function to add the creator on the database and on the state.

  const onAdd = async (add) => {
    let id;
    if (creators.length === 0) {
      id = 1;
    } else {
      id = creators.length + 1;
    }
//Adding on the database
    const { data, error } = await supabase
      .from("creators")
      .insert([
        {
          name: add.name,
          url: add.url,
          description: add.description,
          imageURL: add.imageURL,
        },
      ])
      .select();

    if (!data) {
      console.log("There is no data when adding");
    }

    if (error) {
      setFetchError("Couldn't Fetch the data from the server.");
      setCreators(null);
    }

    //Adding the state

    const passedCreators = {
      id: id,
      name: add.name,
      url: add.url,
      description: add.description,
      imageURL: add.imageURL,
    };

    const updatedCreators = [...creators, passedCreators];

    setCreators(updatedCreators);
  };




  // Edit function starts here.

  const onEdit = async (passedCreator) => {
    const updatedData = {
      name: passedCreator.name,
      url: passedCreator.url,
      description: passedCreator.description,
      imageURL: passedCreator.imageURL,
    };
    //Update the state
    let newCreators = JSON.parse(JSON.stringify(creators)); //Creating a deep copy
    for (let i = 0; i < newCreators.length; i++) {
      let element = newCreators[i];
      if (element.id === passedCreator.id) {
        element.name = passedCreator.name;
        element.url = passedCreator.url;
        element.description = passedCreator.description;
        element.imageURL = passedCreator.imageURL;
        break;
      }
    }
    setCreators(newCreators);

    // Update the database
    const { data, error } = await supabase
      .from("creators") // Replace with your actual table name
      .update(updatedData)
      .eq("id", passedCreator.id);

    if (error) {
      console.error("Error updating database:", error);
    }
    if (!data) {
      console.log("Data is not coming while updating");
    }
  };

  //Delete Function

  const onDelete = async (passedCreator) => {
    //Delete the record from the state
    setCreators(
      creators.filter((creator) => {
        return creator !== passedCreator;
      })
    );

    // Delete the record from the database
    const { error } = await supabase
      .from("creators")
      .delete()
      .eq("id", passedCreator.id); // Assuming 'id' is the primary key of your table

    if (error) {
      console.error("Error deleting from database:", error);
    }
  };

  return (

    <Router>

      <div className="App" data-theme="light">
        <div className="top-section">
          <div className="contents">
            <div className="title">
              <p> CREATORVERSE </p>
            </div>
            <div className="buttons-section">
              <Link className="link-button" to="/">
                ShowCreator
              </Link>
              <Link className="link-button" to="/add">
                AddCreator
              </Link>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <Routes>
            {/* Route for viewing a single creator */}

            {/* Route for adding a new creator */}
            <Route path="/add" element={<AddCreator onAdd={onAdd} />} />

            {/* Default route for viewing all creators */}
            <Route
              path="/"
              exact
              element={
                <ShowCreators
                  creators={creators}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              }
            />
            {/**Other routes if something is clickeds */}
            <Route
              path="/creators/:id"
              exact
              element={
                <ViewCreator
                  creators={creators}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

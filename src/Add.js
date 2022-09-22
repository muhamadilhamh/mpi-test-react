import React, { useState, useEffect } from "react";

const Add = () =>{
  const [image, setImage] = useState("");
  const [Items, setItems] = useState([]);

  const onImageChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    setImage(base64);
    
  };
  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) setItems(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(Items));
  });

  const listofItems = () => {
    if (image !== "" ) {
      const data = {
        image: image,
      };
      setItems((oldItems) => {
        return [...oldItems, data];
      });
    } 
    setImage("");
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleRemoveAll = () => {
    setItems([]);
  };

  const handleDelete = (id) => {
    // console.log(id)
    const updateItem = Items.filter((res, indx) => {
      return indx !== id;
    });
    setItems(updateItem);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Add Image</h1>
          <br />
          <input type="file" accept="image/png, image/gif, image/jpeg" placeholder="Add image" onChange={onImageChange} />
          <button className="newbtn" onClick={listofItems}>
            Add Image
          </button>
        </div>
        <table className="table table-hover table-responsive-md" border="2">
          <thead>
            <tr>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            {Items.map((itemVal, index) => {
              return (
                <tr key={index}>
                  <th scope="row">
                    <img src={itemVal.image} alt="" width="100" height="80" />
                  </th>
                  <td>
                    <button
                      className="newbtn-1"
                      aria-hidden="true"
                      onClick={() => {
                        handleDelete(index);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="center_div">
         {Items.length > 2 && (
          <button onClick={handleRemoveAll}>Remove All</button>
         )}
        </div>
        
      </div>
    </>
  );
}

export default Add;

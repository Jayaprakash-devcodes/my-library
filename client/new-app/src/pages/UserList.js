import React, {useEffect, useState} from 'react'

function UserList() {

    const [backendData, setBackendData] = useState([{}]);

    useEffect(()=>{
      fetch("/api").then(
        response => response.json()
      ).then(data =>{
        setBackendData(data)
      })
    },[])
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {
              backendData.map((user, i)=>(
                <tr key={i}>
                  <td >{user.name}</td>
                  <td >{user.age}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
  
      </div>
    )
  }

export default UserList
import { useParams } from "react-router-dom"


function Routes() {

  const {usersname} = useParams()

  return (
    <>
      <h1>Hello {usersname}</h1>
    </>
  )
}

export default Routes

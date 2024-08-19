import React from 'react'
import useFetch from '../../hooks/use-fetch'

function RecipePage() {
  const { loading, data ,error} = useFetch("hello there")
  if (loading) {return <h4>Please wait,Fetching recipe</h4>
    
  }
  return (
      <div>
      <h2>List all the recipes</h2>
      <div>
        <ul>
          {data>0?data:error}
        </ul>
      </div>

    </div>
  )
}

export default RecipePage

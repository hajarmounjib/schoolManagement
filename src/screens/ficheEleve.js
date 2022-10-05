import React from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'

function ficheEleve(props) {
  return (
    <div>
       <Navigation/>
       <Banner/>
       <div className="main">
  <h2>Sidebar Dropdown</h2>
  <p>Click on the dropdown button to open the dropdown menu inside the side navigation.</p>
  <p>This sidebar is of full height (100%) and always shown.</p>
  <p>Some random text..</p>
</div>
    </div>
  )
}

export default ficheEleve
import React from 'react'
import './Body.css'

let imgs = [
       'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
       
       'https://images.unsplash.com/photo-1533090368676-1fd25485db88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',

       'https://images.unsplash.com/photo-1507919909716-c8262e491cde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',

       'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',

       'https://images.unsplash.com/photo-1611679782010-5ac7ff596d9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
       
       'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'




     ];

function Body() {
  return (
       
       <div className='container'>
              <section className='content-container'>
                     <h1>Feature</h1>
              <div className='content-l'>
                     <img src={imgs[0]}/>
                     <h2>"aliquam etiam erat velit scelerisque"</h2>
              </div>

              <div className='content-r'>
                      <h2>"malesuada pellentesque elit eget gravida"</h2>
                     <img src={imgs[1]}/>
              </div>

              <div className='content-l'>
                      <img src={imgs[2]}/>
                      <h2>"cras semper auctor neque vitae tempus" </h2>
                     
              </div>

              <div className='content-r'>
                      <h2>"id donec ultrices tincidunt arcu non sode"</h2>
                     <img src={imgs[3]}/>
              </div>

              <div className='content-l'>
                      <img src={imgs[4]}/>
                      <h2>"sed id semper risus in hendrerit"</h2>
                     
              </div>

              <br></br>
              <br></br>
              <div className='Review-container'> 
                     <h1>Review</h1>

                     <div className="card-container">
                            <div className="card-box">
                                   <div className='card-text'>
                                          <h4><b>Jane Doe</b></h4>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et amet consectetur. Malesuada fames ac turpis eges aliquet ni</p>
                                    </div>
                                    {/* <img src={imgs[5]} width="50" height="50"/> */}
                            </div>

                            <div className="card-box">
                                   <div className='card-text'>
                                          <h4><b>Jane Doe</b></h4>
                                          <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra maecenas accumsan lacus vel. Hac habitasse platea dictumst quisque sagittis.</p>
                                    </div>
                                    {/* <img src={imgs[5]} width="50" height="50"/> */}
                            </div>

                            <div className="card-box">
                                   <div className='card-text'>
                                          <h4><b>Jane Doe</b></h4>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc p.</p>
                                    </div>
                                    {/* <img src={imgs[5]} width="50" height="50"/> */}
                            </div>

                     </div>
                   

                    
              </div>

              </section>

             

       </div>
  )
}

export default Body
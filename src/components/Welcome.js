import React from 'react'
import "./welcome.css"


export default () => {
    return (
        <>
        <header className="masthead text-center w-100">
        <div className="masthead-content">
          <div className="container">
            <h1 className="masthead-heading mb-0">Mega Mail</h1>
            <h2 className="masthead-subheading mb-0">Your one stop to connect with your customers</h2>
            <a href="/signup" className="btn btn-primary btn-xl rounded-pill mt-5">Sign up</a>
          </div>
        </div>
        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>
    
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img className="img-fluid rounded-circle" src="https://q3p9g6n2.rocketcdn.me/wp-content/ml-loads/2015/09/email-laptop-computer-marketing-ss-1920.jpg" alt="laptop"></img>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">For those about to mail...</h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p> */}
                <p className="mt-5">Make sending newsletters, updates and more a snap with MegaMail - perfect for email marketing,  or reaching friends and families with ease</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="p-5">
                <img className="img-fluid rounded-circle" src="https://st2.depositphotos.com/1032115/8301/v/450/depositphotos_83016878-stock-illustration-thin-line-flat-design-of.jpg" alt="mail"></img>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-4">We salute you!</h2>
                <p className="mt-5">Create custom-styled newsletters with our easy-to-use text editor, save drafts for later, recreate and edit previously sent mail, and keep track of subscribers in multiple email groups</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img className="img-fluid rounded-circle" src="https://images.pexels.com/photos/7112/woman-typing-writing-windows.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="laptop"></img>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">Mail all the things</h2>
                <p className="mt-5">Designed with the power of Sendgrid and CKEditor, MegaMail answers your most pressing email marketing needs in an easy-to-use format</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}
# MegaMail Front-End

<img src="public/images/HomePage.jpg">

MegaMail is your personal app for sending emails and newsletters. Perfect for email marketing or reaching friends and families. Designed with the power of Sendgrid and CKEditor, MegaMail answers your most pressing email marketing needs in an easy-to-use format. Create custom-styled newsletters with our easy-to-use text editor, save drafts for later, recreate and edit previously sent mail, and keep track of subscribers in multiple email groups.

MegaMail Back-End: https://github.com/JeremyRoussel/DC-EM-Server

MegaMail was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How it works:
Using the Redux/React framework, the entire site is under the control of a single router and assembled using React components. Using the Sendgrid email API, the app is able to send emails to groups of subscribers.

The design was created through the utilization of CSS and Bootstrap.

## Tools used in the project
### Languages
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

### Modules (for Node.js)
<ul>
  <li>react</li>
  <li>redux</li>
  <li>react-redux</li>
  <li>react-router</li>
  <li>react-router-dom</li>
</ul>

### APIs
<ul>
  <li>Sendgrid Email API: https://sendgrid.com/solutions/email-api/</li>
</ul>

# Goals
## Base Goals
Allow Users to:
<ul>
  <li>Create and save email drafts</li>
  <li>Create subscriber groups</li>
  <li>Send emails to subscriber groups</li>
  <li>View sent emails</li>
</ul>

## Future Goals
Allow Users to:
<ul>
  <li>Send emails out from a personalized address</li>
  <li>Send emails with the Bcc option enabled</li>
</ul>

# Code Snippets
Need Description from Chris
```
<Affix top={.3}>
  <Col style={{visibility:visibility}} ref={node}>
    <FocusLock disabled={!open}>
      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
      <Sidebar open={open} setOpen={setOpen} id={menuId} />
    </FocusLock>
  </Col>
</Affix>
```
<br></br>
Below are the handleSend and handleDelete functions, which trigger the route to the back-end for sending an email or deleting one. Both functions use and update local state and redux state via hooks.
```
  let handleSend = () =>{
    if (emailAddresses.length === 0) {
      alert("Please choose a mailing list!")
      return
    }
    if (editorData === "") {
      alert("Nothing in email body to send!")
      return 
    } 
    let sendObj = {
      send: {
        title: title,
        body: editorData,
        group: emailAddresses
      }
    }
    dispatch(sendEmail(sendObj))
    dispatch(deleteDraft(draftID))
    updateTrigger(!trigger)
    history.push('/dashboard')
  }
  let handleDelete = () =>{
    dispatch(deleteDraft(draftID))
    updateEditorData("")
    document.getElementById('title').value = ""
    updateTitle("")
    updateTrigger(!trigger)
  }
```

<br></br>
# Contributors
## Jeremy Roussel

https://github.com/JeremyRoussel

## Chris David

https://github.com/CM-David

## Dan Gelok

https://github.com/dgelok

## Woody Connell

https://github.com/woody-connell

<img src="public/images/AboutUs.jpg">
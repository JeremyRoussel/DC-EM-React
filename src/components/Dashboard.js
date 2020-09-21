import React from 'react'
import {Container, Jumbotron, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
// import {Link} from 'react-router-dom'

export default () => {
    return (
        <Container>
            <Jumbotron fluid>
                <Container>
                    <h1>Dashboard</h1>
                    <p>Thanks for using MegaMail! Follow the instructions below to get started.</p>
                </Container>
            </Jumbotron>

                <h3>Create a new MegaMail</h3>
                    <p className="m-4">You can create, edit, save, and send marked-up professional emails using CKEditor's custom text editor. All alterations will be saved and will send in the same format they appear in the editor. For additional information, check out <a href="" target="_blank">CKEditor's home page.</a></p>
                <h3>Manage Subscribers</h3>
                    <p className="m-4">Subscribers can be added via the <a href="/subscribers">Subscribers</a> page. All contacts will require an email address and a group. You can create groups simply by naming them in the appropriate field, and selecting that group while composing a MegaMail will send to all of its subscribers.</p>
                <h3>Save and Edit Drafts and Sent Mail</h3>
                    <p className="m-4">All <a href="/sentmail">sent mail</a> can be edited for quick and easy re-sending, and all <a href="/drafts">drafts</a> can be updated, deleted, and sent whenever you're ready!</p>

        </Container>
    )
}
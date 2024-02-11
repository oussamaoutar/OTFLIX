import React, { useState } from 'react'

function Contact() {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [messageSuccess, setMessageSuccess] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = () => {
        if(nom && prenom && email && message) {
            setMessageSuccess(<p style={{marginLeft: '0px', color: 'green', fontWeight: 'bolder'}} className='alert alert-success'>Votre Message a été envoyé avec succès!</p>);
            setNom('')
            setEmail('')
            setMessage('')
            setPrenom('')
            setSubmitted(true)
        }
        else setMessageSuccess(<p style={{marginLeft: '0px', color: 'red', fontWeight: 'bolder'}} className='alert alert-danger'>Veuillez Remplir tous les champs!</p>) 
    }
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <h4 className="blog-title">Contact Us</h4>
                </div>
                <div className="row content my-5" style={{color: "#ffffff"}}>
                    <div className='col-lg-6 d-none d-lg-inline mt-5 pt-5 '>
                        <img src='./otflix-logo.png' alt='logo otflix' style={{maxWidth: '500px', maxHeight: '500px'}} />
                    </div>
                    <div className="col-lg-6 col-12">
                        <form onSubmit={e => e.preventDefault()}>
                            {messageSuccess}
                            <label htmlFor="" className="form-label">Nom:</label>
                            <input type="text" name="" value={nom} id="nom" className="form-control" onChange={e => setNom(e.target.value)} placeholder='Saisir votre nom ici...' />
                            <label htmlFor="" className="form-label">Prénom:</label>
                            <input type="text" name="" value={prenom} id="prenom" className="form-control" onChange={e => setPrenom(e.target.value)} placeholder='Saisir votre prénom ici...' />
                            <label htmlFor="" className="form-label">Email:</label>
                            <input type="text" name="" value={email} id="password" className="form-control" onChange={e => setEmail(e.target.value)} placeholder='Saisir votre email ici...' />
                            <label htmlFor="" className="form-label">Message:</label>
                            <textarea rows={5} name="" value={message} id="textarea" className="form-control" onChange={e => setMessage(e.target.value)} placeholder='Saisir votre message ici...'></textarea>
                            <button id="Submit" onClick={handleSubmit} className='btn btn-success mt-3'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
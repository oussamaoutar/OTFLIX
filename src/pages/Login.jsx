import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { setUsername, setPassword, setValid, setInfo } from '../store/authActions';

function Login({ handleLoggedIn, username, password, valid, info, setUsername, setPassword, setValid, setInfo }) {
    const user = {
        username: 'user',
        password: 'user'
    }

    const handleSubmit = () => {
        if(!(username && password)) setInfo(<p style={{marginLeft: '0px', color: 'red', fontWeight: 'bolder'}} className='alert alert-danger'>Veuillez Remplir tous les champs!</p>)
        else if (username !== user.username || password !== user.password) setInfo(<p style={{marginLeft: '0px', color: 'red', fontWeight: 'bolder'}} className='alert alert-danger'>Les données saisies sont incorrectes!</p>)
        else handleLoggedIn(true)
        if(user.username === username && password === user.password) {
            setInfo(null)
            setUsername('')
            setPassword('')
        }
    }

    useEffect(() => {
        if(user.username === username && password === user.password) {
            setValid(true)
        } 
        else setValid(false)
    }, [username, password])



    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <h4 className="blog-title">Se connecter</h4>
                </div>
                <div className="row content my-5" style={{color: "#ffffff"}}>
                    <div className="col-lg-6 col-12">
                        {info}
                        <form onSubmit={e => e.preventDefault()}>
                            <label htmlFor="" className="form-label">Username :</label>
                            <input type="text" name="" value={username} id="username" className="form-control" onChange={e => setUsername(e.target.value)} placeholder='Saisir votre username ici...' />
                            <label htmlFor="" className="form-label">Password :</label>
                            <input type="password" name="" value={password} id="password" className="form-control" onChange={e => setPassword(e.target.value)} placeholder='Saisir votre mot de passe ici...' />
                            <Link onClick={handleSubmit} to={valid ? '/home' : '/login'} className='btn btn-dark mt-3'>Se connecter</Link>
                        </form>
                    </div>
                    <div className='col-lg-6 d-none d-lg-inline text-center pt-5 '>
                        <img src='./otflix-logo.png' alt='logo otflix' style={{maxWidth: '500px', maxHeight: '500px'}} />
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
  username: state.auth.username,
  password: state.auth.password,
  valid: state.auth.valid,
  info: state.auth.info,
});

const mapDispatchToProps = {
  setUsername,
  setPassword,
  setValid,
  setInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

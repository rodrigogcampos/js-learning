import './Footer.css'

const Footer = () => {
    return (
        <section className='page-footer'>
            <div className='social-media'> 
                <a href='#'><img src="/images/fb.png"/></a>
                <a href='#'><img src="/images/tw.png"/></a>
                <a href='#'><img src="/images/ig.png"/></a>
            </div>
            <div className='logo'>
                <a href='#'><img src="/images/logo.png"/></a>
            </div>
            <div className='developed-by'>
                <h4>Desenvolvido por Alura</h4>
            </div>
        </section>
    )
}

export default Footer
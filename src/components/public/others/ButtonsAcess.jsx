export default function Cookies(props) {
    const button = props.buttons
    const painel = props.painel
    console.log(button)
    return (
        <>
        <div className="buttons-painel">
            <h3>{painel}</h3>
            <div className="grup-buttons">
                {button.map((i,id)=>(
                    <a href={i.link}>
                    <div className="button">
                       <h4>    
                            {i.name}
                        </h4> 
                            <img src="/icons/seta.svg" alt="" />
                    </div>
                    </a>
                ))}
            </div>
        </div>
        </>

    )
}


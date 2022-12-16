export default function CardInfor(props){
    const title = props.title
    const txt = props.txt
    return(
    <div className="card-infor">
        <div className="txt">
        <h3>{title}</h3>
        <h6>{txt}</h6>
        </div>
    </div>
    )
}
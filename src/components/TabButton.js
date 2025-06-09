export default function TabButton(props){
    return(
        <button onClick={props.onClick}>
            {props.children}
        </button>
    );
}
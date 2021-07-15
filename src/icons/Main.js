
const Main = (props) => {
    return ( 
    <div style={{boxSizing: 'border-box',
            color: 'var(--text-color)',
            margin: '0px',
            flexDirection: 'column',
            webkitBoxAlign: 'center',
            alignItems: 'center',
            display: 'flex',}}>
                {props.children}
        </div>
     );
}
 
export default Main;

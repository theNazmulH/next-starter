
const Layout = (props) => {
    return (
        <div>
            <div>
                <h1>Master Layout Part</h1>
            </div>
            {props.children}
        </div>
    );
};

export default Layout;
export const HelloWorld = ({nombre, id}) =>{

    //const nombre = "Juan";

    return (
        <>
            <h1>Hello World!</h1>
            <p>This is a paragraph</p>
            <p>Variable: {nombre} con id: {id}</p>
        </>
    );
}
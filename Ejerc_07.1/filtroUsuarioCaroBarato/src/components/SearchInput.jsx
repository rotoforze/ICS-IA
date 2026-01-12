function SearchInput({ handler }) {
    return (
        <>
            <h4>Busca por nombre</h4>
            <input type="text" name="search" id="search"
                onInput={(e) => {
                    handler(e.target.value)
                }} />
        </>
    );
}
export default SearchInput;
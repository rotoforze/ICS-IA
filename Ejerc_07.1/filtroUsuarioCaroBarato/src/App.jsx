import { memo, useEffect, useMemo, useState } from 'react'
import UserList from './components/UserList';
import SearchInput from './components/SearchInput';

function App() {

  // genero 10.000 usuarios y los guardo
  let usuarios = [];
  for (let i = 0; i < 10000; i++) {
    usuarios.push({
      id: i,
      name: `user ${i}`,
      email: `user${i}@test.org`,
      organization: `empresa ${i} S.A.`
    });
  }

  // filtro
  const [search, setSearch] = useState("");
  const filtro = useMemo(() => {
    if (!search) return usuarios;
    return usuarios.filter(
      (u) => u.name.toLowerCase()
        .includes(search.toLowerCase()));
  }, [search, usuarios]);

  return (
    <>
      <SearchInput handler={setSearch} />
      <UserList UserList={filtro} />
    </>
  );
}

export default App

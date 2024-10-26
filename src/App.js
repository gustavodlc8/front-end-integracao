import { useEffect, useState } from "react"

function App() {
  const [item,setitem] = useState([])

  useEffect(()=>{
    const restCall = async()=>{
      console.log('chamada API')
      const chamada = await fetch('http://localhost:9000/post',{method: 'POST'},)
      const dados = await chamada.json()
      setitem([...dados])
      console.log(item)
  }
  restCall();
  },[])
  return (
    <div>
      <>{item.map((elemento) => <Api key={elemento.name} nome={elemento.name} descricao={elemento.description} imagem={elemento.file}/>)}</>
    </div>
  );
}
const Api = ({nome,descricao,imagem})=>{
  return (
    <div>
      <h3>{nome}</h3>
      <h3>{descricao}</h3>
      <img alt="imagem API" src={imagem} style={{width: 400}} />
    </div>
  )
}
export default App;
